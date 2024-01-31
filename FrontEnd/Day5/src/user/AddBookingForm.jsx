// AddBookingForm.jsx

import React from 'react';
import './AddBooking.css'; // Import the corresponding CSS file
import { Link } from 'react-router-dom';

const AddBookingForm = () => {
  return (
    <div className="form-container">
      <h1>Add Booking Details</h1>
      <form className="booking-form">
        <div className="side-heading">
        </div>
        <div className="form-entries">
        <div>
        <div>Booking ID:</div>
        <input type="text" id="bookingId" name="bookingId" />
        </div>
        <div>
        <div>Boat Name:</div>
        <input type="text" id="boatName" name="boatName" />
        </div>
        <div>
        <div>User ID:</div>
        <input type="text" id="userId" name="userId" />
        </div>
        <div>
        <div>Address:</div>
        <input type="text" id="address" name="address" />
        </div>
        <div>
        <div>Number of Persons:</div>
        <input type="number" id="numberOfPersons" name="numberOfPersons" />
        </div>
        <div>
        <div>From Date:</div>
        <input type="date" id="fromDate" name="fromDate" />
        </div>
        <div>
        <div>To Date:</div>
            <input type="date" id="toDate" name="toDate" />
          </div>
        </div>
        <Link to ="/thanks"><button type="submit">Submit</button></Link>
      </form>
    </div>
  );
};

export default AddBookingForm;
