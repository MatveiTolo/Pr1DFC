import React from 'react';
import { TodoProvider } from './context/TodoContext';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoStats from './components/TodoStats';

const ContextApp: React.FC = () => {
  return (
    <TodoProvider>
      <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
        <h1>Todo App с Context API</h1>
        <TodoInput />
        <TodoList />
        <TodoStats />
      </div>
    </TodoProvider>
  );
};

export default ContextApp;