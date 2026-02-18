import React from 'react';
import { TodoProvider } from './context/TodoContext';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoStats from './components/TodoStats';

const ContextApp: React.FC = () => {
  return (
    <TodoProvider>
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #ff9800 0%, #ff5722 100%)',
        margin: 0,
        padding: '20px'
      }}>
        <div style={{
          maxWidth: '600px',
          width: '100%',
          backgroundColor: 'white',
          borderRadius: '16px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
          padding: '30px'
        }}>
          <h1 style={{
            textAlign: 'center',
            color: '#ff5722',
            marginBottom: '30px',
            fontSize: '2em'
          }}>
            Todo App с Context API
          </h1>
          <TodoInput />
          <TodoList />
          <TodoStats />
        </div>
      </div>
    </TodoProvider>
  );
};

export default ContextApp;