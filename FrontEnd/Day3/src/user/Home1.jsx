import React, {useState} from 'react';

import {
  
  MDBRow,
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
import Footer from '../pages/footer';
import Center from '../pages/center';
import Header from '../pages/Header';
import Image1 from './IMage1';
export default function H1() {
    const [showBasic, setShowBasic] = useState(false);
  
    return (
      <div>
      <Navbar1/>
      <Header/>
      <Image1/>
      <Footer/></div>
  );
}