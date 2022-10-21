import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'
import AboutUs from './AboutUs'
import ContacUs from './ContacUs'
import Home from './Home'
import Services from './Services'

function Nabar() {
  return (
    <div>
         <BrowserRouter>
          <ul   class="navbar navbar-dark bg-dark">
              <li><Link to='/home'>Home</Link></li>
             <li><Link to='/services'>Services</Link></li>
             <li><Link to='/aboutUs'>AboutUs</Link></li>
             <li><Link to='/contacUs'>ContacUs</Link></li>
       
            </ul>
        
        <Routes>
        
          <Route exact path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/aboutUs" element={<AboutUs/>} />
          <Route path="/contacUS" element={<ContacUs/>} />
        </Routes>
       </BrowserRouter>
       
    </div>
  )
}

export default Nabar
