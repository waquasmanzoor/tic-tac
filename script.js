
let boxes=document.querySelectorAll(".box");
let resetbt=document.querySelector("#resetbtn");
let newbtn=document.querySelector("#new-game");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
 let turno=true;
 const winpatterns =  [
     [0,1,2],
     [0,4,8],
     [0,3,6],
     [1,4,7],
     [2,4,6],
     [2,5,8],
     [3,4,5],
     [6,7,8],
];   
const resetGame=()=>{
     turno=true;
     enableboxes();
     msgcontainer.classList.add("hide");
};
                                                                                                                                  
 boxes.forEach((box)=>{
     box.addEventListener("click",()=>{
          console.log("clicked");
         if(turno){
             box.innerText="X";
             turno=false;
         }else{
             box.innerText="O";
             turno=true;
         }
         box.disabled=true;
         checkWinner();
     });
 });
 const enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};
 const disableBoxes=()=>{
     for(let box of boxes){
         box.disabled=true;
     
 }
}
 const showWinner=(winner)=>{
     msg.innerText='congratulations \n winner is '+winner;
     msgcontainer.classList.remove("hide");

 }
    
 const checkWinner=()=>{
     for (let pattern of winpatterns){
          let pos1Val=boxes[pattern[0]].innerText;
          let pos2Val=boxes[pattern[1]].innerText;
          let pos3Val=boxes[pattern[2]].innerText;
          if(pos1Val!="" && pos2Val !=''&& pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
             console.log("winner ");
             showWinner(pos1Val);
             
          }
            
     }
 }
};
newbtn.addEventListener("click",resetGame);
resetbt.addEventListener("click",resetGame);
 