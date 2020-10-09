const User = require("../models/user");
const { errorHandler } = require("../models/help/dbErrorHander");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");
require("dotenv").config();

exports.signup = (req, res) => {
  console.log(req.body);

  const user = new User(req.body);

  user.save((err, user) => {
    if (err) {
      return res.status(400).json({ err: errorHandler(err) });
    }
    res.json({
      user,
    });
  });
};
exports.signin = (req, res) => {
  //cheking user based on email
  const { email, password } = req.body;
  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res
        .status(400)
        .json({ error: "user with that email dosen't exist please signup" });
    }
    //checking if user and password matche
    //authentication method in user model
    if (!user.authenticate(password)) {
      return res.status(401).json({ error: "E-mail and password dont match" });
    }
    //generate asigned token with uuserid and secret
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    //persist the tocken as 't' in cookie with expiry date
    res.cookie("t", token, { expire: new Date() + 9999 });
    //return response with user and tocken to fronted client
    const { _id, name, email, role } = user;
    return res.json({ token, user: { _id, email, name, role } });
  });
};
exports.signout = (req, res) => {
  res.clearCookie("t");
  res.json({ message: "Signed out successfuly" });
};
exports.requireSignin = expressJwt({
  secret: process.env.JWT_SECRET,
  userProperty: "auth",
});
exports.isAuth = (req, res, next) => {
  let user = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!user) {
    return res.status(403).json({
      error: "Access Denied",
    });
  }
  next();
};
exports.isAdmin = (req, res, next) => {
  if (req.profile.role == 0) {
    return res.status(403).json({
      error: "Access to Admin Panel Denied",
    });
  }
  next();
};
