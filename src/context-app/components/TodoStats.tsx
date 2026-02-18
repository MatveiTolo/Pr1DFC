import React from 'react';
import { useTodoContext } from '../context/TodoContext';

const TodoStats: React.FC = () => {
  const { todos } = useTodoContext();

  const total = todos.length;
  const completed = todos.filter(todo => todo.completed).length;
  const uncompleted = total - completed;

  return (
    <div style={{
      marginTop: '20px',
      padding: '20px',
      background: 'linear-gradient(135deg, #fff3e0, #ffe0b2)',
      borderRadius: '8px',
      border: '1px solid #ff9800'
    }}>
      <h3 style={{
        margin: '0 0 15px 0',
        color: '#ff5722',
        textAlign: 'center'
      }}>
        Статистика
      </h3>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '10px',
        textAlign: 'center'
      }}>
        <div style={{
          padding: '10px',
          backgroundColor: 'white',
          borderRadius: '6px',
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
        }}>
          <div style={{ fontSize: '12px', color: '#666' }}>Всего</div>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#ff9800' }}>{total}</div>
        </div>
        <div style={{
          padding: '10px',
          backgroundColor: 'white',
          borderRadius: '6px',
          boxShadow: '0 2px 5px rgba(255, 255, 255, 0.1)'
        }}>
          <div style={{ fontSize: '12px', color: '#666' }}>Выполнено</div>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#4caf50' }}>{completed}</div>
        </div>
        <div style={{
          padding: '10px',
          backgroundColor: 'white',
          borderRadius: '6px',
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
        }}>
          <div style={{ fontSize: '12px', color: '#666' }}>Осталось</div>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#f44336' }}>{uncompleted}</div>
        </div>
      </div>
    </div>
  );
};

export default TodoStats;