let arr=[];
function addData(){
   
    
   let name2 =document.getElementById("name1").value
    let value=document.getElementById("name1").value


    arr.push([name2,value])

    arr.forEach((data)=>{
        document.getElementById("tabledata").insertRow().insertCell(0)=arr;
        document.getElementById("tabledata").insertRow().insertCell(1)=arr;

    })
    

}