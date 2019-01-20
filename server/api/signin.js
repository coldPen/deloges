const { list: listUser } = require('../models/User');
const bcrypt = require('bcryptjs');

const signin = async (req, res) => {
  const { email, password } = req.body;
  const [user] = await listUser({ email });

  if (!user || !bcrypt.compareSync(password, user.password)) {
    res.json(false);
  } else {
    req.session.userId = user.id;
    res.json(true);
  }
};

module.exports = signin;
