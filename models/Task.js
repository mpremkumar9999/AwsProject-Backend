const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  title: String,
  completed: Boolean,
});

module.exports = mongoose.model("Task", TaskSchema);
