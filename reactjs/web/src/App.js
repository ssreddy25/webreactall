
import './App.css';
// import Home from './components/Home';
// import Main from './components/Main';
// import Footer from './components/Footer';
// import Fun from './components/subfolder/Fun';
// import ArrFun from './components/subfolder/ArrFun';
import NavBar from './components/NavBar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Product from './stateandprops/Product';
import Emp from './stateandprops/Emp';
import Student from './stateandprops/Student';
import IncDcr from './components/IncDcr';
import Chaneal from './components/Chaneal';
import FormsComponte from './components/FormsComponte';
import FormikDemoCompnents from './components/FormikDemoCompnent';
import FormValdatitionComponent from './components/FormValditionComponent';
import YupValdiationComponents from './components/YupValdiationComponents';
import FomikComponent from './components/FomikComponent';
import { useState } from 'react';


function App() {
  const [name, setName] =useState("")
  const [arr, setarr] = useState([])
  const[button,setbutton]=useState(false)
  const[ind,setind]=useState()
  const handleclick = (e) => {
    e.preventDefault()

    console.log(name);
    let obj = {
      name: name
    }
    let data = arr.push(obj)
    let data1 = arr
    console.log(data1);
    setarr(data1)
    setName("")
    arr.map((data,ind1)=>{
if(ind1==ind){
  data.name=name
}
    })
  }
  const handleclickde = (index) => {
    console.log(":fghjkl");
    let arr1 = []
    arr.map((data, ind) => {

      if (index !== ind) {
        arr1.push(data)
      }
    })
    setarr(arr1)
    console.log(arr);
    setName("")
  }

  const handleclicked=(index)=>{
    arr.map((data, ind) => {

      if (index == ind) {
        setName(data.name)
setind(ind)
      }
    })
    setbutton(true)
  }
  return (
    <div className="App">
      {/* <Home/>
      <Main/>
      <Footer/>
      <Fun/>
      <ArrFun/>   */}
      {/* <NavBar /> */}
      {/* <h1>product details</h1>
     <Product id='1' name="nike" price="3500"/>
     <Product id='2' name="nike" price="3500"/>
     <Product id='3' name="nike" price="3500"/>
     <Product id='4' name="nike" price="3500"/>
     <Product id='5' name="nike" price="3500"/>
      */}
      {/* <Emp/> */}
      {/* <h1>student information</h1>
      <Student name="siva sankar reddy" id="1001" branch="mca" addres="hyd" />
      <Student name="siva " id="1002" branch="mca" addres="hyd"/>

      <Student name="reddy" id="1003" branch="mca" addres="hyd"/>

      <Student name="siva sankar " id="1004" branch="mca" addres="hyd"/> */}
      {/* <IncDcr/> */}
      {/* <Chaneal/> */}
      {/* <FormsComponte/> */}
      {/* <FormikDemoCompnents/> */}
      {/* <FormValdatitionComponent/> */}
      {/* <YupValdiationComponents/> */}
      {/* <FomikComponent/> */}
      <div>
        <form>
          <input value={name} onChange={e => { setName(e.target.value) }}></input>
          {button?<button >resubmit</button>:<button onClick={handleclick}>submit</button>}
          
        </form>

        <table>
          <tbody>
            {
              arr.map((data, ind) => (

                <tr>
                  <td>{data.name}</td>
                  <td><button onClick={() => handleclickde(ind)}>del</button></td>
                  <td><button onClick={() => handleclicked(ind)}>edit</button></td>
                </tr>
              ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}

export default App;
