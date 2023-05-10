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




//Modal class








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
        const modalId = this.dataset.close;
        if ('click') {
            console.log('closing')
            this.parentElement.parentElement.classList.remove(isVisible)
        }
        // document.getElementById(modalId).classList.remove(isVisible)

    })
}


//Modal
document.addEventListener('click', (e) => {
        console.log(e.target, document.querySelector('.modal.is-visible' || '.full-screen-moal.is-visible'));
    if (e.target === document.querySelector('.modal.is-visible')){
        document.querySelector('.modal.is-visible').classList.remove(isVisible);
    }
    if (e.target === document.querySelector('.full-screen-modal.is-visible')){
        document.querySelector('.full-screen-modal.is-visible').classList.remove(isVisible);
    }
})

document.addEventListener('keyup', (e) => {
//    allows you to see key strokes to capture escape button
    // console.log(e.key)
    // console.log(e.key, document.querySelector('.modal.is-visible'));
    if (e.key === 'Escape'){
        document.querySelector('.modal.is-visible').classList.remove(isVisible);
    }
})






































// I haave a bug in this code.  I am trying to fix an action on a modal.  The when I click on a nav item, the nav modal is visible both the about and contact modal.  When I click the i element, which is an 'x' on screen, the modal doesn't close when it should.  I have this same functionality on slidInOutTop modals and am getting not getting an error.   Keep in mind this action works find on the pop up modals, but not for the about and contact.  I do not want to refactor the code, but find the difference in why when cllicking the             <i class="fas fa-times" data-close></i> isn't working for about and contact, but is for the dialog modals.


// html:

// about and contact:
// <nav class="navbar">
//           <div class="brand-logo">
//             <a href="/"><h2>folio.</h2></a>
//           </div>
//           <div class="navbar-nav">
//             <ul class="ul-defaults-none main-menu">
//               <li class="nav-item">Home</li>
//               <li class="nav-item" data-open="about">About Me</li>
//               <li class="nav-item" data-open="contact">Contact</li>
//             </ul>
//           </div>
//         </nav>


// 		<!--About Page Modal-->

// <div id="about" class="full-screen-modal page-block " data-animation="zoomInOut" >
//         <!-- <div class="container-fluid"> -->
//           <header class="modal-header">
//             <h3>ABOUT PAGE</h3>
//             <i class="fas fa-times" data-close></i>
//           </header>
//           <div class="modal-body">
//             <img-wrapper>
//               <img src="./assets/images/ava-1.jpg" alt="" />
//             </img-wrapper>
  
//             <h2>Marcus Jones</h2>
//             <p>text 1</p>
//             <p>text 2</p>
//             <div>
//               <div>Email Me:</div>
//               <a href="mailto:energyiskey@protonmail.com"
//                 >energyiskey@protonmail.com</a
//               >
//             </div>
//           </div>
//         <!-- </div> -->
//       </div>

// <!--Contact Page Modal-->
//       <div id="contact" class="full-screen-modal page-block " data-animation="zoomInOut" >
//         <!-- <div class="container-fluid"> -->
//           <header class="modal-header">
//             <h3>Contact Page</h3>
//             <i class="fas fa-times" data-close></i>
//           </header>
//           <div class="modal-body">
//             <img-wrapper>
//               <img src="./assets/images/ava-1.jpg" alt="" />
//             </img-wrapper>
  
//             <h2>Marcus Jones</h2>
//             <p>text 1</p>
//             <p>text 2</p>
//             <div>
//               <div>Email Me:</div>
//               <a href="mailto:energyiskey@protonmail.com"
//                 >energyiskey@protonmail.com</a
//               >
//             </div>
//           </div>
//         <!-- </div> -->
//       </div>



// modal that works:
// !-- Popup Modals -->

//         <div id="web-1" class="modal" data-animation="slideInOutTop">
//           <div class="modal-dialog">
//             <header class="modal-header">
//               <h3>Web Project 1</h3>
//               <i class="fas fa-times" data-close></i>
//             </header>
//             <div class="modal-body">
//               <img class="img-wrapper" src="./assets/images/portfolio-1.jpg" alt="portfolio image">
//               <div class="text-wrapper">
//                 <p><strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</strong></p>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
//             </div>
//           </div>
//         </div>
//       </div>

// <div id="app-3" class="modal" data-animation="slideInOutTop">
//           <div class="modal-dialog">
//             <header class="modal-header">
//               <h3>App Project 3</h3>
//               <i class="fas fa-times" data-close></i>
//             </header>
//             <div class="modal-body">
//               <img class="img-wrapper" src="./assets/images/portfolio-6.jpg" alt="portfolio image">
//               <div class="text-wrapper">
//                 <p><strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</strong></p>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
//             </div>
//           </div>
//         </div>
//       </div>

// css:
// animations:

// /* Animations */
// [data-animation="zoomInOut"].full-screen-modal{
//     transform: scale(.2)
// }

// [data-animation="zoomInOut"].is-visible.full-screen-modal {
//         transform: none;
// }

// [data-animation="slideInOutTop"] .modal-dialog {
//     opacity: 0;
//     transition: all .4s;
// }

// [data-animation="slideInOutTop"].is-visible .modal-dialog {
//     opacity: 1;
//     transition-delay: 0.2s;
// }

// [data-animation="slideInOutTop"].is-visible .modal-dialog{
//     transform: translateY(40%);
// }

// [data-animation="slideInOutTop"].is-visible .modal-dialog{
//     transform: none;

// }

// /* modal */


// .modal {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background: rgba(0,0,0,0.6);
//     cursor: pointer;
    
// }
// .modal,
// .full-screen-modal {
//     position: fixed;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     padding: 1rem;
//     transition: all 0.35s ease-in;
//     visibility: hidden;
//     opacity: 0;
//     z-index: 100;
// }

// .modal-dialog{
//     max-width: 800px;
//     max-height: 80vh;
//     background: var(--bg-panel);
//     color: var(--color-text-base);
//     overflow: hidden;
//     padding: 1.25rem 1.85rem;
//     border-radius: 5px;
//     cursor: default;
// }

// .modal-dialog .modal-header h3 {
//     color: var(--color-text-base);
// }

// .modal-header{
//     display: flex;
//     padding-bottom: 1rem;
//     justify-content: space-between;
// }

// .modal-header .fa-times{
//     font-size: 1.5rem;
//     transition: 0.5s ease-in
// }

// .modal-header .fa-times:hover{
//     transition: scale(1.1);
//     cursor: pointer;     
// }

// .full-screen-modal.is-visible,
// .modal.is-visible{
//     visibility: visible;
//     opacity: 1;
// }

// .modal-body {
//     display: flex;
//     align-items: center;
// }

// .modal-body .img-wrapper{
//   max-width: 200px;
//   margin-right: 0.75rem; 
//   border-radius: 8px; 
// }


// .modal-body .img-wrapper img {
//     width: 100%;
//     border-radius: 8px;
//     object-fit: cover;
//     height: 200px;
// }


// js:
// const theme = 'theme';
// const dataTheme = 'data-theme';
// const themeTab = '.theme-tab';
// const switcherBtn = '.switcher-btn';
// const dark = 'dark';
// const light = 'light';
// const open = 'open';
// const active = 'active';

// //create more data attributes to select 
// const modalOpen = '[data-open]';
// const modalClose = '[data-close]';
// const isVisible = 'is-visible'

// const dataFilter = '[data-filter]'
// const portfolioData = '[data-card]'
// //store selector
// const root = document.documentElement;



// // Theme
// const toggleTheme = document.querySelector(themeTab);
// const switcher = document.querySelectorAll(switcherBtn);
// const currentTheme = localStorage.getItem(theme);

// /* Portfolio */
// const filterLinks = document.querySelectorAll(dataFilter);
// const portfolioCards = document.querySelectorAll(portfolioData)

// // Modal
// //find every button to query everything
// const openModal = document.querySelectorAll(modalOpen);
// const closeModal = document.querySelectorAll(modalClose);




// //Modal class








// const setActive = (elm, selector) => {
//     if (document.querySelector(`${selector}.${active}`) !== null) {
//         document.querySelector(`${selector}.${active}`).classList.remove(active);
//     }
//         elm.classList.add(active);
// }

// const setTheme = (val) => {
//     if (val === dark) {
//         root.setAttribute(dataTheme, dark);
//         localStorage.setItem(theme, dark)
//     } else {
//         root.setAttribute(dataTheme, light);
//         localStorage.setItem(theme, light);
//     }
// };


// if (currentTheme) {
//     root.setAttribute(dataTheme, currentTheme);
//     switcher.forEach((btn) => {
//         btn.classList.remove(active);
//     })

//     if (currentTheme == dark) {
//         switcher[1].classList.add(active);
//     } else {
//         switcher[0].classList.add(active);
//     }
// }

// //create open class
// //change the chevron direction based on open and close

// toggleTheme.addEventListener('click', function() {
//     const tab = this.parentElement.parentElement;
//     //check for class and then open
//     if ('click') {
//         console.log('clicked here')
//     }
//     if (!tab.className.includes(open)) {
//         tab.classList.add(open)
//     } else {
//         tab.classList.remove(open)
//     }
 
// });

// for (const elm of switcher) {
//     elm.addEventListener('click', function () {
//         //check for class and then open
//         const toggle = this.dataset.toggle;
//         setActive(elm, switcherBtn)
//         setTheme(toggle)
//     }
//     )
// }

// for (const link of filterLinks) {
//     link.addEventListener('click', function () {
//         //check for class and then open
//         // const toggle = this.dataset.toggle;
//         setActive(link, '.filter-link')
//         const filter = this.dataset.filter;
//         console.log(this.dataset.filter)
//         portfolioCards.forEach(card => {
//             if (filter === 'all') {
//                 card.style.display = 'block'
//             }else if (card.dataset.card === filter){
//                 card.style.display = 'block'
//             } else {
//                 card.style.display = 'none'
//             }
//         })
//     })
// }



// //Full Site Modal "open buttons"
// for (const elm of openModal) {
//     elm.addEventListener('click', function() {

//         const modalId = this.dataset.open;
//         document.getElementById(modalId).classList.add(isVisible);
//     })
// }

// //Full Site Moddal "close buttons"
// for (const elm of closeModal) {
//     elm.addEventListener('click', function () {
//         if ('click') {
//             console.log('closing')
//             this.parentElement.parentElement.parentElement.classList.remove(isVisible)
//         }
//         const modalId = this.dataset.close;
//     })
// }


// //Modal
// document.addEventListener('click', (e) => {
//         // console.log(e.target, document.querySelector('.modal.is-visible'));
//     if (e.target === document.querySelector('.modal.is-visible')){
//         document.querySelector('.modal.is-visible').classList.remove(isVisible);
//     }
// })

// document.addEventListener('keyup', (e) => {
// //    allows you to see key strokes to capture escape button
//     // console.log(e.key)
//     // console.log(e.key, document.querySelector('.modal.is-visible'));
//     if (e.key === 'Escape'){
//         document.querySelector('.modal.is-visible').classList.remove(isVisible);
//     }
// })