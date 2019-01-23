const Router = require('express-promise-router');
const { read: readUser } = require('../models/User');

const viewerMiddleware = Router();

viewerMiddleware.use((req, res, next) => {
  let user;
  req.unsetViewer = () => {
    delete req.session.viewer;
    user = undefined;
  };
  req.setViewer = ({ userId }) => {
    req.session.viewer = { userId };
    user = undefined;
  };
  req.getViewer = async () => {
    const { userId } = req.session.viewer || {};

    if (!user && userId) {
      user = readUser(userId);
    }

    return { userId, user };
  };
  next();
});

module.exports = viewerMiddleware;
