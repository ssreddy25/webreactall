import React from 'react'
import { useState } from 'react'

function FormsComponte() {
    const[getName ,setName]=useState("");
    const[getPrice,setPrice]=useState("");
    const[getShirtSize,setShirtSize]=useState("");
    const[getAddress,setAddress]=useState("");

    function SubmitDetails(){
        document.write(`name=${getName}<br> price=${getPrice}<br> shritsize=${getShirtSize}<br> address=${getAddress}`)
    }
    
  return (
    <div>
        <form className='container' onSubmit={SubmitDetails}>
            <h1>produt Address</h1>
            <label >Name</label><br></br>
            <input type="text" name="Name" value={getName} onChange={e=>setName(e.target.value)}/><br></br>
            <label >price</label><br></br>
            <input type="text" name="price" value={getPrice} onChange={e=>setPrice(e.target.value)}/><br></br>
            <label >selct your shirt size</label><br></br>
            <select name="size" value={getShirtSize} onChange={e=>setShirtSize(e.target.value)}>
                <option>L SIZE</option>
                <option>XL SIZE</option>
                <option>XXL SIZE</option>
                <option>M SIZE</option>
                <option>S SIZE</option>
            </select><br></br>
            <label >selct your address </label><br></br>
            <select name="address" value={getAddress} onChange={e=>setAddress(e.target.value)}>
                <option>telagana</option>
                <option>tamilandu</option>
                <option>karntaka</option>
                <option>andhra pradesh</option>
                <option>kerala</option>
            </select>
            <button>submit</button>
            
            
            

        </form>
        <div>
            <h1>{getName}</h1>
        </div>
      
    </div>
  )
}

export default FormsComponte
