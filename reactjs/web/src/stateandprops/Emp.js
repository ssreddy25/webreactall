import React, { useState } from 'react'


const Emp = () => {
    const[id,setId]=useState("1");
    const[name,setName]=useState("siva sankar reddy");
    const[salary,setSalary]=useState("25000");
  return (
    <div>
      
      
      <p>employee id:{id}</p>
      <p>employee name:{name}</p>
      <p>employee salary:{salary}</p>
      <hr/>
    </div>
  )
}

export default Emp
