const { GraphQLList, GraphQLNonNull } = require('graphql');

const nonNull = type => new GraphQLNonNull(type);

const listOf = type => nonNull(new GraphQLList(nonNull(type)));

module.exports = {
  listOf,
  nonNull,
};
