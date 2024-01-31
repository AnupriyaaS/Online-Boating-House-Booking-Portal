import React, {useState} from 'react';

import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBCollapse,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBCardTitle,
  MDBCardText
} 
from 'mdb-react-ui-kit';
import Navbar1 from '../components/Navbar1';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from 'react-router-dom';
import Footer from './footer';
import Center from './center';
import Image from './imaged';
export default function Header() {
    const [showBasic, setShowBasic] = useState(false);
  
    return (
      <div>
      <header>
            
      <div
      className='p-5 text-center bg-image'
      style={{
        backgroundImage: `url('/images/mainboat.jpg')`,
        height: 400,
      }}
    >
              <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                <div className='d-flex justify-content-center align-items-center h-100'>
                  <div className='text-white'>
                    <h1 className='mb-3'>Welcome !!!</h1>
                    <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </header>
          
              <Center/>
              
       </div>
  );
}