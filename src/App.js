import { useState, useCallback } from 'react';
import Content from './Content.js';

function App() {
  const [count, setCount] = useState(0)

  const handleIncrease = useCallback(() => {
    setCount(prev => prev + 1)
  }, [])
  return (
    <div className="App" style={{ padding: 20 }}>
      <Content onIncrease={handleIncrease} />
      <h1> {count} </h1>
    </div >
  );
}

export default App;
