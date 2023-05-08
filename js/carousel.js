const slides = document.querySelectorAll('.review-item');
const buttons = document.querySelectorAll('.slide-control-container button');
console.log(slides);
// console.log(buttons);

let currentSlide = Math.floor(Math.random() * slides.length); 
let nextSlide = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
let prevSlide = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;

const dummySlides = [
    // slide 0
    // slide 1
    // slide 2  current [next] = current + 1
    // slide 3 current 
]


const update = () => {
    slides.forEach((slide) => {
        slide.classList.remove('active', 'prev', 'next');
    })
    slides[currentSlide].classList.add('active')
    slides[prevSlide].classList.add('prev')
    slides[nextSlide].classList.add('next')
}
// update the css
const gotToSlideIndex = (slide) => {
    currentSlide = slide;

    nextSlide = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
    prevSlide = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
    update()
    console.log('slide',currentSlide)
    console.log('next',nextSlide)
}
const goToNext = () => currentSlide < slides.length - 1 ? gotToSlideIndex(currentSlide + 1) : gotToSlideIndex(0);
const goToPrev = () => currentSlide > 0 ? gotToSlideIndex(currentSlide - 1) : gotToSlideIndex(slides.length - 1);

for (let i = 0; i < buttons.length; i+= 1) {
    buttons[i].addEventListener('click', () => i === 0 ? goToPrev() : goToNext())
}


update()



//steps taken   
/*create eventListener for prev/next */
// goToNext()/
// goToPrev()/
// updatesIndexes(param)
// updateCSS()

// --decide how to call prev/next
//-- update variables 
// -- [current ] = newIndex
// -- [next] = current + 1 : 0
// -- [prev] = current - 1 : 0
// -- [prev] = current -1 : length - 1




