const userPermissions = [
  "getUserDetail",
  "changePassword",
  "updateProfile",
  "addReview",
  "addRating",
  "getRatingByProduct",
  "getRatingById",
  "deleteRating",
  "newOrder",
  "myOrders",
];
const adminPermissions = [
  "addProduct",
  "updateProduct",
  "deleteProduct",
  "getUsers",
  "getUserDetail",
  "deleteUser",
  "getRatingByProduct",
  "getRatingById",
  "allOrders",
  "updateOrder",
  "deleteOrder",
];

const allRoles = {
  user: userPermissions,
  admin: adminPermissions,
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
