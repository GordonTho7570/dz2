import React, { useState, useRef, useEffect } from 'react';

const Secundomer = () => {
  const [seconds, setSeconds] = useState(0);
  const timerRef = useRef(null);
  const inputRef = useRef(null); 


  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleStart = () => {
  
    if (timerRef.current) return;

    timerRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  const handleStop = () => {
    
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const handleReset = () => {
    handleStop();
    setSeconds(0);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Секундомер: {seconds} сек.</h2>
      
      <div style={{ marginBottom: '15px' }}>
        <input 
          ref={inputRef} 
          type="text" 
          placeholder="инпут" 
          style={{ padding: '5px' }}
        />
      </div>

      <button onClick={handleStart} style={{ marginRight: '10px' }}>Старт</button>
      <button onClick={handleStop} style={{ marginRight: '10px' }}>Стоп</button>
      <button onClick={handleReset}>Сброс</button>
    </div>
  );
};

export default Secundomer;