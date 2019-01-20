const { readVolunteer } = require('../../models/User');

const volunteerInfos = async (req, res) => {
  const { volunteerId } = req.params;
  const user = await readVolunteer(volunteerId);

  res.json(
    (user && {
      id: user.id,
      login: user.login,
      genre: user.genre,
      type: user.user_type
    }) ||
      null
  );
};

module.exports = volunteerInfos;
