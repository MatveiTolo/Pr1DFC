import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../store/store';  // type-only imports
import { toggleTodo, deleteTodo } from '../store/todoSlice';

const ReduxTodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {todos.map((todo) => (
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
            onChange={() => dispatch(toggleTodo(todo.id))}
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
            onClick={() => dispatch(deleteTodo(todo.id))}
            style={{ padding: '4px 8px' }}
          >
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ReduxTodoList;