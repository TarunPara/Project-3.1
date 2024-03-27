const catchAsync = require("../utils/catchAsync");
const { userService } = require("../services");

const getEditors = catchAsync(async (req, res) => {
  const editors = await userService.queryUsers({ role: "editor" });
  res.send(editors);
});

const getAllUsers = catchAsync(async (req, res) => {
  const users = await userService.queryUsers();
  res.send(users);
});
const getUserDetail = catchAsync(async (req, res) => {
  const user = await userService.getUserById(req.params.id);
  res.send(user);
});
const updateProfile = catchAsync(async (req, res) => {
  const user = await userService.updateUserById(req.params.id, req.body);
  res.send(user);
});
const changePassword = catchAsync(async (req, res) => {
  const user = await userService.changePassword(req.user.id, req.body);
  res.send({ user, message: "Password changed successfully" });
});
const deleteUserById = catchAsync(async (req, res) => {
  const result = await userService.deleteUserById(req.params.id);
  res.send(result);
});
module.exports = {
  getEditors,
  changePassword,
  getAllUsers,
  getUserDetail,
  updateProfile,
  deleteUserById,
};
