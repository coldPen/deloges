const { GraphQLObjectType } = require('graphql');
const { globalIdField } = require('graphql-relay');
const { defineNodeType, nodeInterface } = require('../node');

const ViewerType = new GraphQLObjectType({
  name: 'Viewer',
  fields: () => ({
    id: globalIdField('Viewer'),
    user: {
      // eslint-disable-next-line global-require
      type: require('./UserType'),
      description: 'The spectator’s user if authenticated'
    }
  }),
  interfaces: [nodeInterface]
});

defineNodeType(ViewerType);

module.exports = ViewerType;
