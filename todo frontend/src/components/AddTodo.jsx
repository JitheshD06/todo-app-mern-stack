<<<<<<< HEAD
import { useState } from "react";

function AddTodo({ onNewItem }) {
  let [itemName, setItemName] = useState("");
  let [itemDueDate, setItemDueDate] = useState("");

  let handleTodoName = (event) => {
    setItemName(event.target.value);
  };

  let handleTodoDate = (event) => {
    setItemDueDate(event.target.value);
  };

  let handleAddButton = () => {
    onNewItem(itemName, itemDueDate);
    setItemName("");
    setItemDueDate("");
  };

  return (
    <div className="max-w-2xl mx-auto mt-6 p-4">
      <div className="flex gap-4 items-center">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={itemName}
            onChange={handleTodoName}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="w-40">
          <input
            type="date"
            value={itemDueDate}
            onChange={handleTodoDate}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="button"
          className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
          onClick={handleAddButton}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default AddTodo;
=======
import { useState } from "react";

function AddTodo({ onNewItem }) {
  let [itemName, setItemName] = useState("");
  let [itemDueDate, setItemDueDate] = useState("");

  let handleTodoName = (event) => {
    setItemName(event.target.value);
  };

  let handleTodoDate = (event) => {
    setItemDueDate(event.target.value);
  };

  let handleAddButton = () => {
    onNewItem(itemName, itemDueDate);
    setItemName("");
    setItemDueDate("");
  };

  return (
    <div className="max-w-2xl mx-auto mt-6 p-4">
      <div className="flex gap-4 items-center">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={itemName}
            onChange={handleTodoName}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="w-40">
          <input
            type="date"
            value={itemDueDate}
            onChange={handleTodoDate}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="button"
          className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
          onClick={handleAddButton}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default AddTodo;
>>>>>>> 9c4c36db7380628b92964f0f70c74e84d5a777f0
