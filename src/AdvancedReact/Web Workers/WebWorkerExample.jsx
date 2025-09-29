import React, { useState } from 'react';

const WebWorkerExample = () => {
  const [number, setNumber] = useState(5);
  const [result, setResult] = useState(null);

  const runWorker = () => {
    // Create a new worker
    const worker = new window.Worker(new URL('./myWorker.js', import.meta.url));
    worker.postMessage(number); // Send data to worker

    worker.onmessage = (e) => {
      setResult(e.data); // Receive result from worker
      worker.terminate(); // Clean up
    };
  };

  return (
    <div>
      <h3>Web Worker Example</h3>
      <input
        type="number"
        value={number}
        onChange={e => setNumber(Number(e.target.value))}
      />
      <button onClick={runWorker}>Calculate Factorial (Web Worker)</button>
      {result !== null && <p>Result: {result}</p>}
    </div>
  );
};

export default WebWorkerExample;

/*
Key Concepts Demonstrated:
1. Web Workers: This example shows how to offload heavy computations (like calculating factorial) to a web worker, preventing the main UI thread from being blocked.


The worker file (myWorker.js) runs in a separate thread and performs a calculation.
The React component creates a worker, sends data, and receives the result asynchronously.
This keeps the UI responsive during heavy computations.
2. State Management: The component uses React's useState to manage input and output state.
3. Event Handling: The example demonstrates handling input changes and button clicks to trigger worker operations.
*/