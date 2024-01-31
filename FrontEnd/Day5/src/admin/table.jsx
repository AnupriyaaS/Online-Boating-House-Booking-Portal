import React from "react"
export default function Table(){
    return(
<>
  {/* Required meta tags */}
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
  {/* Bootstrap CSS */}
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
    integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
    crossOrigin="anonymous"
  />
  <title>Booking Listing - Table Booking App</title>
  <div className="container-fluid">
    {/* NavBar */}
    <div className="row">
      <div className="col">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            <img
              src="https://assets.codepen.io/4530873/booking.svg"
              width={40}
            />
            Table Booking App
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Book Table
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  View Bookings
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
    {/* Jumbotron */}
    <div className="row">
      <div className="col">
        <div className="jumbotron">
          <h1 className="display-4">Here it is our booking list!</h1>
          <p className="lead">Call them to confirm the booking</p>
        </div>{" "}
        {/* jumbotron element */}
      </div>{" "}
      {/* jumbotron col */}
    </div>{" "}
    {/* jumbotron row */}
    {/* Booking List */}
    <div className="row">
      <div className="col">
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Pax</th>
              <th scope="col">Remarks</th>
              <th scope="col">Task</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>mark@test.com</td>
              <td>3</td>
              <td>With baby</td>
              <td>
                <button type="submit" className="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>jacob@google.com</td>
              <td>7</td>
              <td />
              <td>
                <button type="submit" className="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>larry@twitter.com</td>
              <td>2</td>
              <td />
              <td>
                <button type="submit" className="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>{" "}
      {/* Booking List col*/}
    </div>{" "}
    {/* Booking List row*/}
  </div>
  {/* Option 1: jQuery and Bootstrap Bundle (includes Popper) */}
</>
);
}