const Router = require('express-promise-router');
const dislodgedSignupToken = require('./signupToken');
const dislodgedSignup = require('./signup');

const apiVolunteer = Router();
apiVolunteer.post('/signup-token', dislodgedSignupToken);
apiVolunteer.post('/signup', dislodgedSignup);

module.exports = apiVolunteer;
