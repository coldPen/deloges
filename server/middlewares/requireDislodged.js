const { readDislodged } = require('../models/User');
const { ACCESS_FORBIDDEN } = require('../errors');

const requireDislodgedMiddleware = async (req, res, next) => {
  if (!req.session.userId) {
    throw new Error(ACCESS_FORBIDDEN);
  }

  const user = await readDislodged(req.session.userId);

  if (!user) {
    throw new Error(ACCESS_FORBIDDEN);
  }

  next();
};

module.exports = requireDislodgedMiddleware;
