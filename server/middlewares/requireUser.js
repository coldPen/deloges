const { read: readUser } = require('../models/User');
const { ACCESS_FORBIDDEN } = require('../errors');

const requireUserMiddleware = async (req, res, next) => {
  if (!req.session.userId) {
    throw new Error(ACCESS_FORBIDDEN);
  }

  const user = await readUser(req.session.userId);

  if (!user) {
    throw new Error(ACCESS_FORBIDDEN);
  }

  next();
};

module.exports = requireUserMiddleware;
