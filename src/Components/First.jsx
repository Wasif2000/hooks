import React, { useState } from 'react';

const First = () => {
  const [change, setChange] = useState('Wasif Ali'); // Current state
  const [previous, setPrevious] = useState('Wasif Ali'); // Store the initial state

  const name = () => {
    setPrevious(change); // Save the current state as the previous state
    setChange('Zohaib Afzal'); // Update the state
  };

  const reset = () => {
    setChange(previous); // Restore the previous state
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <p
        className="mb-6 text-xl font-semibold text-gray-700 relative cursor-pointer before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-blue-500 before:transition-all before:duration-300 hover:before:w-full"
      >
        {change}
      </p>
      <div className="space-x-4">
        <button
          onClick={name}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 focus:outline-none"
        >
          Click me
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 focus:outline-none"
        >
          Reset Name
        </button>
      </div>
    </div>
  );
};

export default First
