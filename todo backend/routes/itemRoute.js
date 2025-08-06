const express = require("express");
const todoItemRouter = express.Router();

const todoController = require("../controller/todoItemController");

todoItemRouter.get("/", todoController.getAllItems);
todoItemRouter.post("/", todoController.createItem);
todoItemRouter.delete("/:id", todoController.deleteItem);
todoItemRouter.put("/:id", todoController.markAsCompleted);

module.exports = todoItemRouter;
