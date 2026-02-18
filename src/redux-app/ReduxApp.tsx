import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import ReduxTodoInput from './components/ReduxTodoInput';
import ReduxTodoList from './components/ReduxTodoList';
import ReduxTodoStats from './components/ReduxTodoStats';

const ReduxApp: React.FC = () => {
  return (
    <Provider store={store}>
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
            Todo App с Redux Toolkit
          </h1>
          <ReduxTodoInput />
          <ReduxTodoList />
          <ReduxTodoStats />
        </div>
      </div>
    </Provider>
  );
};

export default ReduxApp;