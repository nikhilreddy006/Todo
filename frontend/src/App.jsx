import { useState, useEffect } from 'react';
import './App.css';
import { CreateTodo } from './components/CreateTodo';
import { Todos } from './components/Todos';

function App() {
  const [todos, setTodos] = useState([]);

  // Fetch todos from backend
  async function fetchTodos() {
    const res = await fetch('http://localhost:3000/todo');
    const data = await res.json();
    setTodos(data.todos);
  }

  // Add a new todo
  async function addTodo(title, description) {
    await fetch('http://localhost:3000/todo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description })
    });
    fetchTodos();
  }

  // Mark a todo as completed
  async function markCompleted(id) {
    await fetch('http://localhost:3000/completed', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id })
    });
    fetchTodos();
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="container">
      <h1 className="app-title">✨ My Todo List</h1>
      <div className="box">
        <CreateTodo addTodo={addTodo} />
      </div>
      <div className="todos-container">
        <Todos todos={todos} markCompleted={markCompleted} />
      </div>
    </div>
  );
}

export default App;
