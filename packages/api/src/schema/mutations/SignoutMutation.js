const { nonNull } = require('../../utils/graphqlUtils');
const ViewerType = require('../types/ViewerType');

const SignoutMutation = {
  description: 'Signout the viewer',
  type: nonNull(ViewerType),
  resolve: (root, args, req) => {
    req.unsetViewer();

    return req.getViewer();
  },
};

module.exports = SignoutMutation;
