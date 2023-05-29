import { useState } from 'react';
import './App.css';

function App() {

const [count,setCount] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Counter App
        </p>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(count + 1)}>Increment</button>

        <h2>You clicked {count} times!</h2>
        
      </header>
    </div>
  );
}

export default App;
