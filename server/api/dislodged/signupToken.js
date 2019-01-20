const jwt = require('jsonwebtoken');
const { list: listUser } = require('../../models/User');
const { JWT_SECRET } = require('../../constants');
const { EMAIL_ALREADY_SIGNED_UP } = require('../../errors');

const signupToken = async (req, res) => {
  const { login, email, phonenumber } = req.body;

  const [user] = await listUser({ email });

  if (user) {
    throw new Error(EMAIL_ALREADY_SIGNED_UP);
  }

  res.json(
    jwt.sign(
      { login, email, phonenumber },
      JWT_SECRET,
      { expiresIn: 60 * 60 * 24 * 14 } // Expires in two weeks
    )
  );
};

module.exports = signupToken;
