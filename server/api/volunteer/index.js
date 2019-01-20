const Router = require('express-promise-router');
const volunteerInfos = require('./infos');
const volunteerSignup = require('./signup');

const apiVolunteer = Router();
apiVolunteer.get('/infos/:volunteerId', volunteerInfos);
apiVolunteer.post('/signup', volunteerSignup);

module.exports = apiVolunteer;
