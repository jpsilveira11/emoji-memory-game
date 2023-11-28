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
    document.querySelector(".game").appendChild(box);
}