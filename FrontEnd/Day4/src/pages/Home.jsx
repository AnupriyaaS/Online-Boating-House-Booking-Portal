import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from '../components/Navbar';
import Footer from "./footer"
import { Link } from 'react-router-dom';
import Center from './center';
import Header from './Header';
import Image from './imaged';
export default function App() {
  return (
    <div>
    <Navbar/>
            <Header/>
            <Image/>
            <Footer/>
    </div>
    
  );
}