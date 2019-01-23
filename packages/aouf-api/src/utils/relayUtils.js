const {
  fromGlobalId: fromRelayId,
  nodeDefinitions: relayNodeDefinitions,
} = require('graphql-relay');
const { INVALID_ARGUMENT_ERROR } = require('../errors');

const nodeDefinitions = () => {
  const typeResolver = node => resolveNodeType(defs, node);
  let objectResolver = noopObjectResolver;
  let defs = [];

  const graphqlNodeDefinitions = relayNodeDefinitions(
    (...args) => resolveNodeObject(defs, objectResolver, ...args),
    typeResolver,
  );

  const createNodeResolver = resolve => {
    if (resolve) {
      objectResolver = resolve;
    }

    return {
      __resolveType: typeResolver,
    };
  };

  return {
    ...graphqlNodeDefinitions,
    defineNodeType: type => {
      defs = defineNodeType(defs, type);
      return type;
    },
    nodeFieldResolver: graphqlNodeDefinitions.nodeField.resolve,
    createNodeResolver,
  };
};

const noopObjectResolver = () => {
  throw new Error('Node objectResolver missing');
};

const getTypeWrapper = (defs, { name }) =>
  defs[name] ? defs[name].Wrapper : function NodeTypeWrapper() {};

const defineNodeType = (defs, type) => {
  if (typeof type !== 'object') {
    throw new Error('defineNodeType except a GraphQLObjectType as argument');
  }
  if (!type.name) {
    throw new Error("NodeType must have a 'name' property");
  }

  return {
    ...defs,
    [type.name]: { type, Wrapper: getTypeWrapper(defs, type) },
  };
};

const resolveNodeType = (defs, node) => {
  const def = Object.values(defs).find(
    ({ Wrapper }) => node instanceof Wrapper,
  );

  if (!def) {
    throw new Error('Object is not an instance of a defined Node type');
  }

  return def.type;
};

const resolveNodeObject = async (defs, resolver, globalId, ...rest) => {
  const { type: typeName, id } = fromRelayId(globalId);

  if (!defs[typeName]) {
    throw new Error(`Type '${typeName}' is not a defined Node type`);
  }

  const obj = await resolver({ type: typeName, id }, ...rest);
  const { Wrapper } = defs[typeName];

  return obj && typeof obj === 'object'
    ? Object.assign(new Wrapper(), obj)
    : null;
};

const fromGlobalId = (id, type) => {
  const local = fromRelayId(id);
  if (type && type !== local.type) {
    throw new Error(INVALID_ARGUMENT_ERROR);
  }
  return local.id;
};

module.exports = {
  fromGlobalId,
  nodeDefinitions,
};
