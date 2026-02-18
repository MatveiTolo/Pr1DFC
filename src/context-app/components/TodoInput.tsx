import React, { useState } from 'react';
import { useTodoContext } from '../context/TodoContext';

const TodoInput: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const { addTodo } = useTodoContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText.trim()) {
      addTodo(inputText);
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

export default TodoInput;