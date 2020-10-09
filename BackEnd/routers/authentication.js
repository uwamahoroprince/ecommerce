const express = require("express");
const router = express.Router();
const { userSignupValidator } = require("../validator/index");

const {
  signup,
  signin,
  signout,
  requireSignin,
} = require("../controllers/authentication");
router.post("/signup", userSignupValidator, signup);
router.post("/signin", signin);
router.get("/signout", signout);

module.exports = router;
