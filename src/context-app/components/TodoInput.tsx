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
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Добавить новую задачу..."
        style={{
          flex: 1,
          padding: '12px',
          border: '2px solid #ff9800',
          borderRadius: '8px',
          fontSize: '16px',
          outline: 'none',
          transition: 'border-color 0.3s'
        }}
        onFocus={(e) => e.target.style.borderColor = '#ff5722'}
        onBlur={(e) => e.target.style.borderColor = '#ff9800'}
      />
      <button
        type="submit"
        style={{
          padding: '12px 24px',
          background: 'linear-gradient(135deg, #ff9800, #ff5722)',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '16px',
          fontWeight: 'bold',
          cursor: 'pointer',
          transition: 'transform 0.2s, box-shadow 0.2s'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.boxShadow = '0 5px 15px rgba(255,87,34,0.4)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        Добавить
      </button>
    </form>
  );
};

export default TodoInput;