import React, {useState} from 'react';
import { Link } from 'react-router-dom';

export default function Image1() {

    return (
      <>
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
  {/* Bootstrap 4 CSS */}
  <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
    crossOrigin="anonymous"
  />
  <div className="container py-4">
    {/* Start of Card Deck Layout */}
    <div className="card-deck container">
      <div className="col-md-6 col-lg-4 mb-4">
      <div className="card">
      <img
        className="card-img-top"
        src="/images/boat1.jpeg"
        alt="Card image cap"
      />
      <div className="card-body">
        <h4 className="card-title">Card Title</h4>
        <p className="card-text">
        Upper Deck Houseboats is a great option for travellers looking out for houseboat in Alleppey. It is located in Thathampally. This Houseboat stands out as one of the highly recommended houseboat in Alleppey and is recommended by 100% of our guests.
        </p>
      </div>
      <div className="card-footer bg-white">
        <Link to="/addboat"><button>Book Now</button></Link>
     </div>
    </div>
    
      </div>
      <div className="col-md-6 col-lg-4 mb-4">
      <div className="card">
      <img
        className="card-img-top"
        src="/images/boat2.jpg"
        alt="Card image cap"
      />
      <div className="card-body">
        <h4 className="card-title">Card Title</h4>
        <p className="card-text">
          Here is a longer description of the card and the height will be
          auto aligned with flex box.
        </p>
      </div>
      <div className="card-footer bg-white">
      
      <Link to="/addboat"><button>Book Now</button></Link>
      </div>
    </div>
    
      </div>
      <div className="col-md-6 col-lg-4 mb-4">
      <div className="card">
      <img
        className="card-img-top"
        src="/images/boat3.jpg"
        alt="Card image cap"
      />
      <div className="card-body">
        <h4 className="card-title">Card Title</h4>
        <p className="card-text">
          Here is a longer description of the card and the height will be
          auto aligned with flex box.
        </p>
      </div>
      <div className="card-footer bg-white">
      <Link to="/addboat"><button>Book Now</button></Link>
      </div>
    </div>
    
      </div>
    </div>
  </div>
  {/* End of Card Deck Layout */}
  {/* Bootstrap 4 Scripts */}
</>
    );
}