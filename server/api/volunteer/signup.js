const bcrypt = require('bcryptjs');
const { list: listUser, create: createUser } = require('../../models/User');
const { EMAIL_ALREADY_SIGNED_UP } = require('../../errors');
const { USER_TYPES } = require('../../constants');

const volunteerSignup = async (req, res) => {
  const { login, email, password, phonenumber } = req.body;

  const [user] = await listUser({ email });

  if (user) {
    throw new Error(EMAIL_ALREADY_SIGNED_UP);
  }

  const userId = await createUser({
    login,
    email,
    phonenumber,
    password: bcrypt.hashSync(password, 10),
    user_type: USER_TYPES.VOLUNTEER
  });

  res.json(userId);
};

module.exports = volunteerSignup;
