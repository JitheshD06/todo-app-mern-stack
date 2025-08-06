const TodoItems = require("../model/itemModel");

exports.createItem = async (req, res, next) => {
  const { task, date } = req.body;
  const todoItems = new TodoItems({
    task,
    date,
  });
  await todoItems.save();
  res.status(201).json(todoItems);
};

exports.getAllItems = async (req, res) => {
  const todoItems = await TodoItems.find();
  res.status(200).json(todoItems);
};

exports.markAsCompleted = async (req, res) => {
  try {
    const { id } = req.params;
    const todoItem = await TodoItems.findById(id);
    if (!todoItem) {
      return res.status(404).json({ message: "Todo item not found" });
    }
    todoItem.completed = !todoItem.completed; // Toggle the completed status
    await todoItem.save();
    res.json(todoItem);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating todo item", error: error.message });
  }
};

exports.deleteItem = async (req, res) => {
  const { id } = req.params;
  await TodoItems.findByIdAndDelete(id);
  res.status(200).json({ message: "Item deleted successfully", id });
};
