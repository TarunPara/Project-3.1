const express = require("express");
const taskController = require("../../controllers/task.controller");

const router = express.Router();

router.route("/").post(taskController.addTask).get(taskController.getTasks);

router
  .route("/:id")
  .get(taskController.getTaskById)
  .put(taskController.updateTaskById)
  .delete(taskController.deleteTaskById);

module.exports = router;
