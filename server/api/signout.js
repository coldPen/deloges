const signout = async (req, res) => {
  req.session.destroy();
  res.json(true);
};

module.exports = signout;
