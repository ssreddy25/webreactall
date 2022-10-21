

import React, { useState } from 'react'
import StudentList from "../serverices/StudentList";

function StudentService() {
    const [name, setName] = useState("")
    const [arr, setarr] = useState([])
 handleclick = (e) => {
        console.log(name);
let obj={
    name:name
}



    }
    return (
        <div>
            <form>
                <input value={name} onChange={e => { setName(e.target.value) }}></input>
                <button onClick={handleclick}>submit</button>
            </form>

            <table>
                <tbody>
                    
                </tbody>
            </table>

        </div>
    )
}

export default StudentService
