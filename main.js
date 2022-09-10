const theme = 'theme';
const dataTheme = 'data-theme';
const themeTab = '.theme-tab';
const switcherBtn = '.switcher-btn';
const dark = 'dark';
const light = 'light';
const open = 'open';
const active = 'active';

//create more data attributes to select 
const modalOpen = '[data-open]';
const modalClose = '[data-close]';
const isVisible = 'is-visible'

const dataFilter = '[data-filter]'
const portfolioData = '[data-card]'
//store selector
const root = document.documentElement;

// Theme
const toggleTheme = document.querySelector(themeTab);
const switcher = document.querySelectorAll(switcherBtn);
const currentTheme = localStorage.getItem(theme);

/* Portfolio */
const filterLinks = document.querySelectorAll(dataFilter);
const portfolioCards = document.querySelectorAll(portfolioData)

// Modal
//find every button to query everything
const openModal = document.querySelectorAll(modalOpen);
const closeModal = document.querySelectorAll(modalClose);

const setActive = (elm, selector) => {
    if (document.querySelector(`${selector}.${active}`) !== null) {
        document.querySelector(`${selector}.${active}`).classList.remove(active);
    }
        elm.classList.add(active);
}

const setTheme = (val) => {
    if (val === dark) {
        root.setAttribute(dataTheme, dark);
        localStorage.setItem(theme, dark)
    } else {
        root.setAttribute(dataTheme, light);
        localStorage.setItem(theme, light);
    }
};


if (currentTheme) {
    root.setAttribute(dataTheme, currentTheme);
    switcher.forEach((btn) => {
        btn.classList.remove(active);
    })

    if (currentTheme == dark) {
        switcher[1].classList.add(active);
    } else {
        switcher[0].classList.add(active);
    }
}

//create open class
//change the chevron direction based on open and close

toggleTheme.addEventListener('click', function() {
    const tab = this.parentElement.parentElement;
    //check for class and then open
    if ('click') {
        console.log('clicked here')
    }
    if (!tab.className.includes(open)) {
        tab.classList.add(open)
    } else {
        tab.classList.remove(open)
    }
 
});

for (const elm of switcher) {
    elm.addEventListener('click', function () {
        //check for class and then open
        const toggle = this.dataset.toggle;
        setActive(elm, switcherBtn)
        setTheme(toggle)
    }
    )
}

for (const link of filterLinks) {
    link.addEventListener('click', function () {
        //check for class and then open
        // const toggle = this.dataset.toggle;
        setActive(link, '.filter-link')
        const filter = this.dataset.filter;
        console.log(this.dataset.filter)
        portfolioCards.forEach(card => {
            if (filter === 'all') {
                card.style.display = 'block'
            }else if (card.dataset.card === filter){
                card.style.display = 'block'
            } else {
                card.style.display = 'none'
            }
        })
    })
}



//Full Site Modal "open buttons"
for (const elm of openModal) {
    elm.addEventListener('click', function() {

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