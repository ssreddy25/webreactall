import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

function LogiComponet() {
    const[username,setName]=useState("");
    const[userpassword,setPassWrod]=useState("");
    let navei=useNavigate();
   const Check =(e)=>{
    e.preventDefault();
       if(username===localStorage.getItem('Email') && userpassword===localStorage.getItem('Pword')){
       
        navei("/dasbord")
       }else{
        alert("your username and password not matched")
       }
   }
   
   
  return (
    <div>
     <form onSubmit={Check}>
        <h1>Employee Login </h1>
        <dl>
            <dt>username</dt>
            <dd><input type="text" name='UserName' value={username} onChange={e=>setName(e.target.value)} /></dd>
            <dt>password</dt>
            <dd><input type="text" name='PassWord' value={userpassword} onChange={e=>setPassWrod(e.target.value)} /></dd>
            <div>
                <button className='btn btn-primary ' >login</button>
            </div>
        </dl>
     </form>
    </div>
  )
}

export default LogiComponet
