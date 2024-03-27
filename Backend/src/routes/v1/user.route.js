const express = require("express");
const auth = require("../../middlewares/auth");
const validate = require("../../middlewares/validate");
const userValidation = require("../../validations/user.validation");
const userController = require("../../controllers/user.controller");

const router = express.Router();

router.route("/").get(auth("getEditors"), userController.getEditors);
router.route("/allUsers").get(
  // auth("getUsers"),
  userController.getAllUsers
);
router
  .route("/:id")
  .get(
    // auth("getUserDetail"),
    userController.getUserDetail
  )
  .post(auth("updateProfile"), userController.updateProfile)
  .delete(
    // auth("deleteUser"),
    userController.deleteUserById
  );
router
  .route("/changePassword")
  .post(
    auth("changePassword"),
    validate(userValidation.changePassword),
    userController.changePassword
  );

module.exports = router;
