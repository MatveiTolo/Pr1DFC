import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import ReduxTodoInput from './components/ReduxTodoInput';
import ReduxTodoList from './components/ReduxTodoList';
import ReduxTodoStats from './components/ReduxTodoStats';

const ReduxApp: React.FC = () => {
  return (
    <Provider store={store}>
      <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
        <h1>Todo App с Redux Toolkit</h1>
        <ReduxTodoInput />
        <ReduxTodoList />
        <ReduxTodoStats />
      </div>
    </Provider>
  );
};

export default ReduxApp;