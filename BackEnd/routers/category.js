const express = require("express");
const router = express.Router();

// AUTH CONTROLLERS
const {
  requireSignin,
  isAuth,
  isAdmin,
} = require("../controllers/authentication");

// USER CONTROLLER
const { userById } = require("../controllers/user");

// IMPORTING ALL CATEGORY CONTROLLERS
const {
  create,
  categoryById,
  read,
  update,
  remove,
  list,
} = require("../controllers/category");

// LISTING ONE CATEGORY ROUTER
router.get("/category/:categoryId", read);

//CREATING CATEGORY ROUTER
router.post("/category/create/:userId", requireSignin, isAuth, isAdmin, create);
router.put(
  "/category/:categoryId/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  update
);

//DELETE CATEGORY ROUTER
router.delete(
  "/category/:categoryId/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  remove
);

//LISTING ALL CATEGORIES ROUTER
router.get("/categories", list);

router.param("categoryId", categoryById);
router.param("userId", userById);

module.exports = router;
