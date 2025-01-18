import './App.css';

import React from 'react'
import { useState } from 'react'
import { useClickOutside } from './customHooks/useClickOutside';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useClickOutside(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  });

  return (
    <div className="App">
      <button onClick={() => setIsOpen((prev)=>!prev)}>
        Toggle Dropdown
      </button>
      {isOpen && (
        <div ref={ref} style={{ border: '1px solid black', padding: '10px', marginTop: '5px' }}>
          Dropdown Content
        </div>
      )}
      <div style={{ border: '1px solid black', padding: '10px', marginTop: '5px' }}>
          Outside
      </div>
    </div>
  );
}

export default App;
