import React from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import Tododisplay from "./components/Tododisplay";
import "./App.css";
import { useState, useEffect } from "react";
import {
  addItemToServer,
  fetchItemsFromServer,
  markCompletedOnServer,
  deleteItemFromServer,
} from "./services/itemService";

function App() {
  const [todoitems, setTodoItems] = useState([]);

  // Load items from server when component mounts
  useEffect(() => {
    const loadItems = async () => {
      try {
        const items = await fetchItemsFromServer();
        setTodoItems(items);
      } catch (error) {
        console.error("Error loading items:", error);
      }
    };
    loadItems();
  }, []);

  const handlenewItem = async (Itemname, Itemduedate) => {
    try {
      // Add item to server first
      const newItem = await addItemToServer(Itemname, Itemduedate);
      // Then update local state
      const newItems = [...todoitems, newItem];
      setTodoItems(newItems);
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  const handleDeleteItem = async (todoItemId) => {
    try {
      // Delete from server first
      await deleteItemFromServer(todoItemId);
      // Then update local state
      const newTodoItems = todoitems.filter((item) => item.id !== todoItemId);
      setTodoItems(newTodoItems);
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const handleToggleComplete = async (todoItemId) => {
    try {
      // Mark as completed on server
      const updatedItem = await markCompletedOnServer(todoItemId);
      // Update local state
      const updatedItems = todoitems.map((item) =>
        item.id === todoItemId ? updatedItem : item
      );
      setTodoItems(updatedItems);
    } catch (error) {
      console.error("Error marking item complete:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <AppName />
        <AddTodo onNewItem={handlenewItem} />
        <Tododisplay
          clickDeleteItem={handleDeleteItem}
          todoitems={todoitems}
          onToggleComplete={handleToggleComplete}
        />
      </div>
    </div>
  );
}

export default App;
