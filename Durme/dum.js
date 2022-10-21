// document.querySelector("button").addEventListener("click",handle);

// function handle(){

//     alert("you cliked the buttion");
// }
// using unamyous funttion insttead of the above codeing.
// for(let a=0;a<document.querySelectorAll(".durm");a++){
// document.querySelectorAll("button")[a].addEventListener("click",function (){

//     alert("you cliked the buttion");
// })
// }

var numberOfButtion=document.querySelectorAll(" .durm").length;

for(let i=0;i<numberOfButtion;i++){

    document.querySelectorAll("button")[i].addEventListener("click",function (){

          var buttonInerhtml=this.innerHTML;
        switch (buttonInerhtml) {
            case "w":
                var audio=new Audio("sounds/w1.mp3");
                audio.play();
            
                break;
                case "q":
                    var audio2=new Audio("sounds/q1.mp3");
                    audio2.play();
                    break;
                    case "a":
                        var audio3=new Audio("sounds/a1.mp3");
                        audio3.play();
                        break;
                        case "s":
                            var audio4=new Audio("sounds/s1.mp3");
                            audio4.play();
                            break;
                            case "g":
                                var audio5=new Audio("sounds/qq.mp3");
                                audio5.play();
                                break;
                                case "f":
                                    var audio6=new Audio("sounds/f1.mp3");
                                    audio6.play();
                                    break;
                                    case "j":
                                        var audio7=new Audio("sounds/j1.mp3");
                                        audio7.play();
                                        break;
                                        case "k":
                                            var audio8=new Audio("sounds/k1.mp3");
                                            audio8.play();
                                
                                            break;
        
            default:
                console.log(buttonInerhtml);
        }




    })

}
