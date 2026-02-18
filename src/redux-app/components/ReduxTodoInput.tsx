import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/todoSlice';
import type { AppDispatch } from '../store/store';  // type-only import

const ReduxTodoInput: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText.trim()) {
      dispatch(addTodo(inputText));
      setInputText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Добавить новую задачу..."
        style={{ padding: '8px', marginRight: '8px' }}
      />
      <button type="submit" style={{ padding: '8px' }}>
        Добавить
      </button>
    </form>
  );
};

export default ReduxTodoInput;