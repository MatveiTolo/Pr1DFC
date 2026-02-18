import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';  // type-only import

const ReduxTodoStats: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);

  const total = todos.length;
  const completed = todos.filter(todo => todo.completed).length;
  const uncompleted = total - completed;

  return (
    <div style={{
      padding: '16px',
      backgroundColor: '#f0f0f0',
      borderRadius: '4px',
      marginTop: '16px'
    }}>
      <h3>Статистика:</h3>
      <p>Всего задач: {total}</p>
      <p>Выполнено: {completed}</p>
      <p>Осталось: {uncompleted}</p>
    </div>
  );
};

export default ReduxTodoStats;