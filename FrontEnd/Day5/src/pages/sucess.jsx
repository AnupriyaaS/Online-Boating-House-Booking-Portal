import React from "react";
import './Sucess.css'
import { Link } from "react-router-dom";
function Sucess(){
    return(
        <>
  {/*  Meta  */}
  <meta charSet="UTF-8" />
  <title>My New Pen!</title>
  <link
    href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
    rel="stylesheet"
    integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
    crossOrigin="anonymous"
  />
  {/*  Styles  */}
  <link rel="stylesheet" href="styles/index.processed.css" />
  {/* thank-you-wrapper */}
  <section className="thank-you-wrapper">
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div className="thank-you-page-logo">
            <a href="#">Your company logo</a>
          </div>
          <div className="thank-you-page-content">
            <h1>Your submission is received and we will contact you soon </h1>
            <Link to="/aportal" className="btn btn-primary arrow-icon">
              {" "}
              Go back to Homepage{" "}
            </Link>
          </div>
          
          <div className="thank-you-copy">
            <p> Your company © 2024 All Rights Reserved </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* thank-you-wrapper */}
  {/* Scripts */}
</>

    )
}
export default Sucess;

