import React, { useState } from 'react'

function IncDcr() {
   let[name,setname]=useState(0);
  return (
    <div>
      <p>{name}</p>
      <button className='btn btn-primary' onClick={()=>setname(name+1)} >Increment</button>
      <button className='btn btn-primary'onClick={()=>setname(name<=0?name=0:name-1)}>Dcrement</button>
    </div>
  )
}

export default IncDcr
