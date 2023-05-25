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
  card.innerHTML = `<a class='pets__slider_item_link'>
                      <img src=${SLIDER_ARRAY[index].img} class='pets__slider_item_image'>
                      <h4 class='pets__slider_item_name'>${SLIDER_ARRAY[index].name}</h4>
                      <span class='pets__slider_item_button'>Learn more</span>
                    </a>`;
  document.querySelector('.pets__slider_list').appendChild(card);
}

const LEFTBUTTON = document.querySelector('.pets__slider_left-arrow'),
      RIGHTBUTTON = document.querySelector('.pets__slider_right-arrow'),
      CAROUSEL = document.querySelector('.pets__slider_list');

const moveLeft = () => {
  CAROUSEL.classList.add("transition-left");
  LEFTBUTTON.removeEventListener("click", moveLeft);
  RIGHTBUTTON.removeEventListener("click", moveRight);
};

const moveRight = () => {
  CAROUSEL.classList.add("transition-right");
  LEFTBUTTON.removeEventListener("click", moveLeft);
  RIGHTBUTTON.removeEventListener("click", moveRight);
};

LEFTBUTTON.addEventListener("click", moveLeft);
RIGHTBUTTON.addEventListener("click", moveRight);

// ------------------------------



if (document.documentElement.clientWidth > 1279) {

let showCard = (array) => {
  for (let i = 0; i < 9; i++) {
    createCard(array[i]);
  }
}

let startArray = [0, 1, 2, 3, 4, 5, 6, 7, 0];
showCard(startArray);

let nextArray = startArray;

CAROUSEL.addEventListener("animationend", (animationEvent) => {
  let oldCards = document.querySelectorAll('.pets__slider_item');
  for (let i = 0; i < 9; i++) {
    oldCards[i].remove();
  }

  let newArray = [];
  function createArrayLeft () {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7];
    let newArr = arr;
    console.log(newArr)
    newArr.splice(newArr.indexOf(nextArray[0]), 1);
    newArr.splice(newArr.indexOf(nextArray[1]), 1);
    newArr.splice(newArr.indexOf(nextArray[2]), 1);
    console.log(newArr)
    let firstEl = newArr[Math.floor(Math.random() * 5)];
    newArr.splice(newArr.indexOf(firstEl), 1);
    newArray.push(firstEl);
    console.log(newArray)
    for (let i = 1; i < 8; i++) {
      if (i > 2 && i < 6) {
        newArray.push(nextArray[i - 3]);
      } else {
        let nextEl = newArr[Math.floor(Math.random() * (newArr.length))];
        newArr.splice(newArr.indexOf(nextEl), 1);
        newArray.push(nextEl);
      }
    }
    newArray.push(firstEl);
    console.log(nextArray)
    console.log(newArray)
    nextArray = newArray;
  }

  function createArrayRight () {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7];
    let newArr = arr;
    console.log(newArr)
    newArr.splice(newArr.indexOf(nextArray[6]), 1);
    newArr.splice(newArr.indexOf(nextArray[7]), 1);
    newArr.splice(newArr.indexOf(nextArray[8]), 1);
    console.log(newArr)
    let firstEl = newArr[Math.floor(Math.random() * 5)];
    newArr.splice(newArr.indexOf(firstEl), 1);
    newArray.push(firstEl);
    console.log(newArray)
    for (let i = 1; i < 8; i++) {
      if (i > 2 && i < 6) {
        newArray.push(nextArray[i + 3]);
      } else {
        let nextEl = newArr[Math.floor(Math.random() * (newArr.length))];
        newArr.splice(newArr.indexOf(nextEl), 1);
        newArray.push(nextEl);
      }
    }
    newArray.push(firstEl);
    console.log(nextArray)
    console.log(newArray)
    nextArray = newArray;
  }


  if (animationEvent.animationName === "move-left") {
    CAROUSEL.classList.remove("transition-left");
    createArrayLeft();
    showCard(newArray);
    currentModal(newArray);
  } else {
    CAROUSEL.classList.remove("transition-right");
    createArrayRight();
    showCard(newArray);
    currentModal(newArray);
  }


  LEFTBUTTON.addEventListener("click", moveLeft);
  RIGHTBUTTON.addEventListener("click", moveRight);
})
}


// -------------------------


else if (document.documentElement.clientWidth < 768) {
  let showCard = (array) => {
    for (let i = 0; i < 3; i++) {
      createCard(array[i]);
    }
  }
  
  let startArray = [2, 3, 4];
  showCard(startArray);
  
  let nextArray = startArray;
  
  CAROUSEL.addEventListener("animationend", (animationEvent) => {
    let oldCards = document.querySelectorAll('.pets__slider_item');
    for (let i = 0; i < 3; i++) {
      oldCards[i].remove();
    }
  
    let newArray = [];
    function createArrayLeft () {
      const arr = [0, 1, 2, 3, 4, 5, 6, 7];
      let newArr = arr;
      newArr.splice(newArr.indexOf(nextArray[0]), 1);
      for (let i = 0; i < 3; i++) {
        if (i === 1) {
          newArray.push(nextArray[i - 1]);
        } else {
          let nextEl = newArr[Math.floor(Math.random() * (newArr.length))];
          newArr.splice(newArr.indexOf(nextEl), 1);
          newArray.push(nextEl);
        }
      }
      nextArray = newArray;
    }

    function createArrayRight () {
      const arr = [0, 1, 2, 3, 4, 5, 6, 7];
      let newArr = arr;
      newArr.splice(newArr.indexOf(nextArray[2]), 1);
      for (let i = 0; i < 3; i++) {
        if (i === 1) {
          newArray.push(nextArray[i + 1]);
        } else {
          let nextEl = newArr[Math.floor(Math.random() * (newArr.length))];
          newArr.splice(newArr.indexOf(nextEl), 1);
          newArray.push(nextEl);
        }
      }
      nextArray = newArray;
    }
  
    if (animationEvent.animationName === "move-left") {
      CAROUSEL.classList.remove("transition-left");
      createArrayLeft();
      showCard(newArray);
      currentModal(newArray);
    } else {
      CAROUSEL.classList.remove("transition-right");
      createArrayRight();
      showCard(newArray);
      currentModal(newArray);
    }
  
  
    LEFTBUTTON.addEventListener("click", moveLeft);
    RIGHTBUTTON.addEventListener("click", moveRight);
  })
  

}

// -------------------------

else {
    let showCard = (array) => {
    for (let i = 0; i < 6; i++) {
      createCard(array[i]);
    }
  }
  
  let startArray = [1, 2, 3, 4, 5, 6];
  showCard(startArray);
  
  let nextArray = startArray;
  
  CAROUSEL.addEventListener("animationend", (animationEvent) => {
    let oldCards = document.querySelectorAll('.pets__slider_item');
    for (let i = 0; i < 6; i++) {
      oldCards[i].remove();
    }
  
    let newArray = [];
    function createArrayLeft () {
      const arr = [0, 1, 2, 3, 4, 5, 6, 7];
      let newArr = arr;
      newArr.splice(newArr.indexOf(nextArray[0]), 1);
      newArr.splice(newArr.indexOf(nextArray[1]), 1);
      for (let i = 0; i < 6; i++) {
        if (i > 1 && i < 4) {
          newArray.push(nextArray[i - 2]);
        } else {
          let nextEl = newArr[Math.floor(Math.random() * (newArr.length))];
          newArr.splice(newArr.indexOf(nextEl), 1);
          newArray.push(nextEl);
        }
      }
      nextArray = newArray;
    }

    function createArrayRight () {
      const arr = [0, 1, 2, 3, 4, 5, 6, 7];
      let newArr = arr;
      newArr.splice(newArr.indexOf(nextArray[4]), 1);
      newArr.splice(newArr.indexOf(nextArray[5]), 1);
      for (let i = 0; i < 6; i++) {
        if (i > 1 && i < 4) {
          newArray.push(nextArray[i + 2]);
        } else {
          let nextEl = newArr[Math.floor(Math.random() * (newArr.length))];
          newArr.splice(newArr.indexOf(nextEl), 1);
          newArray.push(nextEl);
        }
      }
      nextArray = newArray;
    }

    if (animationEvent.animationName === "move-left") {
      CAROUSEL.classList.remove("transition-left");
      createArrayLeft();
      showCard(newArray);
      currentModal(newArray);
    } else {
      CAROUSEL.classList.remove("transition-right");
      createArrayRight();
      showCard(newArray);
      currentModal(newArray);
    }
  
  
    LEFTBUTTON.addEventListener("click", moveLeft);
    RIGHTBUTTON.addEventListener("click", moveRight);
  })
  
}










