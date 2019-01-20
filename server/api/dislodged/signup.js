const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { list: listUser, create: createUser } = require('../../models/User');
const {
  UNKNOWN_ERROR,
  EMAIL_ALREADY_SIGNED_UP,
  INVALID_SIGNUP_TOKEN
} = require('../../errors');
const { USER_TYPES, JWT_SECRET } = require('../../constants');

const dislodgedSignup = async (req, res) => {
  const { token, password } = req.body;

  console.log(req.body, token, password);

  try {
    jwt.verify(token, JWT_SECRET);
  } catch (e) {
    if (e.name === 'JsonWebTokenError') {
      throw new Error(INVALID_SIGNUP_TOKEN);
    } else {
      throw new Error(UNKNOWN_ERROR);
    }
  }

  const { login, email, phonenumber } = jwt.decode(token);
  const [user] = await listUser({ email });

  if (user) {
    throw new Error(EMAIL_ALREADY_SIGNED_UP);
  }

  const userId = await createUser({
    login,
    email,
    phonenumber,
    password: bcrypt.hashSync(password, 10),
    user_type: USER_TYPES.DISLODGED
  });

  res.json(userId);
};

module.exports = dislodgedSignup;
