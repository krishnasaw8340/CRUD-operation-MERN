// GetAll.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import edit from "../asset/edit.png";
import bin from "../asset/bin.png";

import "../Get/GetApp.css";

const GetAll = () => {
  const [phonebook, setPhoneBook] = useState([]);
  const [newPhone, setNewPhone] = useState(0);
  const [updatingIndex, setUpdatingIndex] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/getall');
        setPhoneBook(response.data.data.phoneNumber);
      } catch (err) {
        console.log('Error while fetching', err);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    // Implement delete logic here (e.g., axios.delete)
    console.log('Delete phone entry with ID:', id);
  };

  const handleUpdate = async (id, index) => {
    // Implement update logic here
    try {
      // Update the database
      await axios.put(`http://localhost:4000/update/${id}`, { newPhone });
  
      // Update the state
      setPhoneBook((prevPhonebook) => {
        const updatedPhonebook = [...prevPhonebook];
        updatedPhonebook[index].phone = newPhone;
        return updatedPhonebook;
      });
  
      // Reset updating index after update
      setUpdatingIndex(null);
    } catch (err) {
      console.error('Error while updating', err);
    }
  };
  

  const handleEditClick = (index) => {
    // Set the updating index to enable editing for this specific entry
    setUpdatingIndex(index);
    // Set the newPhone to the current phone's value for editing
    setNewPhone(phonebook[index].phone);
  };

  const handleSaveClick = (id, index) => {
    // Handle the save operation here
    handleUpdate(id, index);
  };

  return (
    <div>
      <h1>PhoneBook List</h1>
      <div className="phonebook-container">
        {phonebook.map((val, key) => (
          <div key={key} className="phone-entry">
            <h2>{val.name}</h2>
            <p>{val.phone}</p>
            <div className="action-icons">
              {updatingIndex === key ? (
                <>
                  <input
                    type="number"
                    placeholder="New Phone"
                    value={newPhone}
                    onChange={(e) => setNewPhone(e.target.value)}
                  />
                  <button onClick={() => handleSaveClick(val._id, key)}>Save</button>
                  <img
                    src={edit}
                    alt=""
                    onClick={() => handleUpdate(val._id, key)}
                    className='icon'
                  />
                </>
              ) : (
                <img src={edit} alt="" onClick={() => handleEditClick(key)} className='icon' />
              )}
              <img src={bin} alt="" onClick={() => handleDelete(val._id)} className='icon' />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetAll;
