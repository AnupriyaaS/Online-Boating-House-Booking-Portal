import React from "react"
import "./aportal.css"
import { Link } from "react-router-dom";
export default function Aportal(){
  return(    
    <>
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
  <meta name="description" content="" />
  <meta name="author" content="" />
  <title>SB Admin - Start Bootstrap Template</title>
  {/* Bootstrap core CSS*/}
  <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
  {/* Custom fonts for this template*/}
  <link
    href="vendor/font-awesome/css/font-awesome.min.css"
    rel="stylesheet"
    type="text/css"
  />
  {/* Page level plugin CSS*/}
  <link href="vendor/datatables/dataTables.bootstrap4.css" rel="stylesheet" />
  {/* Custom styles for this template*/}
  <link href="css/sb-admin.css" rel="stylesheet" />
  {/* Navigation*/}
  <nav
    className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
    id="mainNav"
  >
    <a className="navbar-brand" href="index.html">
      Start Bootstrap
    </a>
    <button
      className="navbar-toggler navbar-toggler-right"
      type="button"
      data-toggle="collapse"
      data-target="#navbarResponsive"
      aria-controls="navbarResponsive"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">
        <li
          className="nav-item"
          data-toggle="tooltip"
          data-placement="right"
          title="Dashboard"
        >
          <a className="nav-link" href="index.html">
            <i className="fa fa-fw fa-dashboard" />
            <Link to="/aportal"><span className="nav-link-text">Dashboard</span></Link>
          </a>
        </li>
        <li
          className="nav-item"
          data-toggle="tooltip"
          data-placement="right"
          title="Link"
        >
          <a className="nav-link" href="#">
            <i className="fa fa-fw fa-link" />
            <Link to="/aprofile"><span className="nav-link-text">Profile</span></Link>
          </a>
        </li>
        <li
          className="nav-item"
          data-toggle="tooltip"
          data-placement="right"
          title="Link"
        >
          <a className="nav-link" href="#">
            <i className="fa fa-fw fa-link" />
            <Link to="/add"><span className="nav-link-text">Edit Boat</span></Link>
          </a>
        </li><li
        className="nav-item"
        data-toggle="tooltip"
        data-placement="right"
        title="Link"
      >
        <a className="nav-link" href="#">
          <i className="fa fa-fw fa-link" />
          <Link to="/add"><span className="nav-link-text">Edit Home Page</span></Link>
        </a>
      </li><li
      className="nav-item"
      data-toggle="tooltip"
      data-placement="right"
      title="Link"
    >
      <a className="nav-link" href="#">
        <i className="fa fa-fw fa-link" />
        <Link to="/add"><span className="nav-link-text">Edit About</span></Link>
      </a>
    </li>
    <li
          className="nav-item"
          data-toggle="tooltip"
          data-placement="right"
          title="Link"
        >
          <a className="nav-link" href="#">
            <i className="fa fa-fw fa-link" />
            <Link to="/add"><span className="nav-link-text">Edit Contact Us</span></Link>
          </a>
        </li>
        <li
          className="nav-item"
          data-toggle="tooltip"
          data-placement="right"
          title="Link"
        >
          <a className="nav-link" href="#">
            <i className="fa fa-fw fa-link" />
            <Link to="/add"><span className="nav-link-text">Edit Navbar</span></Link>
          </a>
        </li>
        <li
          className="nav-item"
          data-toggle="tooltip"
          data-placement="right"
          title="Tables"
        >
          <a className="nav-link" href="tables.html">
            <i className="fa fa-fw fa-table" />
            <Link to="/table"><span className="nav-link-text">Tables</span></Link>
          </a>
        </li>
        
      </ul>
      <ul className="navbar-nav sidenav-toggler">
        <li className="nav-item">
          <a className="nav-link text-center" id="sidenavToggler">
            <i className="fa fa-fw fa-angle-left" />
          </a>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle mr-lg-2"
            id="messagesDropdown"
            href="#"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fa fa-fw fa-envelope" />
            <span className="d-lg-none">
              Messages
              <span className="badge badge-pill badge-primary">12 New</span>
            </span>
            <span className="indicator text-primary d-none d-lg-block">
              <i className="fa fa-fw fa-circle" />
            </span>
          </a>
          
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle mr-lg-2"
            id="alertsDropdown"
            href="#"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fa fa-fw fa-bell" />
            <span className="d-lg-none">
              Alerts
              <span className="badge badge-pill badge-warning">6 New</span>
            </span>
            <span className="indicator text-warning d-none d-lg-block">
              <i className="fa fa-fw fa-circle" />
            </span>
          </a>
          <div className="dropdown-menu" aria-labelledby="alertsDropdown">
            <h6 className="dropdown-header">New Alerts:</h6>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="#">
              <span className="text-success">
                <strong>
                  <i className="fa fa-long-arrow-up fa-fw" />
                  Status Update
                </strong>
              </span>
              <span className="small float-right text-muted">11:21 AM</span>
              <div className="dropdown-message small">
                This is an automated server response message. All systems are
                online.
              </div>
            </a>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="#">
              <span className="text-danger">
                <strong>
                  <i className="fa fa-long-arrow-down fa-fw" />
                  Status Update
                </strong>
              </span>
              <span className="small float-right text-muted">11:21 AM</span>
              <div className="dropdown-message small">
                This is an automated server response message. All systems are
                online.
              </div>
            </a>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="#">
              <span className="text-success">
                <strong>
                  <i className="fa fa-long-arrow-up fa-fw" />
                  Status Update
                </strong>
              </span>
              <span className="small float-right text-muted">11:21 AM</span>
              <div className="dropdown-message small">
                This is an automated server response message. All systems are
                online.
              </div>
            </a>
            <div className="dropdown-divider" />
            <a className="dropdown-item small" href="#">
              View all alerts
            </a>
          </div>
        </li>
        <li className="nav-item">
          <form className="form-inline my-2 my-lg-0 mr-lg-2">
            <div className="input-group">
              <input
                className="form-control"
                type="text"
                placeholder="Search for..."
              />
              <span className="input-group-btn">
                <button className="btn btn-primary" type="button">
                  <i className="fa fa-search" />
                </button>
              </span>
            </div>
          </form>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            <i className="fa fa-fw fa-sign-out" />
            Logout
          </a>
        </li>
      </ul>
    </div>
  </nav>
  <div className="content-wrapper">
    <div className="container-fluid">
      {/* Breadcrumbs*/}
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="#">Dashboard</a>
        </li>
        <li className="breadcrumb-item active">My Dashboard</li>
      </ol>
      {/* Icon Cards*/}
      <div className="row">
        <div className="col-xl-3 col-sm-6 mb-3">
          <div className="card text-white bg-primary o-hidden h-100">
            <div className="card-body">
              <div className="card-body-icon">
                <i className="fa fa-fw fa-comments" />
              </div>
              <div className="mr-5">26 New Messages!</div>
            </div>
            <a className="card-footer text-white clearfix small z-1" href="#">
              <span className="float-left">View Details</span>
              <span className="float-right">
                <i className="fa fa-angle-right" />
              </span>
            </a>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-3">
          <div className="card text-white bg-warning o-hidden h-100">
            <div className="card-body">
              <div className="card-body-icon">
                <i className="fa fa-fw fa-list" />
              </div>
              <div className="mr-5">11 New Tasks!</div>
            </div>
            <a className="card-footer text-white clearfix small z-1" href="#">
              <span className="float-left">View Details</span>
              <span className="float-right">
                <i className="fa fa-angle-right" />
              </span>
            </a>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-3">
          <div className="card text-white bg-success o-hidden h-100">
            <div className="card-body">
              <div className="card-body-icon">
                <i className="fa fa-fw fa-shopping-cart" />
              </div>
              <div className="mr-5">123 New Orders!</div>
            </div>
            <a className="card-footer text-white clearfix small z-1" href="#">
              <span className="float-left">View Details</span>
              <span className="float-right">
                <i className="fa fa-angle-right" />
              </span>
            </a>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-3">
          <div className="card text-white bg-danger o-hidden h-100">
            <div className="card-body">
              <div className="card-body-icon">
                <i className="fa fa-fw fa-support" />
              </div>
              <div className="mr-5">13 New Tickets!</div>
            </div>
            <a className="card-footer text-white clearfix small z-1" href="#">
              <span className="float-left">View Details</span>
              <span className="float-right">
                <i className="fa fa-angle-right" />
              </span>
            </a>
          </div>
        </div>
      </div>
      {/* Area Chart Example*/}
      <div className="card mb-3">
        <div className="card-header">
          <i className="fa fa-area-chart" /> Area Chart Example
        </div>
        <div className="card-body">
          <canvas id="myAreaChart" width="100%" height={30} />
        </div>
        <div className="card-footer small text-muted">
          Updated yesterday at 11:59 PM
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8">
          {/* Example Bar Chart Card*/}
          <div className="card mb-3">
            <div className="card-header">
              <i className="fa fa-bar-chart" /> Bar Chart Example
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-sm-8 my-auto">
                  <canvas id="myBarChart" width={100} height={50} />
                </div>
                <div className="col-sm-4 text-center my-auto">
                  <div className="h4 mb-0 text-primary">$34,693</div>
                  <div className="small text-muted">YTD Revenue</div>
                  <hr />
                  <div className="h4 mb-0 text-warning">$18,474</div>
                  <div className="small text-muted">YTD Expenses</div>
                  <hr />
                  <div className="h4 mb-0 text-success">$16,219</div>
                  <div className="small text-muted">YTD Margin</div>
                </div>
              </div>
            </div>
            <div className="card-footer small text-muted">
              Updated yesterday at 11:59 PM
            </div>
          </div>
          {/* Card Columns Example Social Feed*/}
          <div className="mb-0 mt-4">
            <i className="fa fa-newspaper-o" /> News Feed
          </div>
          <hr className="mt-2" />
          <div className="card-columns">
            {/* Example Social Card*/}
            <div className="card mb-3">
              <a href="#">
                <img
                  className="card-img-top img-fluid w-100"
                  src="https://unsplash.it/700/450?image=610"
                  alt=""
                />
              </a>
              <div className="card-body">
                <h6 className="card-title mb-1">
                  <a href="#">David Miller</a>
                </h6>
                <p className="card-text small">
                  These waves are looking pretty good today!
                  <a href="#">#surfsup</a>
                </p>
              </div>
              <hr className="my-0" />
              <div className="card-body py-2 small">
                <a className="mr-3 d-inline-block" href="#">
                  <i className="fa fa-fw fa-thumbs-up" />
                  Like
                </a>
                <a className="mr-3 d-inline-block" href="#">
                  <i className="fa fa-fw fa-comment" />
                  Comment
                </a>
                <a className="d-inline-block" href="#">
                  <i className="fa fa-fw fa-share" />
                  Share
                </a>
              </div>
              <hr className="my-0" />
              <div className="card-body small bg-faded">
                <div className="media">
                  <img
                    className="d-flex mr-3"
                    src="http://placehold.it/45x45"
                    alt=""
                  />
                  <div className="media-body">
                    <h6 className="mt-0 mb-1">
                      <a href="#">John Smith</a>
                    </h6>
                    Very nice! I wish I was there! That looks amazing!
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item">
                        <a href="#">Like</a>
                      </li>
                      <li className="list-inline-item">·</li>
                      <li className="list-inline-item">
                        <a href="#">Reply</a>
                      </li>
                    </ul>
                    <div className="media mt-3">
                      <a className="d-flex pr-3" href="#">
                        <img src="http://placehold.it/45x45" alt="" />
                      </a>
                      <div className="media-body">
                        <h6 className="mt-0 mb-1">
                          <a href="#">David Miller</a>
                        </h6>
                        Next time for sure!
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item">
                            <a href="#">Like</a>
                          </li>
                          <li className="list-inline-item">·</li>
                          <li className="list-inline-item">
                            <a href="#">Reply</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer small text-muted">
                Posted 32 mins ago
              </div>
            </div>
            {/* Example Social Card*/}
            <div className="card mb-3">
              <a href="#">
                <img
                  className="card-img-top img-fluid w-100"
                  src="https://unsplash.it/700/450?image=180"
                  alt=""
                />
              </a>
              <div className="card-body">
                <h6 className="card-title mb-1">
                  <a href="#">John Smith</a>
                </h6>
                <p className="card-text small">
                  Another day at the office...
                  <a href="#">#workinghardorhardlyworking</a>
                </p>
              </div>
              <hr className="my-0" />
              <div className="card-body py-2 small">
                <a className="mr-3 d-inline-block" href="#">
                  <i className="fa fa-fw fa-thumbs-up" />
                  Like
                </a>
                <a className="mr-3 d-inline-block" href="#">
                  <i className="fa fa-fw fa-comment" />
                  Comment
                </a>
                <a className="d-inline-block" href="#">
                  <i className="fa fa-fw fa-share" />
                  Share
                </a>
              </div>
              <hr className="my-0" />
              <div className="card-body small bg-faded">
                <div className="media">
                  <img
                    className="d-flex mr-3"
                    src="http://placehold.it/45x45"
                    alt=""
                  />
                  <div className="media-body">
                    <h6 className="mt-0 mb-1">
                      <a href="#">Jessy Lucas</a>
                    </h6>
                    Where did you get that camera?! I want one!
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item">
                        <a href="#">Like</a>
                      </li>
                      <li className="list-inline-item">·</li>
                      <li className="list-inline-item">
                        <a href="#">Reply</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-footer small text-muted">
                Posted 46 mins ago
              </div>
            </div>
            {/* Example Social Card*/}
            <div className="card mb-3">
              <a href="#">
                <img
                  className="card-img-top img-fluid w-100"
                  src="https://unsplash.it/700/450?image=281"
                  alt=""
                />
              </a>
              
              <hr className="my-0" />
              <div className="card-body py-2 small">
                <a className="mr-3 d-inline-block" href="#">
                  <i className="fa fa-fw fa-thumbs-up" />
                  Like
                </a>
                <a className="mr-3 d-inline-block" href="#">
                  <i className="fa fa-fw fa-comment" />
                  Comment
                </a>
                <a className="d-inline-block" href="#">
                  <i className="fa fa-fw fa-share" />
                  Share
                </a>
              </div>
              <div className="card-footer small text-muted">
                Posted 1 hr ago
              </div>
            </div>
            {/* Example Social Card*/}
            <div className="card mb-3">
              <a href="#">
                <img
                  className="card-img-top img-fluid w-100"
                  src="https://unsplash.it/700/450?image=185"
                  alt=""
                />
              </a>
              <div className="card-body">
                <h6 className="card-title mb-1">
                  <a href="#">David Miller</a>
                </h6>
                <p className="card-text small">
                  It's hot, and I might be lost...
                  <a href="#">#desert</a>
                  <a href="#">#water</a>
                  <a href="#">#anyonehavesomewater</a>
                  <a href="#">#noreally</a>
                  <a href="#">#thirsty</a>
                  <a href="#">#dehydration</a>
                </p>
              </div>
              <hr className="my-0" />
              <div className="card-body py-2 small">
                <a className="mr-3 d-inline-block" href="#">
                  <i className="fa fa-fw fa-thumbs-up" />
                  Like
                </a>
                <a className="mr-3 d-inline-block" href="#">
                  <i className="fa fa-fw fa-comment" />
                  Comment
                </a>
                <a className="d-inline-block" href="#">
                  <i className="fa fa-fw fa-share" />
                  Share
                </a>
              </div>
              <hr className="my-0" />
              <div className="card-body small bg-faded">
                <div className="media">
                  <img
                    className="d-flex mr-3"
                    src="http://placehold.it/45x45"
                    alt=""
                  />
                  <div className="media-body">
                    <h6 className="mt-0 mb-1">
                      <a href="#">John Smith</a>
                    </h6>
                    The oasis is a mile that way, or is that just a mirage?
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item">
                        <a href="#">Like</a>
                      </li>
                      <li className="list-inline-item">·</li>
                      <li className="list-inline-item">
                        <a href="#">Reply</a>
                      </li>
                    </ul>
                    <div className="media mt-3">
                      <a className="d-flex pr-3" href="#">
                        <img src="http://placehold.it/45x45" alt="" />
                      </a>
                      <div className="media-body">
                        <h6 className="mt-0 mb-1">
                          <a href="#">David Miller</a>
                        </h6>
                        <img
                          className="img-fluid w-100 mb-1"
                          src="https://unsplash.it/700/450?image=789"
                          alt=""
                        />
                        I'm saved, I found a cactus. How do I open this thing?
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item">
                            <a href="#">Like</a>
                          </li>
                          <li className="list-inline-item">·</li>
                          <li className="list-inline-item">
                            <a href="#">Reply</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer small text-muted">
                Posted yesterday
              </div>
            </div>
          </div>
          {/* /Card Columns*/}
        </div>
        <div className="col-lg-4">
          {/* Example Pie Chart Card*/}
          <div className="card mb-3">
            <div className="card-header">
              <i className="fa fa-pie-chart" /> Pie Chart Example
            </div>
            <div className="card-body">
              <canvas id="myPieChart" width="100%" height={100} />
            </div>
            <div className="card-footer small text-muted">
              Updated yesterday at 11:59 PM
            </div>
          </div>
          {/* Example Notifications Card*/}
          <div className="card mb-3">
            <div className="card-header">
              <i className="fa fa-bell-o" /> Feed Example
            </div>
            <div className="list-group list-group-flush small">
              <a className="list-group-item list-group-item-action" href="#">
                <div className="media">
                  <img
                    className="d-flex mr-3 rounded-circle"
                    src="http://placehold.it/45x45"
                    alt=""
                  />
                  <div className="media-body">
                    <strong>David Miller</strong>posted a new article to
                    <strong>David Miller Website</strong>.
                    <div className="text-muted smaller">
                      Today at 5:43 PM - 5m ago
                    </div>
                  </div>
                </div>
              </a>
              <a className="list-group-item list-group-item-action" href="#">
                <div className="media">
                  <img
                    className="d-flex mr-3 rounded-circle"
                    src="http://placehold.it/45x45"
                    alt=""
                  />
                  <div className="media-body">
                    <strong>Samantha King</strong>sent you a new message!
                    <div className="text-muted smaller">
                      Today at 4:37 PM - 1hr ago
                    </div>
                  </div>
                </div>
              </a>
              <a className="list-group-item list-group-item-action" href="#">
                <div className="media">
                  <img
                    className="d-flex mr-3 rounded-circle"
                    src="http://placehold.it/45x45"
                    alt=""
                  />
                  <div className="media-body">
                    <strong>Jeffery Wellings</strong>added a new photo to the
                    album
                    <strong>Beach</strong>.
                    <div className="text-muted smaller">
                      Today at 4:31 PM - 1hr ago
                    </div>
                  </div>
                </div>
              </a>
              
              <Link to="/table" className="list-group-item list-group-item-action" >
                View all activity...
              </Link>
            </div>
            <div className="card-footer small text-muted">
              Updated yesterday at 11:59 PM
            </div>
          </div>
        </div>
      </div>
      {/* Example DataTables Card*/}
      <div className="card mb-3">
        <div className="card-header">
          <i className="fa fa-table" /> Data Table Example
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellSpacing={0}
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th>
                </tr>
              </tfoot>
              <tbody>
                <tr>
                  <td>Tiger Nixon</td>
                  <td>System Architect</td>
                  <td>Edinburgh</td>
                  <td>61</td>
                  <td>2011/04/25</td>
                  <td>$320,800</td>
                </tr>
                <tr>
                  <td>Garrett Winters</td>
                  <td>Accountant</td>
                  <td>Tokyo</td>
                  <td>63</td>
                  <td>2011/07/25</td>
                  <td>$170,750</td>
                </tr>
                <tr>
                  <td>Ashton Cox</td>
                  <td>Junior Technical Author</td>
                  <td>San Francisco</td>
                  <td>66</td>
                  <td>2009/01/12</td>
                  <td>$86,000</td>
                </tr>
                <tr>
                  <td>Cedric Kelly</td>
                  <td>Senior Javascript Developer</td>
                  <td>Edinburgh</td>
                  <td>22</td>
                  <td>2012/03/29</td>
                  <td>$433,060</td>
                </tr>
                <tr>
                  <td>Airi Satou</td>
                  <td>Accountant</td>
                  <td>Tokyo</td>
                  <td>33</td>
                  <td>2008/11/28</td>
                  <td>$162,700</td>
                </tr>
               
                
                
              </tbody>
            </table>
          </div>
        </div>
        <div className="card-footer small text-muted">
          Updated yesterday at 11:59 PM
        </div>
      </div>
    </div>
    {/* /.container-fluid*/}
   
    {/* Scroll to Top Button*/}
    <a className="scroll-to-top rounded" href="#page-top">
      <i className="fa fa-angle-up" />
    </a>
    {/* Logout Modal*/}
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Ready to Leave?
            </h5>
            <button
              className="close"
              type="button"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            Select "Logout" below if you are ready to end your current session.
          </div>
          <div className="modal-footer">
            <button
              className="btn btn-secondary"
              type="button"
              data-dismiss="modal"
            >
              Cancel
            </button>
            <a className="btn btn-primary" href="login.html">
              Logout
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* Bootstrap core JavaScript*/}
    {/* Core plugin JavaScript*/}
    {/* Page level plugin JavaScript*/}
    {/* Custom scripts for all pages*/}
    {/* Custom scripts for this page*/}
  </div>
</>

  

  

  
  
  );
  }