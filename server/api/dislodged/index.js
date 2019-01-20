const Router = require('express-promise-router');
const requireAdminMiddleware = require('../../middlewares/requireAdmin');
const dislodgedSignupToken = require('./signupToken');
const dislodgedSignup = require('./signup');

const apiVolunteer = Router();
apiVolunteer.post(
  '/signup-token',
  requireAdminMiddleware,
  dislodgedSignupToken
);
apiVolunteer.post('/signup', dislodgedSignup);

module.exports = apiVolunteer;
