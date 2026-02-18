import React, { useState } from 'react';
import ContextApp from './context-app/ContextApp';
import ReduxApp from './redux-app/ReduxApp';

function App() {
  const [activeApp, setActiveApp] = useState<'context' | 'redux'>('context');

  return (
    <div style={{
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderBottom: '2px solid #ff9800'
      }}>
        <button
          onClick={() => setActiveApp('context')}
          style={{
            padding: '12px 30px',
            backgroundColor: activeApp === 'context' ? '#ff5722' : '#ff9800',
            color: 'white',
            border: 'none',
            borderRadius: '25px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold',
            transition: 'all 0.3s',
            boxShadow: activeApp === 'context' ? '0 5px 15px rgba(255,87,34,0.4)' : 'none'
          }}
        >
          Context API
        </button>
        <button
          onClick={() => setActiveApp('redux')}
          style={{
            padding: '12px 30px',
            backgroundColor: activeApp === 'redux' ? '#ff5722' : '#ff9800',
            color: 'white',
            border: 'none',
            borderRadius: '25px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold',
            transition: 'all 0.3s',
            boxShadow: activeApp === 'redux' ? '0 5px 15px rgba(255,87,34,0.4)' : 'none'
          }}
        >
          Redux Toolkit
        </button>
      </div>

      <div style={{
        flex: 1,
        width: '100%'
      }}>
        {activeApp === 'context' ? <ContextApp /> : <ReduxApp />}
      </div>
    </div>
  );
}

export default App;