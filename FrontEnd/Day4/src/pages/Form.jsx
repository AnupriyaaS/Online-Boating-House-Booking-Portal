import React from 'react';
import { MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBCardImage, MDBRow, MDBCol, MDBIcon, MDBInput } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import "./regi.css";

export default function Form() {
  const {register, formState: {errors}, handleSubmit,} = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <MDBContainer className="my-5">
      <MDBCard>
        <MDBRow className='g-0'>
          <MDBCol md='6'>
            <MDBCardImage src='https://t4.ftcdn.net/jpg/05/84/31/57/360_F_584315730_hlgzu4Lzr8OtQgU0QerDDSroKtFqbRCf.jpg' alt="login form" className='rounded-start w-100' />
          </MDBCol>
          <MDBCol md='6'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <MDBCardBody className='d-flex flex-column'>
              <div className='d-flex flex-row mt-2'>
                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }} />
                <span className="h1 fw-bold mb-0">Logo</span>
              </div>
                <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Sign into your account</h5>
            <div>
                <input placeholder="Your Name" {...register("name", {required: true })}/>
                <error>  
                    {errors.name?.type === "required" && "Name is Required"}
                </error>
            </div>
            <div>
                <input placeholder="Your Email"
                  {...register("email", { required: true, pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i})} />
                  <error>  
                    {errors.email?.type === "required" && "Email is Required"}
                    {errors.email?.type === "pattern" && "Entered email is in wrong format"}
                </error>
            </div>
            <div>
                <input placeholder="Phone Number" {...register("number", {length: 10})}/>
                <error>
                    {errors.number?.type === "length" && "Enter 10 digit number"}
                </error>
            </div>
            <div>
                <input placeholder="password"{...register("password", { required: true, pattern: /^[a-zA-Z0-9_.+-]+$/i})}/>
                <error>
                    {errors.password?.type === "required" && "Password is Required"}
                    {errors.password?.type === "pattern" && "Entered Password is in wrong format"}
                </error>
            </div>
        
                <Link to="/login">
                  <MDBBtn className="mb-4 px-5" color='dark' size='lg'>Login</MDBBtn>
                </Link>
                <a className="small text-muted" href="#!">Forgot password?</a>
                <p className="mb-1 pb-lg-2" style={{ color: '#393f81' }}>Don't have an account? <Link to="reg" style={{ color: '#393f81' }}>Sign Up</Link></p>
                <p className="mb-1 pb-lg-2" style={{ color: '#393f81' }}><Link to="/adlogin" style={{ color: '#393f81' }}>Admin</Link></p>
                <div className='d-flex flex-row justify-content-start'>
                  <a href="#!" className="small text-muted me-1">Terms of use.</a>
                  <a href="#!" className="small text-muted">Privacy policy</a>
                </div>
                </MDBCardBody>
                </form>
            </MDBCol>
          </MDBRow>
        </MDBCard>
    </MDBContainer>
  );
}

