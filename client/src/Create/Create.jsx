import React, { useState } from "react";
import axios from "axios";
function Create() {
  const [name, setName] = useState("");
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
      console.error("Error:", error);
    }
    axios.post("http://localhost:4000/addphone", { name, phone });
  };

  return (
    <div className="App">
      <label htmlFor="">Name:</label>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />{" "}
      <br /> <br />
      <label htmlFor=""> Phone:</label>
      <input
        type="number"
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
