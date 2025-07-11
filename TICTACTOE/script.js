let boxes=document.querySelectorAll(".box");
let reset_btn=document.querySelector("#reset-btn");
let win_msg=document.querySelector(".invi");
let win_text=document.querySelector("#WINNER");
let new_game=document.querySelector("#new-game");
let turn0=true;
let count=0;
let winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];



// enables boxes 
let reset_game=()=>{
    count=0;
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        turn0=true;
        win_msg.classList.add("invi")
    }
}
//reset button
reset_btn.addEventListener("click",reset_game);
new_game.addEventListener("click",reset_game);
// disables boxes 
let box_disabled=()=>{
    for(let box of boxes){
            box.disabled=true
        }
    }
    //win condition
let checkwin=()=>{
    for(let pattern of winpatterns)
    {
            let pos1val = boxes[pattern[0]].innerText;
            let pos2val = boxes[pattern[1]].innerText;
            let pos3val = boxes[pattern[2]].innerText;
            
        if(pos1val!="" && pos2val!="" && pos3val!="")
        {
            if(pos1val===pos2val && pos2val===pos3val)
            {
                win_msg.classList.remove("invi");
                box_disabled();
                return true;
            }
        }
    }
}
// game draw
const gameDraw=()=>{
    win_text.innerText="DRAW!!!";
    win_msg.classList.remove("invi");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
//player0
        if(turn0)
        {
            box.innerText='0';
            win_text.style.color="#2A2D43"
            box.classList.remove("id-box_color");
            turn0=false;
        }
//playerX
        else
        {
            box.innerText="X";
            win_text.style.color="#FF0000";
            box.classList.add("id-box_color");
            turn0=true;
        }
        box.disabled=true;
        count++;
        let win=checkwin();

        if(count === 9 && !win){
            gameDraw();
        }
    });
});
