const SLIDER_ARRAY = [
  {
    "name": "Sophia",
    "img": "../assets/images/sophia.png"
  },
  {
    "name": "Timmy",
    "img": "../assets/images/timmy.png"
  },
  {
    "name": "Charly",
    "img": "../assets/images/charly.png"
  },
  {
    "name": "Katrine",
    "img": "../assets/images/katrine.png"   
  },
  {
    "name": "Jennifer",
    "img": "../assets/images/jennifer.png"
  },
  {
    "name": "Woody",
    "img": "../assets/images/woody.png"
  },
  {
    "name": "Scarlett",
    "img": "../assets/images/scarlett.png"
  },
  {
    "name": "Freddie",
    "img": "../assets/images/freddie.png",
  }
];

function createCard (index) {
  let card = document.createElement('li');
  card.classList.add('pets__slider_item');
  card.setAttribute('data-name', `${SLIDER_ARRAY[index].name}`)
  card.innerHTML = `<a class='pets__slider_item_link'}>
                      <img src=${SLIDER_ARRAY[index].img} class='pets__slider_item_image'>
                      <h4 class='pets__slider_item_name'>${SLIDER_ARRAY[index].name}</h4>
                      <span class='pets__slider_item_button'>Learn more</span>
                    </a>`;
  document.querySelector('.pets__slider_list').appendChild(card);
}

const PAGLEFTBUTTON = document.querySelector('.pets__slider_pagination_button-left'),
      PAGRIGHTBUTTON = document.querySelector('.pets__slider_pagination_button-right'),
      PAGFIRSTBUTTON = document.querySelector('.pets__slider_pagination_button-first'),
      PAGLASTBUTTON = document.querySelector('.pets__slider_pagination_button-last'),
      PAGCURRENTBUTTON = document.querySelector('.pets__slider_pagination_button-current'),
      PAGINATION = document.querySelector('.pets__slider_list'),
      STARTNUMBER = 0;


const pagMoveLeft = () => {
  PAGINATION.classList.add("transition-left");
  PAGLEFTBUTTON.removeEventListener("click", pagMoveLeft);
  PAGRIGHTBUTTON.removeEventListener("click", pagMoveRight);
  PAGFIRSTBUTTON.removeEventListener("click", pagJumpLeft);
  PAGLASTBUTTON.removeEventListener("click", pagJumpRight);

};

const pagMoveRight = () => {
  PAGINATION.classList.add("transition-right");
  PAGLEFTBUTTON.removeEventListener("click", pagMoveLeft);
  PAGRIGHTBUTTON.removeEventListener("click", pagMoveRight);
  PAGFIRSTBUTTON.removeEventListener("click", pagJumpLeft);
  PAGLASTBUTTON.removeEventListener("click", pagJumpRight);

};
const pagJumpLeft = () => {
  PAGINATION.classList.add("jump-left");
  PAGLEFTBUTTON.removeEventListener("click", pagMoveLeft);
  PAGRIGHTBUTTON.removeEventListener("click", pagMoveRight);
  PAGFIRSTBUTTON.removeEventListener("click", pagJumpLeft);
  PAGLASTBUTTON.removeEventListener("click", pagJumpRight);
};

const pagJumpRight = () => {
  PAGINATION.classList.add("jump-right");
  PAGLEFTBUTTON.removeEventListener("click", pagMoveLeft);
  PAGRIGHTBUTTON.removeEventListener("click", pagMoveRight);
  PAGFIRSTBUTTON.removeEventListener("click", pagJumpLeft);
  PAGLASTBUTTON.removeEventListener("click", pagJumpRight);
};


// ------------------------
      
if (document.documentElement.clientWidth > 1279) {

  let bigArray = [];
  let el = Math.floor(Math.random() * 8);
  for (let i = 0; i < 6; i++) {
    bigArray[i] = [];
    for (let j = 0; j < 8; j++) {
      while (bigArray[i].includes(el)) {
        el = Math.floor(Math.random() * 8);
      }
      bigArray[i].push(el);
    }
  }

  let showCard = (array) => {
    for (let i = 0; i < 8; i++) {
      createCard(array[i]);
    }
  }
  
  showCard(bigArray[STARTNUMBER]);
  let currentNumber = STARTNUMBER + 1;

// ---------------------

  PAGRIGHTBUTTON.addEventListener("click", () => {
    if (currentNumber !== 6) pagMoveRight();
  });
  PAGLEFTBUTTON.addEventListener("click", () => {
    if (currentNumber !== 1) pagMoveLeft();
  });
  PAGLASTBUTTON.addEventListener("click", () => {
    if (currentNumber !== 6) pagJumpRight();
  });
  PAGFIRSTBUTTON.addEventListener("click", () => {
    if (currentNumber !== 1) pagJumpLeft();
  });


  PAGINATION.addEventListener("animationend", (animationEvent) => {
    let oldCards = document.querySelectorAll('.pets__slider_item');
    for (let i = 0; i < 8; i++) {
      oldCards[i].remove();
    }

    if (animationEvent.animationName === "pag-move-left") {
      PAGINATION.classList.remove("transition-left");
      if (currentNumber === 6) {
        PAGRIGHTBUTTON.classList.add('pets__slider_pagination_button-enabled');
        PAGLASTBUTTON.classList.add('pets__slider_pagination_button-enabled');
        PAGRIGHTBUTTON.classList.remove('pets__slider_pagination_button-disabled');
        PAGLASTBUTTON.classList.remove('pets__slider_pagination_button-disabled');
      }  
      currentNumber -= 1;
      PAGCURRENTBUTTON.textContent = currentNumber;
      showCard(bigArray[currentNumber - 1]);
      if (currentNumber === 1) {
        PAGLEFTBUTTON.classList.add('pets__slider_pagination_button-disabled');
        PAGFIRSTBUTTON.classList.add('pets__slider_pagination_button-disabled');
        PAGLEFTBUTTON.classList.remove('pets__slider_pagination_button-enabled');
        PAGFIRSTBUTTON.classList.remove('pets__slider_pagination_button-enabled');
      }
    } else if (animationEvent.animationName === "pag-move-right") {
      PAGINATION.classList.remove("transition-right");
      if (currentNumber === 1) {
        PAGLEFTBUTTON.classList.remove('pets__slider_pagination_button-disabled');
        PAGFIRSTBUTTON.classList.remove('pets__slider_pagination_button-disabled');
        PAGLEFTBUTTON.classList.add('pets__slider_pagination_button-enabled');
        PAGFIRSTBUTTON.classList.add('pets__slider_pagination_button-enabled');
      }
      currentNumber += 1;
      PAGCURRENTBUTTON.textContent = currentNumber;
      showCard(bigArray[currentNumber - 1]);
      if (currentNumber === 6) {
        PAGRIGHTBUTTON.classList.remove('pets__slider_pagination_button-enabled');
        PAGLASTBUTTON.classList.remove('pets__slider_pagination_button-enabled');
        PAGRIGHTBUTTON.classList.add('pets__slider_pagination_button-disabled');
        PAGLASTBUTTON.classList.add('pets__slider_pagination_button-disabled');
      }  
    } else if  (animationEvent.animationName === "pag-jump-left") {
      PAGINATION.classList.remove("jump-left");
      currentNumber = 1;
      PAGCURRENTBUTTON.textContent = 1;
      showCard(bigArray[0]);
      PAGLEFTBUTTON.classList.add('pets__slider_pagination_button-disabled');
      PAGFIRSTBUTTON.classList.add('pets__slider_pagination_button-disabled');
      PAGLEFTBUTTON.classList.remove('pets__slider_pagination_button-enabled');
      PAGFIRSTBUTTON.classList.remove('pets__slider_pagination_button-enabled');
      PAGRIGHTBUTTON.classList.add('pets__slider_pagination_button-enabled');
      PAGLASTBUTTON.classList.add('pets__slider_pagination_button-enabled');
      PAGRIGHTBUTTON.classList.remove('pets__slider_pagination_button-disabled');
      PAGLASTBUTTON.classList.remove('pets__slider_pagination_button-disabled');
    } else {
      PAGINATION.classList.remove("jump-right");
      currentNumber = 6;
      PAGCURRENTBUTTON.textContent = 6;
      showCard(bigArray[5]);
      PAGRIGHTBUTTON.classList.remove('pets__slider_pagination_button-enabled');
      PAGLASTBUTTON.classList.remove('pets__slider_pagination_button-enabled');
      PAGRIGHTBUTTON.classList.add('pets__slider_pagination_button-disabled');
      PAGLASTBUTTON.classList.add('pets__slider_pagination_button-disabled');
      PAGLEFTBUTTON.classList.remove('pets__slider_pagination_button-disabled');
      PAGFIRSTBUTTON.classList.remove('pets__slider_pagination_button-disabled');
      PAGLEFTBUTTON.classList.add('pets__slider_pagination_button-enabled');
      PAGFIRSTBUTTON.classList.add('pets__slider_pagination_button-enabled');
    }
    currentModal();
  });
  
}
  
// ----------------------  
  
else if (document.documentElement.clientWidth < 768) {

  let bigArray = [];
  let el = Math.floor(Math.random() * 8);
  for (let i = 0; i < 16; i++) {
    bigArray[i] = [];
    for (let j = 0; j < 3; j++) {
      bigArray[i].push(el);
      el += 1;
      if (el === 8) { el = 0; }
    }
    bigArray[i].sort(() => Math.random() - 0.5);
  }  

  let showCard = (array) => {
    for (let i = 0; i < 3; i++) {
      createCard(array[i]);
    }
  }
  
  showCard(bigArray[STARTNUMBER]);
  let currentNumber = STARTNUMBER + 1;

// ---------------------

PAGRIGHTBUTTON.addEventListener("click", () => {
  if (currentNumber !== 16) pagMoveRight();
});
PAGLEFTBUTTON.addEventListener("click", () => {
  if (currentNumber !== 1) pagMoveLeft();
});
PAGLASTBUTTON.addEventListener("click", () => {
  if (currentNumber !== 16) pagJumpRight();
});
PAGFIRSTBUTTON.addEventListener("click", () => {
  if (currentNumber !== 1) pagJumpLeft();
});


PAGINATION.addEventListener("animationend", (animationEvent) => {
  let oldCards = document.querySelectorAll('.pets__slider_item');
  for (let i = 0; i < 3; i++) {
    oldCards[i].remove();
  }

  if (animationEvent.animationName === "pag-move-left") {
    PAGINATION.classList.remove("transition-left");
    if (currentNumber === 16) {
      PAGRIGHTBUTTON.classList.add('pets__slider_pagination_button-enabled');
      PAGLASTBUTTON.classList.add('pets__slider_pagination_button-enabled');
      PAGRIGHTBUTTON.classList.remove('pets__slider_pagination_button-disabled');
      PAGLASTBUTTON.classList.remove('pets__slider_pagination_button-disabled');
    }  
    currentNumber -= 1;
    PAGCURRENTBUTTON.textContent = currentNumber;
    showCard(bigArray[currentNumber - 1]);
    if (currentNumber === 1) {
      PAGLEFTBUTTON.classList.add('pets__slider_pagination_button-disabled');
      PAGFIRSTBUTTON.classList.add('pets__slider_pagination_button-disabled');
      PAGLEFTBUTTON.classList.remove('pets__slider_pagination_button-enabled');
      PAGFIRSTBUTTON.classList.remove('pets__slider_pagination_button-enabled');
    }
  } else if (animationEvent.animationName === "pag-move-right") {
    PAGINATION.classList.remove("transition-right");
    if (currentNumber === 1) {
      PAGLEFTBUTTON.classList.remove('pets__slider_pagination_button-disabled');
      PAGFIRSTBUTTON.classList.remove('pets__slider_pagination_button-disabled');
      PAGLEFTBUTTON.classList.add('pets__slider_pagination_button-enabled');
      PAGFIRSTBUTTON.classList.add('pets__slider_pagination_button-enabled');
    }
    currentNumber += 1;
    PAGCURRENTBUTTON.textContent = currentNumber;
    showCard(bigArray[currentNumber - 1]);
    if (currentNumber === 16) {
      PAGRIGHTBUTTON.classList.remove('pets__slider_pagination_button-enabled');
      PAGLASTBUTTON.classList.remove('pets__slider_pagination_button-enabled');
      PAGRIGHTBUTTON.classList.add('pets__slider_pagination_button-disabled');
      PAGLASTBUTTON.classList.add('pets__slider_pagination_button-disabled');
    }  
  } else if  (animationEvent.animationName === "pag-jump-left") {
    PAGINATION.classList.remove("jump-left");
    currentNumber = 1;
    PAGCURRENTBUTTON.textContent = 1;
    showCard(bigArray[0]);
    PAGLEFTBUTTON.classList.add('pets__slider_pagination_button-disabled');
    PAGFIRSTBUTTON.classList.add('pets__slider_pagination_button-disabled');
    PAGLEFTBUTTON.classList.remove('pets__slider_pagination_button-enabled');
    PAGFIRSTBUTTON.classList.remove('pets__slider_pagination_button-enabled');
    PAGRIGHTBUTTON.classList.add('pets__slider_pagination_button-enabled');
    PAGLASTBUTTON.classList.add('pets__slider_pagination_button-enabled');
    PAGRIGHTBUTTON.classList.remove('pets__slider_pagination_button-disabled');
    PAGLASTBUTTON.classList.remove('pets__slider_pagination_button-disabled');
  } else {
    PAGINATION.classList.remove("jump-right");
    currentNumber = 16;
    PAGCURRENTBUTTON.textContent = 16;
    showCard(bigArray[15]);
    PAGRIGHTBUTTON.classList.remove('pets__slider_pagination_button-enabled');
    PAGLASTBUTTON.classList.remove('pets__slider_pagination_button-enabled');
    PAGRIGHTBUTTON.classList.add('pets__slider_pagination_button-disabled');
    PAGLASTBUTTON.classList.add('pets__slider_pagination_button-disabled');
    PAGLEFTBUTTON.classList.remove('pets__slider_pagination_button-disabled');
    PAGFIRSTBUTTON.classList.remove('pets__slider_pagination_button-disabled');
    PAGLEFTBUTTON.classList.add('pets__slider_pagination_button-enabled');
    PAGFIRSTBUTTON.classList.add('pets__slider_pagination_button-enabled');
  }
  currentModal();
});


}

// -------------------

else {
  let bigArray = [];
  let el = Math.floor(Math.random() * 8);
  for (let i = 0; i < 8; i++) {
    bigArray[i] = [];
    for (let j = 0; j < 6; j++) {      
      bigArray[i].push(el);
      el += 1;
      if (el === 8) { el = 0; }
    }
    bigArray[i].sort(() => Math.random() - 0.5);
  }

  let showCard = (array) => {
    for (let i = 0; i < 6; i++) {
      createCard(array[i]);
    }
  }
  
  showCard(bigArray[STARTNUMBER]);
  let currentNumber = STARTNUMBER + 1;

// ---------------------
PAGRIGHTBUTTON.addEventListener("click", () => {
  if (currentNumber !== 8) pagMoveRight();
});
PAGLEFTBUTTON.addEventListener("click", () => {
  if (currentNumber !== 1) pagMoveLeft();
});
PAGLASTBUTTON.addEventListener("click", () => {
  if (currentNumber !== 8) pagJumpRight();
});
PAGFIRSTBUTTON.addEventListener("click", () => {
  if (currentNumber !== 1) pagJumpLeft();
});


PAGINATION.addEventListener("animationend", (animationEvent) => {
  let oldCards = document.querySelectorAll('.pets__slider_item');
  for (let i = 0; i < 6; i++) {
    oldCards[i].remove();
  }

  if (animationEvent.animationName === "pag-move-left") {
    PAGINATION.classList.remove("transition-left");
    if (currentNumber === 8) {
      PAGRIGHTBUTTON.classList.add('pets__slider_pagination_button-enabled');
      PAGLASTBUTTON.classList.add('pets__slider_pagination_button-enabled');
      PAGRIGHTBUTTON.classList.remove('pets__slider_pagination_button-disabled');
      PAGLASTBUTTON.classList.remove('pets__slider_pagination_button-disabled');
    }  
    currentNumber -= 1;
    PAGCURRENTBUTTON.textContent = currentNumber;
    showCard(bigArray[currentNumber - 1]);
    if (currentNumber === 1) {
      PAGLEFTBUTTON.classList.add('pets__slider_pagination_button-disabled');
      PAGFIRSTBUTTON.classList.add('pets__slider_pagination_button-disabled');
      PAGLEFTBUTTON.classList.remove('pets__slider_pagination_button-enabled');
      PAGFIRSTBUTTON.classList.remove('pets__slider_pagination_button-enabled');
    }
  } else if (animationEvent.animationName === "pag-move-right") {
    PAGINATION.classList.remove("transition-right");
    if (currentNumber === 1) {
      PAGLEFTBUTTON.classList.remove('pets__slider_pagination_button-disabled');
      PAGFIRSTBUTTON.classList.remove('pets__slider_pagination_button-disabled');
      PAGLEFTBUTTON.classList.add('pets__slider_pagination_button-enabled');
      PAGFIRSTBUTTON.classList.add('pets__slider_pagination_button-enabled');
    }
    currentNumber += 1;
    PAGCURRENTBUTTON.textContent = currentNumber;
    showCard(bigArray[currentNumber - 1]);
    if (currentNumber === 8) {
      PAGRIGHTBUTTON.classList.remove('pets__slider_pagination_button-enabled');
      PAGLASTBUTTON.classList.remove('pets__slider_pagination_button-enabled');
      PAGRIGHTBUTTON.classList.add('pets__slider_pagination_button-disabled');
      PAGLASTBUTTON.classList.add('pets__slider_pagination_button-disabled');
    }  
  } else if  (animationEvent.animationName === "pag-jump-left") {
    PAGINATION.classList.remove("jump-left");
    currentNumber = 1;
    PAGCURRENTBUTTON.textContent = 1;
    showCard(bigArray[0]);
    PAGLEFTBUTTON.classList.add('pets__slider_pagination_button-disabled');
    PAGFIRSTBUTTON.classList.add('pets__slider_pagination_button-disabled');
    PAGLEFTBUTTON.classList.remove('pets__slider_pagination_button-enabled');
    PAGFIRSTBUTTON.classList.remove('pets__slider_pagination_button-enabled');
    PAGRIGHTBUTTON.classList.add('pets__slider_pagination_button-enabled');
    PAGLASTBUTTON.classList.add('pets__slider_pagination_button-enabled');
    PAGRIGHTBUTTON.classList.remove('pets__slider_pagination_button-disabled');
    PAGLASTBUTTON.classList.remove('pets__slider_pagination_button-disabled');
  } else {
    PAGINATION.classList.remove("jump-right");
    currentNumber = 8;
    PAGCURRENTBUTTON.textContent = 8;
    showCard(bigArray[7]);
    PAGRIGHTBUTTON.classList.remove('pets__slider_pagination_button-enabled');
    PAGLASTBUTTON.classList.remove('pets__slider_pagination_button-enabled');
    PAGRIGHTBUTTON.classList.add('pets__slider_pagination_button-disabled');
    PAGLASTBUTTON.classList.add('pets__slider_pagination_button-disabled');
    PAGLEFTBUTTON.classList.remove('pets__slider_pagination_button-disabled');
    PAGFIRSTBUTTON.classList.remove('pets__slider_pagination_button-disabled');
    PAGLEFTBUTTON.classList.add('pets__slider_pagination_button-enabled');
    PAGFIRSTBUTTON.classList.add('pets__slider_pagination_button-enabled');
  }
  currentModal();
});


}
