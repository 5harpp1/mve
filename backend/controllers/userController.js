const User = require('../models/User');

exports.getUserProfile = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
};