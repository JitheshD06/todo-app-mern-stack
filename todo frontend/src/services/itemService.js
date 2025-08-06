<<<<<<< HEAD
const addItemsToServer = async (task, date) => {
  const response = await fetch("http://localhost:3000/api/items", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ task, date }),
  });
  const item = await response.json();
  return mapItemFromServerToLocalItem(item);
};

//since it is get type request, we don't need to pass body it automatically converts to json

const fetchItemsFromServer = async () => {
  const response = await fetch("http://localhost:3000/api/items");
  const items = await response.json();
  return items.map(mapItemFromServerToLocalItem);
};

const markCompletedOnServer = async (id) => {
  const response = await fetch(`http://localhost:3000/api/items/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Failed to update item");
  }
  const item = await response.json();
  return mapItemFromServerToLocalItem(item);
};

const deleteItemFromServer = async (id) => {
  const response = await fetch(`http://localhost:3000/api/items/${id}`, {
    method: "DELETE",
  });
  return id;
};

const mapItemFromServerToLocalItem = (Item) => {
  return {
    id: Item._id,
    name: Item.task,
    dueDate: Item.date,
    completed: Item.completed,
    createdAt: Item.createdAt,
    updatedAt: Item.updatedAt,
  };
};

export {
  addItemsToServer as addItemToServer,
  fetchItemsFromServer,
  markCompletedOnServer,
  deleteItemFromServer,
};
=======
const addItemsToServer = async (task, date) => {
  const response = await fetch("http://localhost:3000/api/items", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ task, date }),
  });
  const item = await response.json();
  return mapItemFromServerToLocalItem(item);
};

//since it is get type request, we don't need to pass body it automatically converts to json

const fetchItemsFromServer = async () => {
  const response = await fetch("http://localhost:3000/api/items");
  const items = await response.json();
  return items.map(mapItemFromServerToLocalItem);
};

const markCompletedOnServer = async (id) => {
  const response = await fetch(`http://localhost:3000/api/items/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Failed to update item");
  }
  const item = await response.json();
  return mapItemFromServerToLocalItem(item);
};

const deleteItemFromServer = async (id) => {
  const response = await fetch(`http://localhost:3000/api/items/${id}`, {
    method: "DELETE",
  });
  return id;
};

const mapItemFromServerToLocalItem = (Item) => {
  return {
    id: Item._id,
    name: Item.task,
    dueDate: Item.date,
    completed: Item.completed,
    createdAt: Item.createdAt,
    updatedAt: Item.updatedAt,
  };
};

export {
  addItemsToServer as addItemToServer,
  fetchItemsFromServer,
  markCompletedOnServer,
  deleteItemFromServer,
};
>>>>>>> 9c4c36db7380628b92964f0f70c74e84d5a777f0
