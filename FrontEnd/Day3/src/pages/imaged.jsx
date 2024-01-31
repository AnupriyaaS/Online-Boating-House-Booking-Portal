import React, {useState} from 'react';

export default function Image() {

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
        <h4 className="card-title">Upper Deck</h4>
        <p className="card-text">
        Upper Deck Houseboats is a great option for travellers looking out for houseboat in Alleppey. It is located in Thathampally. This Houseboat stands out as one of the highly recommended houseboat in Alleppey and is recommended by 100% of our guests.
        </p>
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
        <h4 className="card-title">Classic Boats</h4>
        <p className="card-text">
        The Classic boat house has unique and original details (such as its magical colors!) that make it an ideal place to enjoy with family or friends.The terrace, is the magical place to admire sunsets, sunbathe or eat with unique views of the Rock of Gibraltar and, of course, the sea.
        </p>
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
        <h4 className="card-title">Family Companion</h4>
        <p className="card-text">
        A houseboat is a boat that has been designed or modified to be used primarily for regular dwelling. Most houseboats are not motorized as they are usually moored or kept stationary at a fixed point, and often tethered to land to provide utilities.
        </p>
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