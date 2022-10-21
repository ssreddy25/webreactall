import React from 'react'
import SignUpComponent from './SignUpComponent'

function DashBoradComponet() {
    let employee = [{
        empId: "1",
        empName: "siva sankar reddy",
        empAddress: "telegana"
    },
    {
        empId: "2",
        empName: "siva sankar reddy",
        empAddress: "telegana"
    },
    {
        empId: "3",
        empName: "siva sankar reddy",
        empAddress: "telegana"
    },
    {
        empId: "4",
        empName: "siva sankar reddy",
        empAddress: "telegana"
    },
    {
        empId: "5",
        empName: "siva sankar reddy",
        empAddress: "telegana"
    }



    ]
    const emp = employee.map(emplo => {
        return (
            <tr key={emplo.empId}>
                <td>{emplo.empId}</td>
                <td>{emplo.empName}</td>
                <td>{emplo.empAddress}</td>
                <td><button className='btn btn-primary' style={{ margin: "10px" }}>Edit</button></td>
                <td><button className='btn btn-primary'>delete</button></td>
            </tr>
        )

    })


    return (
        <div>

            <div>
                <h1>employee details</h1>
                <table class="table">
                    
                    <thead>
                        <tr>
                           
                            <th scope="col">ID</th>
                            <th scope="col">NAME</th>
                            <th scope="col">Address</th>
                            <th colSpan={"1"}>action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {emp}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default DashBoradComponet
