import React, { useState } from 'react';
import ContextApp from './context-app/ContextApp';
import ReduxApp from './redux-app/ReduxApp';

function App() {
  const [activeApp, setActiveApp] = useState<'context' | 'redux'>('context');

  return (
    <div>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        padding: '20px',
        backgroundColor: '#ff4800',
        borderBottom: '2px solid #df0808'
      }}>
        <button
          onClick={() => setActiveApp('context')}
          style={{
            padding: '10px 20px',
            backgroundColor: activeApp === 'context' ? '#2196f3' : '#9e9e9e',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Context API
        </button>
        <button
          onClick={() => setActiveApp('redux')}
          style={{
            padding: '10px 20px',
            backgroundColor: activeApp === 'redux' ? '#2196f3' : '#9e9e9e',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Redux Toolkit
        </button>
      </div>

      {activeApp === 'context' ? <ContextApp /> : <ReduxApp />}
    </div>
  );
}

export default App;