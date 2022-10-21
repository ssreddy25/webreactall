import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

function SignUpComponent() {
    const [fristname, setFristname] = useState("");
    const [Lastname, setLastname] = useState("");
    const [email, setemail] = useState("");
    const [newpass, setnewpass] = useState("");
    const [confrompass, setconform] = useState("");
    const [exprerince, setexperince] = useState("");
    const [address, setadress] = useState("");

    let navei1=useNavigate();
    const Comapare=(e)=>{
        e.preventDefault();
        if(newpass===confrompass){
            navei1("/login")
        }
        else{
            alert("your password not mathed");
        }
        

    }
    const data=(e)=>{
        employee.map(emp=>{
            <tr>
            <td key={emp.id}></td>
            <td>{emp.fristname}</td>
            <td>{emp.Lastname}</td>
            <td>{emp.email}</td>
            <td>{emp.newpass}</td>
            <td>{emp.confrompass}</td>
            <td>{emp.exprerince}</td>
            <td>{emp.address}</td>
            </tr>
        })
        
    }

    var employee={
        "fristname":fristname,
         "lastname":Lastname,
         "email":email,
         "newpass":newpass,
         "confrompass":confrompass,
         "exprerince":exprerince,
         "address":address
    }
    localStorage.setItem('Email',email);
    localStorage.setItem('Pword',confrompass)

    return (
        <div>
            <form onSubmit={data}>
                <h1>Employee signUp </h1>
                <dl>
                    <dt>Frist Name</dt>
                    <dd><input type="text" name='FristName' onChange={e=>setFristname(e.target.value)}/></dd>
                    <dt>Last Name</dt>
                    <dd><input type="text" name='LristName' onChange={e=>setLastname(e.target.value)} /></dd>
                    <dt>Email</dt>
                    <dd><input type="text" name='Email'  onChange={e=>setemail(e.target.value)}/></dd>
                    <dt>New password </dt>
                    <dd><input type="text" name='Newpass'  onChange={e=>setnewpass(e.target.value)}/></dd>
                    <dt>Conform PassWord</dt>
                    <dd><input type="text" name='OldPass'  onChange={e=>setconform(e.target.value)} /></dd>
                    <dt>which technology do know</dt>
                    <dd>
                        <input type="checkbox" name="Technology1" />
                        <label> java</label>
                        <input type="checkbox" name="Technology2" />
                        <label> paython</label>
                        <input type="checkbox" name="Technology3" />
                        <label> mysql</label>
                        <input type="checkbox" name="Technology4" />
                        <label> .net</label>
                        <input type="checkbox" name="Technology5" />
                        <label> ruby</label>
                        <input type="checkbox" name="Technology6" />
                        <label> c++</label>
                        <input type="checkbox" name="Technology7" />
                        <label> c</label>

                    </dd>
                    <dt>exprerince</dt>
                    <dd>
                        <select name="Exper"  onChange={e=>setexperince(e.target.value)}>
                            <option>0-12 months</option>
                            <option>1-3 years</option>
                            <option>3-6 years</option>
                            <option>6-10 years</option>
                            <option>10-15 years</option>
                            <option>15-20 years</option>
                            <option>20-30 years</option>
                        </select>
                    </dd>
                    <dt>Employee Address</dt>
                    <dd>
                        <select name="Address" onChange={e=>setadress(e.target.value)}>
                            <option>telegana</option>
                            <option>andhra pradesh</option>
                            <option>tamilnadu</option>
                            <option>karnataka</option>
                            <option>keral</option>
                        </select>
                    </dd>

                    <div>
                        <button className='btn btn-primary ' >submit</button>
                    </div>
                </dl>
            </form>

            <table>
                <th>

                    <tr>
                        <td>frist name</td>
                        <td>last name</td>
                        <td>email</td>
                        <td>newpassword</td>
                        <td>confrimpassword</td>
                        <td>exprerince</td>
                        <td>address</td>
                        
                    </tr>
                    </th>
                    <tbody>
                      {data.employee}
                    </tbody>
                
            </table>
        </div>
    )
}

export default SignUpComponent
