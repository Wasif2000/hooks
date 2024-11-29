import { useState } from "react";

const Context = () => {
  const [names, setNames] = useState("any name");

  // Function to update the name
  const updateName = () => {
    const nameList = [
      { Name: "Wasif Ali", Age: 25 },
      { Name: "Asad Ali", Age: 21 },
      { Name: "Ahsan Sarfraz", Age: 23 },
    ];
    setNames(nameList[1]); // Update the state to the second name
  };

  // Function to reset the name
  const resetName = () => {
    setNames("any name"); // Reset the state to the initial value
  };

  return (
    <div>
      <h1>Hi, I am Benish Afzal.</h1>
      <button onClick={updateName}>Update Names</button>
      <button onClick={resetName}>Reset Name</button>
      <div>
        {typeof names === "object" ? (
          <div>
            <p>Name: {names.Name}</p>
            <p>Age: {names.Age}</p>
          </div>
        ) : (
          <p>Current Name: {names}</p>
        )}
      </div>
    </div>
  );
};

export default Context;
