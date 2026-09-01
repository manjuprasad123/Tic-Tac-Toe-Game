let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let matchScore=document.querySelector(".match-score");

let flag=false;
let k=0;
let count=0;


const winners=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]

const checkWinner=()=>{
  for(let winner of winners){
    v1=boxes[winner[0]].innerText;
    v2=boxes[winner[1]].innerText;
    v3=boxes[winner[2]].innerText;

      if(v1!="" && v2!="" && v3!=""){
        if(v1===v2 && v2===v3 && k!==1){
          matchScore.innerText=`Congratulation! Winner ${v1}`;
          k=1;
        }
      }
    
  }
}

resetBtn.addEventListener("click",()=>{
  flag=false;
  for(let box of boxes){
    box.disabled=false;
    box.innerText="";
  }
  k=0;
  count=0;
  matchScore.innerText="";
})

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
      if(flag===false){
        box.innerText="0";
        flag=true;
        count++;
      }
      else{
        box.innerText="X"
        flag=false;
        count++;
      }
      box.disabled=true;
      checkWinner();

      if(count===9 && k===0){
        matchScore.innerText="Match Draw play again";
      }
    })
})

