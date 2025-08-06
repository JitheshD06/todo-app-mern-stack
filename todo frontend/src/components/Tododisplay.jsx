<<<<<<< HEAD
import TodoItem from "./Todoitems";

const Tododisplay = ({ todoitems, clickDeleteItem, onToggleComplete }) => {
  const activeItems = todoitems.filter((item) => !item.completed);
  const completedItems = todoitems.filter((item) => item.completed);

  if (todoitems.length === 0) {
    return (
      <div className="max-w-2xl mx-auto mt-8">
        <div
          className="text-center py-8 bg-gray-50 rounded-lg"
          key="empty-state"
        >
          <p className="text-gray-500">No todos yet. Add one above!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto mt-8">
      {[
        // Active Items Section
        <section key="active-section" className="mb-8">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">
            Active Tasks
          </h2>
          {activeItems.length === 0 ? (
            <p className="text-gray-500 text-center py-4">No active tasks</p>
          ) : (
            <div className="space-y-2">
              {activeItems.map((item) => (
                <TodoItem
                  key={item.id}
                  todoitem={item.name}
                  tododate={item.dueDate}
                  itemId={item.id}
                  completed={item.completed}
                  clickDeleteItem={clickDeleteItem}
                  onToggleComplete={onToggleComplete}
                />
              ))}
            </div>
          )}
        </section>,

        // Completed Items Section
        completedItems.length > 0 && (
          <section key="completed-section">
            <h2 className="text-lg font-semibold text-gray-700 mb-3">
              Completed
            </h2>
            <div className="space-y-2">
              {completedItems.map((item) => (
                <TodoItem
                  key={item.id}
                  todoitem={item.name}
                  tododate={item.dueDate}
                  itemId={item.id}
                  completed={item.completed}
                  clickDeleteItem={clickDeleteItem}
                  onToggleComplete={onToggleComplete}
                />
              ))}
            </div>
          </section>
        ),
      ].filter(Boolean)}
    </div>
  );
};

export default Tododisplay;
=======
import TodoItem from "./Todoitems";

const Tododisplay = ({ todoitems, clickDeleteItem, onToggleComplete }) => {
  const activeItems = todoitems.filter((item) => !item.completed);
  const completedItems = todoitems.filter((item) => item.completed);

  if (todoitems.length === 0) {
    return (
      <div className="max-w-2xl mx-auto mt-8">
        <div
          className="text-center py-8 bg-gray-50 rounded-lg"
          key="empty-state"
        >
          <p className="text-gray-500">No todos yet. Add one above!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto mt-8">
      {[
        // Active Items Section
        <section key="active-section" className="mb-8">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">
            Active Tasks
          </h2>
          {activeItems.length === 0 ? (
            <p className="text-gray-500 text-center py-4">No active tasks</p>
          ) : (
            <div className="space-y-2">
              {activeItems.map((item) => (
                <TodoItem
                  key={item.id}
                  todoitem={item.name}
                  tododate={item.dueDate}
                  itemId={item.id}
                  completed={item.completed}
                  clickDeleteItem={clickDeleteItem}
                  onToggleComplete={onToggleComplete}
                />
              ))}
            </div>
          )}
        </section>,

        // Completed Items Section
        completedItems.length > 0 && (
          <section key="completed-section">
            <h2 className="text-lg font-semibold text-gray-700 mb-3">
              Completed
            </h2>
            <div className="space-y-2">
              {completedItems.map((item) => (
                <TodoItem
                  key={item.id}
                  todoitem={item.name}
                  tododate={item.dueDate}
                  itemId={item.id}
                  completed={item.completed}
                  clickDeleteItem={clickDeleteItem}
                  onToggleComplete={onToggleComplete}
                />
              ))}
            </div>
          </section>
        ),
      ].filter(Boolean)}
    </div>
  );
};

export default Tododisplay;
>>>>>>> 9c4c36db7380628b92964f0f70c74e84d5a777f0
