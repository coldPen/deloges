const { GraphQLString } = require('graphql');
const { nonNull } = require('../../utils/graphqlUtils');
const ViewerType = require('../types/ViewerType');
const { signupVolunteer } = require('../../models/User');

const VolunteerSignupMutation = {
  description: 'Signup the viewer as volunteer',
  type: nonNull(ViewerType),
  args: {
    userName: {
      type: nonNull(GraphQLString),
      description: 'User’s user name',
    },
    email: {
      type: nonNull(GraphQLString),
      description: 'User’s email',
    },
    password: {
      type: nonNull(GraphQLString),
      description: 'User’s password',
    },
    phone: {
      type: GraphQLString,
      description: 'User’s phone',
    },
  },
  resolve: async (root, { userName, email, password, phone }, req) => {
    const userId = await signupVolunteer({ userName, email, password, phone });
    req.setViewer({ userId });

    return req.getViewer();
  },
};

module.exports = VolunteerSignupMutation;
