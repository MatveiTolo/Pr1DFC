import React from 'react';
import { useTodoContext } from '../context/TodoContext';

const TodoList: React.FC = () => {
  const { todos, toggleTodo, deleteTodo } = useTodoContext();

  return (
    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
      {todos.map(todo => (
        <li
          key={todo.id}
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '10px',
            padding: '12px',
            backgroundColor: todo.completed ? '#f5f5f5' : 'white',
            border: '1px solid #ff9800',
            borderRadius: '8px',
            transition: 'all 0.3s'
          }}
        >
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
            style={{
              width: '20px',
              height: '20px',
              marginRight: '12px',
              cursor: 'pointer',
              accentColor: '#ff5722'
            }}
          />
          <span
            style={{
              flex: 1,
              textDecoration: todo.completed ? 'line-through' : 'none',
              color: todo.completed ? '#999' : '#333',
              fontSize: '16px'
            }}
          >
            {todo.text}
          </span>
          <button
            onClick={() => deleteTodo(todo.id)}
            style={{
              padding: '6px 12px',
              backgroundColor: '#f44336',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px',
              transition: 'background-color 0.3s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d32f2f'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f44336'}
          >
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;