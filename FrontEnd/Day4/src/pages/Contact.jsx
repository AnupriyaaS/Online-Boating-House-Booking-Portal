import React from "react"
export default function Contact(){
    return(
<div className="container">
  <form>
    <h2> Contact Us</h2>
    <div className="row">
      <div className="col-md-6">
        <div className="form-group">
          <label htmlFor="first">First Name</label>
          <input
            type="text"
            className="form-control"
            placeholder=""
            id="first"
          />
        </div>
      </div>
      {/*  col-md-6   */}
      <div className="col-md-6">
        <div className="form-group">
          <label htmlFor="last">Last Name</label>
          <input
            type="text"
            className="form-control"
            placeholder=""
            id="last"
          />
        </div>
      </div>
      {/*  col-md-6   */}
    </div>
    <div className="row">
      <div className="col-md-6">
        <div className="form-group">
          <label htmlFor="company">Company</label>
          <input
            type="text"
            className="form-control"
            placeholder=""
            id="company"
          />
        </div>
      </div>
      {/*  col-md-6   */}
      <div className="col-md-6">
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            placeholder="phone"
          />
        </div>
      </div>
      {/*  col-md-6   */}
    </div>
    {/*  row   */}
    <div className="row">
      <div className="col-md-6">
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="email"
          />
        </div>
      </div>
      {/*  col-md-6   */}
      <div className="col-md-6">
        <div className="form-group">
          <label htmlFor="url">
            Your Website <small>Please include http://</small>
          </label>
          <input
            type="url"
            className="form-control"
            id="url"
            placeholder="url"
          />
        </div>
      </div>
      {/*  col-md-6   */}
    </div>
    {/*  row   */}
    <label htmlFor="contact-preference">
      When is the best time of day to reach you?
    </label>
    <div className="radio">
      <label>
        <input
          type="radio"
          name="contact-preference"
          id="contact-preference"
          defaultValue="am"
          defaultChecked=""
        />
        Morning
      </label>
    </div>
    <div className="radio">
      <label>
        <input
          type="radio"
          name="contact-preference"
          id="contact-preference"
          defaultValue="pm"
          defaultChecked=""
        />
        Evening
      </label>
    </div>
    <label htmlFor="newsletter">
      Would you like to recieve our email newsletter?
    </label>
    <div className="checkbox">
      <label>
        <input type="checkbox" defaultValue="Sure!" id="newsletter" /> Sure!
      </label>
    </div>
    <button type="submit" className="btn btn-primary">
      Submit
    </button>
  </form>
</div>
);
}