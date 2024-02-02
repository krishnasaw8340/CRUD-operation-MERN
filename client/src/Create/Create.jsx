import React, { useState } from "react";
import axios from "axios";
function Create() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState(0);
  const addNewDada = async () => {
    try {
      const response = await axios.post("http://localhost:4000/addphone", {
        name,
        phone,
      });
      console.log(response.data);
      if (response.data.message === 'Phone added successfully') {
        alert("Data is added");
      } else {
        alert("Failed to add");
      }
    } catch (err) {
      alert("An error occurred while adding data. Please try again.");
      console.error("Error:", err);
    }
    setName('');
    setPhone(0);
  };

  return (
    <div className="App">
      <label htmlFor="">Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />{" "}
      <br /> <br />
      <label htmlFor=""> Phone:</label>
      <input
        type="number"
        value={phone}
        onChange={(e) => {
          setPhone(e.target.value);
        }}
      />{" "}
      <br /> <br />
      <button onClick={addNewDada}>Add New</button>
    </div>
  );
}

export default Create;
