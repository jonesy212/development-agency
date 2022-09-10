const theme = 'theme';
const dataTheme = 'data-theme';
const themeTab = '.theme-tab';
const switcherBtn = '.switcher-btn';
const dark = 'dark';
const light = 'light';
const open = 'open';
const active = 'active';


//store selector
const root = document.documentElement;

// Theme
const toggleTheme = document.querySelector(themeTab);
const switcher = document.querySelectorAll(switcherBtn);
const currentTheme = localStorage.getItem(theme);

//create more data attributes to select 
const modalOpen = '[data-open]';
const modalClose = '[data-close]';
const isVisible = 'is-visible'

// Modal
//find every button to query everything
const openModal = document.querySelectorAll(modalOpen);
const closeModal = document.querySelectorAll(modalClose);


//create open class
//change the chevron direction based on open and close

toggleTheme.addEventListener('clcck', function () {
    const tab = this.parentelement.parentElement;
    
})
toggleTheme.addEventListener('click', function() {
    const tab = this.parentElement.parentElement;
    //check for class and then open
    if ('click') {
        console.log('clicked here')
    }
    if (!tab.className.includes(open)) {
        tab.classList.add(open)
    } else
    {
        tab.classList.remove(open)
    }
 
});


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