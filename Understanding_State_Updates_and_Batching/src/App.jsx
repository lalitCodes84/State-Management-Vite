import React from 'react';

// Code 1: Delayed State Update
// Explanation:

// In the first code, the 'console.log' statement inside the handleClick function shows the older value of 'count' because 'setState' is asynchronous in React. When 'setCount' is called, it schedules an update to the component's state and returns immediately. The state update is not applied immediately; instead, React batches state updates for performance reasons.

//  Solution:
// To log the updated count value, we can use the callback function form of 'setState' provided by the 'useState'. This function receives the previous state as an argument, allowing us to accurately update the state based on the previous value.

function App() {
  const [count1, setCount1] = React.useState(0);

  const handleClick1 = () => {
    setCount1(prevCount => prevCount + 1); // Using callback to update count
    console.log(count1); // Logging the updated count value
  };


  // Code 2: Multiple State Updates
  const [count2, setCount2] = React.useState(0);

  const handleClick2 = () => {
    // Using a single call to setCount with the desired value
    setCount2(count2 + 3);
    console.log(count2); // Logging the updated count value
  };

  return (
    <div>
      {/* Code 1 UI */}
      <div>
        <p>Button 1 is clicked {count1} times</p>
        <button onClick={handleClick1}>Click Me 1</button>
      </div>

      {/* Code 2 UI */}
      <div>
        <p>Button 2 is clicked {count2} times</p>
        <button onClick={handleClick2}>Click Me 2</button>
      </div>
    </div>
  );
}

export default App;