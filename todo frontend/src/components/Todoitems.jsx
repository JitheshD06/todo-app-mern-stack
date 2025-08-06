<<<<<<< HEAD
function TodoItem({
  todoitem,
  tododate,
  itemId,
  clickDeleteItem,
  completed,
  onToggleComplete,
}) {
  // Format the date to a readable format
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div
      className={`bg-white rounded-lg shadow-sm p-4 mb-2 hover:shadow-md transition-all ${
        completed ? "opacity-75" : ""
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center flex-1 gap-3">
          <input
            type="checkbox"
            checked={completed}
            onChange={() => onToggleComplete(itemId)}
            className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <div>
            <p
              className={`text-lg font-medium ${
                completed ? "text-gray-500 line-through" : "text-gray-800"
              }`}
            >
              {todoitem}
            </p>
            <p className="text-sm text-gray-500">{formatDate(tododate)}</p>
          </div>
        </div>
        <button
          type="button"
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors"
          onClick={() => clickDeleteItem(itemId)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
=======
function TodoItem({
  todoitem,
  tododate,
  itemId,
  clickDeleteItem,
  completed,
  onToggleComplete,
}) {
  // Format the date to a readable format
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div
      className={`bg-white rounded-lg shadow-sm p-4 mb-2 hover:shadow-md transition-all ${
        completed ? "opacity-75" : ""
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center flex-1 gap-3">
          <input
            type="checkbox"
            checked={completed}
            onChange={() => onToggleComplete(itemId)}
            className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <div>
            <p
              className={`text-lg font-medium ${
                completed ? "text-gray-500 line-through" : "text-gray-800"
              }`}
            >
              {todoitem}
            </p>
            <p className="text-sm text-gray-500">{formatDate(tododate)}</p>
          </div>
        </div>
        <button
          type="button"
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors"
          onClick={() => clickDeleteItem(itemId)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
>>>>>>> 9c4c36db7380628b92964f0f70c74e84d5a777f0
