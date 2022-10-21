import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import DashBoradComponet from './DashBoradComponet'
import LogiComponet from './LogiComponet'
import SignUpComponent from './SignUpComponent'

function NavBar() {
    return (
        <div>
            <BrowserRouter>



                <ul>
                    <li><Link to="/login">login</Link></li>
                    <li><Link to="/signUp">signUp</Link></li>

                </ul>

                <Routes>
                    <Route path="/login" element={<LogiComponet />} />
                    <Route path='/signUp' element={<SignUpComponent />} />
                    <Route path='/dasbord' element={<DashBoradComponet/>}/>
                    
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default NavBar
