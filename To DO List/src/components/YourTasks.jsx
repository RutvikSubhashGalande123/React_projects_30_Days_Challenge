import React, { useState } from "react";

function YourTasks() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodoIndex, setCurrentTodoIndex] = useState(null);

  const handleAdd = () => {
    if (!todo.trim()) return;
    if (isEditing) {
      const updatedTodos = todos.map((item, index) =>
        index === currentTodoIndex ? { ...item, text: todo } : item
      );
      setTodos(updatedTodos);
      setIsEditing(false);
      setCurrentTodoIndex(null);
    } else {
      setTodos([...todos, { text: todo, isCompleted: false }]);
    }
    setTodo("");
  };

  const handleEdit = (index) => {
    setTodo(todos[index].text);
    setIsEditing(true);
    setCurrentTodoIndex(index);
  };

  const handleDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const handleToggleCompletion = (index) => {
    const updatedTodos = todos.map((item, i) =>
      i === index ? { ...item, isCompleted: !item.isCompleted } : item
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="mx-4 md:mx-10 lg:mx-20 my-5 rounded-xl p-5 bg-violet-300 min-h-screen">
      <div className="addTodo">
        <div className="mb-5">
          <h2 className="text-xl md:text-2xl font-bold">
            {isEditing ? "Edit Todo" : "Add Todo"}
          </h2>
          <div className="flex flex-col md:flex-row items-center">
            <input
              type="text"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              className="w-full md:w-[500px] rounded-md p-2 py-1 mb-3 md:mb-0"
            />
            <button
              className="bg-blue-500 text-white hover:bg-blue-700 p-2 py-1 rounded-md font-bold w-full md:w-auto md:ml-3"
              onClick={handleAdd}
            >
              {isEditing ? "Update" : "Add"}
            </button>
          </div>
        </div>
        <h2 className="text-xl md:text-2xl font-bold mb-3">Your Todos</h2>

        <div className="todos">
          {todos.map((item, index) => (
            <div
              className="todo flex items-center justify-between py-3 border-b border-gray-300 w-1/2"
              key={index}
            >
              <div className="flex items-center flex-grow">
                <input
                  type="checkbox"
                  checked={item.isCompleted}
                  onChange={() => handleToggleCompletion(index)}
                  className="mr-3"
                />
                <div
                  className={`${
                    item.isCompleted ? "line-through" : ""
                  } flex-grow`}
                >
                  {item.text}
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  className="bg-gray-500 text-white hover:bg-blue-700 p-2 py-1 rounded-md font-bold"
                  onClick={() => handleEdit(index)}
                >
                  <i className="fas fa-edit"></i>
                </button>
                <button
                  className="bg-gray-500 text-white hover:bg-black-600 p-2 py-1 rounded-md font-bold"
                  onClick={() => handleDelete(index)}
                >
                  <i className="fas fa-trash-alt"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default YourTasks;
