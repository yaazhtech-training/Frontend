import React, { useState } from 'react';

const ImmutableExample = () => {
  const [items, setItems] = useState([1, 2, 3]);

  const addItem = () => {
    // Create a new array instead of mutating the old one
    setItems([...items, items.length + 1]);
    //setItems(); // This would be incorrect as it mutates the state
  };

  return (
    <div>
      <h3>Immutable Data Example</h3>
      <ul>
        {items.map(item => <li key={item}>{item}</li>)}
      </ul>
      <button onClick={addItem}>Add Item</button>
    </div>
  );
};

export default ImmutableExample;

/*

Key Concepts Demonstrated:
1. Immutable State Updates: Instead of modifying the existing state array, we create a new array using the spread operator (`...items`) and add the new item to it. This ensures that React can detect the change and re-render the component appropriately.    

 * we can use useMemo to memoize the array and avoid unnecessary re-renders.


Instead of modifying the original array or object, you create a new one with the desired changes.
This approach helps React detect changes and re-render components efficiently.
Immutability prevents accidental side effects and makes debugging easier.
2. State Management: The component uses React's `useState` hook to manage the state of the items array.
3. Event Handling: The example demonstrates handling a button click to trigger the addition of a new item to the list.
*/  