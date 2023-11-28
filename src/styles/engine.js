const emojis=[
    '🤣','🤣',
    '🤡','🤡',
    '💩','💩',
    '💯','💯',
    '🔥','🔥',
    '❤️','❤️',
    '👌','👌',
    '😎','😎',
];
let openCards=[];

let shuffle=emojis.sort(()=>(Math.random()>.5?2:-1));

for(let index=0; index<emojis.length;index++){
    let box=document.createElement("div");
    box.className="item";
    box.innerHTML=shuffle[index];
    box.onclick=handleClick;
    document.querySelector(".game").appendChild(box);
}

function matchVerify(){
    if (openCards[0].innerHTML===openCards[1].innerHTML){
        openCards[0].classList.add("boxMatched");
        openCards[1].classList.add("boxMatched");
    }else{
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }
    openCards=[];
}

function handleClick(){
    if(openCards.length<2){
        this.classList.add("boxOpen");
        openCards.push(this);
    }
    if(openCards.length==2){
        setTimeout(matchVerify,500);

    }
}