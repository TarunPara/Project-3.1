const mongoose = require("mongoose");
const { toJSON } = require("./plugins");

const taskSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter a title"],
    },
    description: {
      type: String,
      required: [true, "Please enter a description"],
    },
    date: {
      type: String,
      required: [true, "Please enter a date"],
    },
    category: {
      type: String,
      required: [true, "Please enter a category"],
    },

    userId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

taskSchema.plugin(toJSON);

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
