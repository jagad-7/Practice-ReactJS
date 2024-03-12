import React, {useState} from 'react'
function Counter() {
    const [count, setCount] = useState(0);
    return (
      <div>
        <h1>Count the Number :{count}</h1>
        <button onClick={() => setCount(count + 1)}>
          Increment
        </button>
      </div>
    );
  }
  export default Counter

// This is functional component 