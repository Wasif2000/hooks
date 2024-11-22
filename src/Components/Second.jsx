import React, { useState, useEffect } from 'react';

const Second = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNavbar(true); // Show the navbar after 2 seconds
    }, 2000);

    // Cleanup function to clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showNavbar && (
        <nav>
          <div className="flex justify-between px-9">
            <h1 className="capitalize text-[3rem] text-blue-600 font-bold">wasif</h1>
            <ul className="flex gap-4 pt-5">
              <li className="capitalize text-[20px] hover:underline hover:cursor-pointer text-blue-400 hover:text-blue-500">
                home
              </li>
              <li className="capitalize text-[20px] hover:underline hover:cursor-pointer text-blue-400 hover:text-blue-500">
                about
              </li>
              <li className="capitalize text-[20px] hover:underline hover:cursor-pointer text-blue-400 hover:text-blue-900">
                services
              </li>
            </ul>
            <h2 className="uppercase text-[20px] pt-9 text-gray-300 hover:text-gray-950 hover:underline hover:cursor-pointer">
              shortest
            </h2>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Second;
