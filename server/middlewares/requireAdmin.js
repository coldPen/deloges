const { readAdmin } = require('../models/User');
const { ACCESS_FORBIDDEN } = require('../errors');

const requireAdminMiddleware = async (req, res, next) => {
  if (!req.session.userId) {
    throw new Error(ACCESS_FORBIDDEN);
  }

  const user = await readAdmin(req.session.userId);

  if (!user) {
    throw new Error(ACCESS_FORBIDDEN);
  }

  next();
};

module.exports = requireAdminMiddleware;
