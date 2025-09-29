import React, { useCallback, useReducer, useRef } from 'react';

// useReducer setup
const initialState = { count: 0 };
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const HooksDemo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const inputRef = useRef(null);

  // useCallback example
  const handleAlert = useCallback(() => {
    if (inputRef.current) {
      alert(`Input value: ${inputRef.current.value}`);
    }
  }, []);

  return (
    <div style={{ padding: '2rem', border: '1px solid #ccc', borderRadius: '8px', maxWidth: '400px', margin: '2rem auto' }}>
      <h2>React Hooks Demo</h2>
      <div>
        <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
        <span style={{ margin: '0 1rem' }}>{state.count}</span>
        <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      </div>
      <div style={{ marginTop: '1rem' }}>
        <input ref={inputRef} type="text" placeholder="Type something..." />
        <button onClick={handleAlert} style={{ marginLeft: '0.5rem' }}>Show Input</button>
      </div>
      <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#555' }}>
        This demo uses <b>useReducer</b> for counter, <b>useRef</b> for input, and <b>useCallback</b> for alert handler.
      </p>
    </div>
  );
};

export default HooksDemo;
