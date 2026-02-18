import React from 'react';
import { useTodoContext } from '../context/TodoContext';

const TodoList: React.FC = () => {
  const { todos, toggleTodo, deleteTodo } = useTodoContext();

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {todos.map(todo => (
        <li
          key={todo.id}
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '8px',
            padding: '8px',
            border: '1px solid #ddd',
            borderRadius: '4px'
          }}
        >
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
            style={{ marginRight: '8px' }}
          />
          <span
            style={{
              flex: 1,
              textDecoration: todo.completed ? 'line-through' : 'none'
            }}
          >
            {todo.text}
          </span>
          <button
            onClick={() => deleteTodo(todo.id)}
            style={{ padding: '4px 8px' }}
          >
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;