const User = require('./model');

exports.createUser = async (req, res) => {
  try {
    const { email } = req.body;
    let user = await User.findOne({ email });
    if (user) {
      return res.json({ message: 'already registered user' });
    }

    user = new User(req.body);
    await user.save();
    res.json({ message: 'success!' });
  } catch (error) {
    console.log(error);
    res.json({ message: 'server error!' });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (Object.entries(users).length === 0) {
      return res.status(404).json({ message: 'no users' });
    }
    res.json(users);
  } catch (error) {
    console.log(error);
    res.json({ message: 'server error!' });
  }
};
