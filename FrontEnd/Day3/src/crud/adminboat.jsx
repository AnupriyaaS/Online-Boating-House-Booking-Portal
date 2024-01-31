import React, { useState } from 'react';
import './adminboat.css';
import { Link } from 'react-router-dom';

function BoatDetailsForm() {
  const [boatName, setBoatName] = useState('');
  const [boatImage, setBoatImage] = useState(null);
  const [boatDescription, setBoatDescription] = useState('');
  const [availableStatus, setAvailableStatus] = useState('');
  const [boatAddress, setBoatAddress] = useState('');
  const [capacity, setCapacity] = useState('');
  const [price, setPrice] = useState('');

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setBoatImage(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', {
      boatName,
      boatImage,
      boatDescription,
      availableStatus,
      boatAddress,
      capacity,
      price,
    });
  };

  return (
    <div className="form-container">
      <h1>Add Boat Details</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="boatName">Boat Name:</label>
          <input
            type="text"
            id="boatName"
            value={boatName}
            onChange={(e) => setBoatName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="boatImage">Boat Image:</label>
          <input
            type="file"
            id="boatImage"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </div>
        <div className="form-group">
          <label htmlFor="boatDescription">Boat Description:</label>
          <textarea
            id="boatDescription"
            value={boatDescription}
            onChange={(e) => setBoatDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="availableStatus">Boat Available Status:</label>
          <input
            type="text"
            id="availableStatus"
            value={availableStatus}
            onChange={(e) => setAvailableStatus(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="boatAddress">Boat Address:</label>
          <input
            type="text"
            id="boatAddress"
            value={boatAddress}
            onChange={(e) => setBoatAddress(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="capacity">Capacity:</label>
          <input
            type="text"
            id="capacity"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <Link to="/sucess"><button type="submit">Submit</button></Link>
      </form>
    </div>
  );
}

export default BoatDetailsForm;
