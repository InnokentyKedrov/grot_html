const leftBtn = document.querySelector(".services__slider_left-arrow");
const rightBtn = document.querySelector(".services__slider_right-arrow");
// const text = document.querySelector(".services__slider__text");
const container = document.querySelector(".services__slider");
const mainSlide = document.querySelector(".services__slider_image-list");
let slidesCount = mainSlide.querySelectorAll(
  ".services__slider_image-item"
).length;

if (document.documentElement.clientWidth > 1279) {
  slidesCount /= 3;
} else if (
  document.documentElement.clientWidth > 767 &&
  document.documentElement.clientWidth < 1280
) {
  slidesCount /= 2;
}

let activeSlideIndex = 0;

// text.style.top = `-${(slidesCount - 1) * 100}%`;

leftBtn.addEventListener("click", () => {
  changeSlide("left");
});

rightBtn.addEventListener("click", () => {
  changeSlide("right");
});

const changeSlide = (direction) => {
  if (direction === "left") {
    activeSlideIndex++;
    if (activeSlideIndex === slidesCount) {
      activeSlideIndex = 0;
    }
  } else if (direction === "right") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1;
    }
  }

  const width = 320;

  if (document.documentElement.clientWidth > 1279) {
    mainSlide.style.transform = `translateX(-${
      activeSlideIndex * width * 3
    }px)`;
  } else if (document.documentElement.clientWidth < 767) {
    mainSlide.style.transform = `translateX(-${activeSlideIndex * width}px)`;
  } else {
    mainSlide.style.transform = `translateX(-${
      activeSlideIndex * width * 2
    }px)`;
  }

  // text.style.transform = `translateY(${activeSlideIndex * width}px)`;
};
