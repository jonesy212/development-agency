//create more data attributes to select 
const modalOpen = '[data-open]';
const modalClose = '[data-close]';
const isVisible = 'is-visible'

//find every button to query everything
const openModal = document.querySelectorAll(modalOpen);
const closeModal = document.querySelectorAll(modalClose);



//Full Site Modal "open buttons"
for (const elm of openModal) {
    elm.addEventListener('click', function() {
        if ('click') {
            console.log('opening')
        }
        const modalId = this.dataset.open;
        document.getElementById(modalId).classList.add(isVisible);
    })
}

//Full Site Moddal "close buttons"
for (const elm of closeModal) {
    elm.addEventListener('click', function () {
        if ('click') {
            console.log('closing')
            this.parentElement.parentElement.classList.remove(isVisible)
        }
        const modalId = this.dataset.close;
    })
}