const httpStatus = require("http-status");
const { taskService } = require("../services");
const catchAsync = require("../utils/catchAsync");

const addTask = catchAsync(async (req, res) => {
  const result = await taskService.addTask(req.body);
  res.send(result);
});

const getTasks = catchAsync(async (req, res) => {
  const result = await taskService.getTasks(req.query);
  res.send(result);
});

const getTaskById = catchAsync(async (req, res) => {
  const result = await taskService.getTaskById(req.params.id);
  res.send(result);
});

const updateTaskById = catchAsync(async (req, res) => {
  const tasks = await taskService.updateTaskById(req.params.id, req.body);
  res.send(tasks);
});

const deleteTaskById = catchAsync(async (req, res) => {
  const result = await taskService.deleteTaskById(req.params.id);
  res.send(result);
});

module.exports = {
  addTask,
  getTasks,
  getTaskById,
  deleteTaskById,
  updateTaskById,
};
