const { GraphQLObjectType } = require('graphql');
const { nonNull } = require('../../utils/graphqlUtils');
const ViewerType = require('./ViewerType');
const { nodeField } = require('../node');

module.exports = new GraphQLObjectType({
  name: 'Query',
  fields: {
    node: nodeField,
    viewer: {
      type: nonNull(ViewerType),
      description: 'The current user',
      resolve: (root, args, req) => req.getViewer()
    }
  }
});
