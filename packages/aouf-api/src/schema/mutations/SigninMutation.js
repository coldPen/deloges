const { GraphQLString } = require('graphql');
const { nonNull } = require('../../utils/graphqlUtils');
const ViewerType = require('../types/ViewerType');
const { authenticate: authenticateUser } = require('../../models/User');

const SigninMutation = {
  description: 'Signin the viewer',
  type: nonNull(ViewerType),
  args: {
    email: {
      type: nonNull(GraphQLString),
      description: 'User’s email',
    },
    password: {
      type: nonNull(GraphQLString),
      description: 'User’s password',
    },
  },
  resolve: async (root, { email, password }, req) => {
    const user = await authenticateUser({ email, password });

    if (user) {
      req.setViewer({ userId: user.id });
    }

    return req.getViewer();
  },
};

module.exports = SigninMutation;
