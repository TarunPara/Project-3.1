const express = require("express");
const authRoute = require("./auth.route");
const userRoute = require("./user.route");
const taskRoute = require("./task.route");

const router = express.Router();

const defaultRoutes = [
  {
    path: "/auth",
    route: authRoute,
  },

  {
    path: "/user",
    route: userRoute,
  },

  {
    path: "/tasks",
    route: taskRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});
module.exports = router;
