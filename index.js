let position = 0;
const slidesToshow = 4;
const slidesToScroll = 1;
const container = document.querySelector(".gallery__viewport");
const track = document.querySelector('.gallery__slider');
const btnPrev = document.querySelector(".btn-prev")
const btnNext = document.querySelector(".btn-next")
const items = document.querySelectorAll('.gallery__slider__item');
const itemCount = items.length;
const itemWidth = container.clientWidth / slidesToshow;
const movePosition = slidesToScroll * itemWidth;




items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`;
});

btnNext.addEventListener('click', () => {
    const itemsLeft = itemCount - (Math.abs(position) + slidesToshow * itemWidth) / itemWidth;

    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition()
    checkBtns()

});

btnPrev.addEventListener('click', () => {
    const itemsLeft = itemCount - Math.abs(position) / itemWidth;

    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition()
    checkBtns()

});

const setPosition = () => {
    track.style.transform = `translateX(${position}px)`
}

const checkBtns = () => {
    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= -(itemCount - slidesToshow) * itemWidth;
}

checkBtns()

console.log(items)