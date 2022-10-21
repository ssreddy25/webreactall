import React from 'react'
import { BrowserRouter ,Routes, Route,Link} from 'react-router-dom'
import AboutsUs from './AboutsUs'
import Home1 from './Home1'
import Services from './Services'

const NavBar = () => {
  return (
    <div>
       <BrowserRouter>
       <ol class="nav nav-pills nav-fill">
      <li class="nav-item"><Link to="/home1">Home1 </Link></li>
      <li class="nav-item"><Link to="/services">Services</Link></li>
      <li class="nav-item"> <Link to="/aboutus"> AboutsUs</Link></li>
      </ol>
      <Routes>
        <Route path="" element={<Home1/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/aboutus" element={<AboutsUs/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default NavBar
