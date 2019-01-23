const { GraphQLObjectType, GraphQLString, GraphQLBoolean } = require('graphql');
const { globalIdField } = require('graphql-relay');
const { defineNodeType, nodeInterface } = require('../node');

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: globalIdField('User'),
    isAdmin: {
      type: GraphQLBoolean,
      description: 'If the user is an admin',
    },
    isDislodged: {
      type: GraphQLBoolean,
      description: 'If the user is currently dislodged',
    },
    isVolunteer: {
      type: GraphQLBoolean,
      description: 'If the user is a volunteer',
    },
    email: {
      type: GraphQLString,
      description: 'User’s email',
    },
    userName: {
      type: GraphQLString,
      description: 'User’s user name',
    },
    firstName: {
      type: GraphQLString,
      description: 'User’s first name',
    },
    lastName: {
      type: GraphQLString,
      description: 'User’s last name',
    },
    gender: {
      type: GraphQLString,
      description: 'User’s gender',
    },
    phone: {
      type: GraphQLString,
      description: 'User’s phone',
    },
    address: {
      type: GraphQLString,
      description: 'User’s address',
    },
  },
  interfaces: [nodeInterface],
});

defineNodeType(UserType);

module.exports = UserType;
