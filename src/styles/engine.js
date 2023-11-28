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

    if(document.querySelectorAll(".boxMatched").length===emojis.length){
        alert("Victory!👍");
    }
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

const favicon = document.querySelector(
    `head > link[rel='icon']`
  );
  function faviconTemplate(string, icon) {
    return `
      <svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22>
        <text y=%22.9em%22 font-size=%2290%22>
          ${icon}
        </text>
      </svg>
    `.trim();
  }

function getRandomFavicon(){
    icon=emojis[(Math.floor(Math.random() * emojis.length))];
    favicon.setAttribute(`href`, `data:image/svg+xml,${icon}`);
}
getRandomFavicon();