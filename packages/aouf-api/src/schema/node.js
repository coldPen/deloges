const { fromGlobalId, nodeDefinitions } = require('../utils/relayUtils');
const { read: readUser } = require('../models/User');

const node = nodeDefinitions();

node.createNodeResolver(({ type, id }, req) => {
  switch (type) {
    case 'Viewer': {
      return req.getViewer();
    }
    case 'User':
      return readUser(fromGlobalId(id, type));
    default:
      return undefined;
  }
});

module.exports = node;
