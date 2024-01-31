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
export default function Header() {
    const [showBasic, setShowBasic] = useState(false);
  
    return (
      <div>
      <Navbar1/>
        <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/041.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
  <MDBCard>
    <MDBCardImage
      src='https://www.google.com/url?sa=i&url=https%3A%2F%2Falleppeyhouseboat.in%2Fluxury-houseboats%2F&psig=AOvVaw31G6sGeXzn1smSRMvSOhmA&ust=1706087344421000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMimr9u5hYQDFQAAAAAdAAAAABAD'
      alt='...'
      position='top'
    />
    <MDBCardBody>
      <MDBCardTitle>Card title</MDBCardTitle>
      <MDBCardText>
        This is a longer card with supporting text below as a natural lead-in to additional content.
        This content is a little bit longer.
      </MDBCardText>
    </MDBCardBody>
  </MDBCard>
</MDBCol>

      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/043.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/044.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
              </MDBCardText>
              <Link to="/book"><button type='submit'>Book Now</button></Link>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow></div>
  );
}