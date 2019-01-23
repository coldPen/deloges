const { GraphQLSchema } = require('graphql');

const QueryType = require('./types/QueryType');
const MutationType = require('./types/MutationType');

module.exports = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
});
