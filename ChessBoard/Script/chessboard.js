var ref=null;
var listener=(e)=>{
    if(ref==null){
        if(e.toElement.innerHTML!=""){
        ref=e.toElement;
        e.toElement.classList.add("mark")
    }
    }
    else{
        if(e.toElement.innerHTML==""){
            e.toElement.innerHTML=ref.innerHTML
            ref.classList.remove("mark")
            ref.innerHTML="";
            ref=null
        }
    }
  
}
var boxes=document.getElementsByClassName("box");
// console.log(boxes)
// boxes.forEach(element => {
//     element.addEventListener("click",listener)
// });
for (i = 0;i < boxes.length; i++) {
    boxes[i].addEventListener("click",listener);
  }

