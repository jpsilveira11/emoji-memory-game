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

function matched(){
    
}

function handleClick(){
    if(openCards<2){
        this.classList.add("boxOpen");
        openCards.push(this);
    }
    if(openCards.length==2){
        setTimeout(matched,500)

    }
}