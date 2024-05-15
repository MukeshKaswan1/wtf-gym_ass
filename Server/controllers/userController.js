const User = require("../models/userModel");
const bcrypt = require("bcrypt");

module.exports.login = async (req, res, next) => {
  try {
    const { email, password, role } = req.body;
    const user = await User.findOne({ email });
    if (!user)
      return res.json({ msg: "Incorrect email or Password", status: false });
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      return res.json({ msg: "Incorrect email or Password", status: false });
    delete user.password;
    return res.json({ status: true, token: "aasdf854safd12", user });
  } catch (ex) {
    next(ex);
  }
};

module.exports.register = async (req, res, next) => {
  try {
    const { first_name, last_name, mobiles, role, status, email, password } =
      req.body;
    const emailCheck = await User.findOne({ email });
    if (emailCheck)
      return res.json({ msg: "Email already used", status: false });
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      first_name,
      last_name,
      mobiles,
      role,
      status,
      email,
      username,
      password: hashedPassword,
    });
    delete user.password;
    return res.json({ status: true, msg: "Registration Success" });
  } catch (ex) {
    next(ex);
  }
};

//getting users
module.exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({ _id: { $ne: req.params.id } }).select([
      "first_name",
      "last_name",
      "mobiles",
      "role",
      "status",
      "email",
      "username",
      "_id",
    ]);
    return res.json(users);
  } catch (ex) {
    next(ex);
  }
};
