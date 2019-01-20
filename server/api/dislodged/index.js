const Router = require('express-promise-router');
const requireAdminMiddleware = require('../../middlewares/requireAdmin');
const dislodgedSignupToken = require('./signupToken');
const dislodgedSignup = require('./signup');

const apiDislodged = Router();
apiDislodged.post(
  '/signup-token',
  requireAdminMiddleware,
  dislodgedSignupToken
);
apiDislodged.post('/signup', dislodgedSignup);

module.exports = apiDislodged;
