const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const todoItemRouter = require("./routes/itemRoute");
const errorController = require("./controller/errorController");
const dbPath =
  "mongodb+srv://root:root@myproject.pmimgo1.mongodb.net/TodoApp?retryWrites=true&w=majority&appName=Myproject";

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/api/items", todoItemRouter);
app.use(errorController.handleError);

mongoose
  .connect(dbPath)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`server running at ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
