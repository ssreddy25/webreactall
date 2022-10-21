import React, { useState } from 'react'

function Chaneal() {
    let [sub, setSub] = useState("welcome to react you tube  chanael");
    let [count, setCount] = useState(0);

    function sub1() {

        setSub('thanks for subscring');
        setCount(count + 1)
    }
    function unsub(){
        
        setCount(count<=0?count=0:count-1);
        setSub(' why are you un subscribing may i know the resaon');
        var x=document.createElement("textarea")
        
        document.body.appendChild(x);
    }
    return (
        <div>
            <h1 >{sub}</h1>

            <button className='btn btn-danger' onClick={sub1}>subscribe</button>
            <button className='btn btn-danger'  onClick={unsub}>unSubscribe</button>
            <h1>subscribes:{count}</h1>
            
           
        </div >
    )
}

export default Chaneal
