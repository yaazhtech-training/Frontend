
/* eslint-disable no-restricted-globals */
// myWorker.js

self.onmessage = function(e) {
  // e.data contains the message from main thread
  const num = e.data;
  // Simulate heavy computation (e.g., factorial)
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  // Send result back to main thread
  self.postMessage(result);
};