const { readVolunteer } = require('../models/User');
const { ACCESS_FORBIDDEN } = require('../errors');

const requireVolunteerMiddleware = async (req, res, next) => {
  if (!req.session.userId) {
    throw new Error(ACCESS_FORBIDDEN);
  }

  const user = await readVolunteer(req.session.userId);

  if (!user) {
    throw new Error(ACCESS_FORBIDDEN);
  }

  next();
};

module.exports = requireVolunteerMiddleware;
