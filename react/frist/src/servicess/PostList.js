
import React, {useEffect,useState} from "react"

function PostList() {
    const[postlist, setpostlist]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:3000/posts",{method: "GET"})
        .then((response)=>response.json())
        .then(response =>{
          setpostlist(response)})
        .catch((data)=>setpostlist(data));
        console.log(postlist);
    })
    
  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>author</th>
          </tr>
        </thead>
        <tbody>
          
          
        
       
        </tbody>

      </table>
      
    </div>
  )
}

export default PostList
