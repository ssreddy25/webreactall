document.querySelector("input").addEventListener("focus" ,function(){
    this.value="";
})
document.querySelector("input").addEventListener("blur" ,function(){
    this.value="inpu";
})