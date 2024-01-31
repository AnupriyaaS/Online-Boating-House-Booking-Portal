// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Hello_World from "./components/Hello_World"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./user/Login"
import H1 from "./user/Home1"
import Form from "./pages/Form"
import AddBookingForm from "./user/AddBookingForm"
import BoatDetailsForm from "./crud/adminboat"
import AdminLogin from "./admin/adminlogin"
import Home2 from "./admin/Home2"
import Aportal from "./admin/aportal"
import Contact from "./pages/Contact"
import Addboat from "./user/addboat"
import About from "./user/aboutus"
import Table from "./admin/table"
import ProfilePage from "./admin/aprofile"
import Thanks from "./user/afterbook"
import Sucess from "./pages/sucess"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/reg" element={<Form/>}/>
        <Route path="/h1" element={<H1/>}/>
        <Route path="/h2" element={<Home2/>}/>
        <Route path="/book" element={<AddBookingForm/>}/>
        <Route path="/add" element={<BoatDetailsForm/>}/>
        <Route path="/adlogin" element={<AdminLogin/>}/>
        <Route path="/aportal" element={<Aportal/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/addboat" element={<Addboat/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/table" element={<Table/>}/>
        <Route path="/aprofile" element={<ProfilePage/>}/>
        <Route path="/thanks" element={<Thanks/>}/>
        <Route path="/sucess" element={<Sucess/>}/>
          
      </Routes>
    </Router>
  )
}

export default App