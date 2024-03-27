const { Task } = require("../models");
const ApiError = require("../utils/ApiError");
const httpStatus = require("http-status");

const addTask = async (taskBody) => {
  const product = await Task.create(taskBody);
  return product;
};

const getTasks = async (query) => {
  const tasks = await Task.find(query);
  return tasks;
};

const getTaskById = async (id) => {
  return Task.findById(id);
};
const updateTaskById = async (id, updateBody) => {
  let task = await getTaskById(id);
  if (!task) {
    throw new ApiError(httpStatus.NOT_FOUND, "Task not found");
  }

  // Update task in the database
  task = await Task.findByIdAndUpdate(id, updateBody, { new: true });

  return task;
};

const deleteTaskById = async (id) => {
  let task = await getTaskById(id);
  if (!task) {
    throw new ApiError(httpStatus.NOT_FOUND, "Task not found");
  }

  await Task.findByIdAndDelete(id);
};

module.exports = {
  addTask,
  getTasks,
  getTaskById,
  updateTaskById,
  deleteTaskById,
};
