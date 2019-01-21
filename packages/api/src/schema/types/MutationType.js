const { GraphQLObjectType } = require('graphql');
const SigninMutation = require('../mutations/SigninMutation');
const SignoutMutation = require('../mutations/SignoutMutation');
const VolunteerSignupMutation = require('../mutations/VolunteerSignupMutation');

module.exports = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signin: SigninMutation,
    signout: SignoutMutation,
    volunteerSignup: VolunteerSignupMutation
  }
});
