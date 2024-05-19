import React from 'react';

const Sample = () => {
  const data = [
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Alice", age: 30 },
    { id: 3, name: "Bob", age: 28 }
  ];

  return (
    <div>
      <h1>Sample Component</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            Name: {item.name}, Age: {item.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sample;
