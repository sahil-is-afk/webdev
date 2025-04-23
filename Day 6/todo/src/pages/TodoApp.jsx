import React, { useState } from 'react';

const TodoApp = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Complete online JavaScript course', completed: true },
    { id: 2, text: 'Jog around the park 3x', completed: false },
    { id: 3, text: '10 minutes meditation', completed: false },
    { id: 4, text: 'Read for 1 hour', completed: false },
    { id: 5, text: 'Pick up groceries', completed: false },
    { id: 6, text: 'Complete Todo App on Frontend Mentor', completed: false },
  ]);

  const [newTodo, setNewTodo] = useState('');

  const handleToggle = (id) => {
    setTodos(todos.map(todo => (
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )));
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() === '') return;
    const newItem = {
      id: Date.now(),
      text: newTodo,
      completed: false
    };
    setTodos([...todos, newItem]);
    setNewTodo('');
  };

  const handleClearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to right, #6B21A8, #BE185D)',
      padding: '2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{ width: '100%', maxWidth: '600px' }}>
        <h1 style={{ color: 'white', fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', textAlign: 'center', letterSpacing: '0.1em' }}>TODO</h1>
        <form onSubmit={handleAddTodo} style={{ marginBottom: '1rem' }}>
          <input
            style={{
              width: '100%',
              padding: '0.75rem 1rem',
              borderRadius: '0.5rem',
              backgroundColor: '#111827',
              color: 'white',
              border: 'none'
            }}
            placeholder="Create a new todo..."
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
        </form>
        <div style={{
          backgroundColor: '#111827',
          color: 'white',
          borderRadius: '0.5rem',
          overflow: 'hidden'
        }}>
          {todos.map(todo => (
            <div
              key={todo.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '0.75rem 1rem',
                borderBottom: '1px solid #374151',
                cursor: 'pointer',
                backgroundColor: todo.hover ? '#1F2937' : 'transparent'
              }}
              onClick={() => handleToggle(todo.id)}
            >
              <div style={{ marginRight: '1rem', color: todo.completed ? '#3B82F6' : '#9CA3AF' }}>
                {todo.completed ? '✔️' : '⭕'}
              </div>
              <span style={{ textDecoration: todo.completed ? 'line-through' : 'none', color: todo.completed ? '#6B7280' : 'inherit' }}>{todo.text}</span>
            </div>
          ))}
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '0.875rem',
          color: '#9CA3AF',
          marginTop: '1rem',
          padding: '0 0.5rem'
        }}>
          <span>{todos.filter(t => !t.completed).length} items left</span>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}>All</button>
            <button style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}>Active</button>
            <button style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}>Completed</button>
          </div>
          <button style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }} onClick={handleClearCompleted}>Clear Completed</button>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
