/*-------------------- MENU SHOW Y HIDDEN --------------------*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')
      
/*----- MENU SHOW -----*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*----- MENU HIDDEN -----*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*-------------------- REMOVE MENU WHEN CLICKED OUTSIDE MENU --------------------*/
document.addEventListener('click', closeMenu);
document.addEventListener('touch', closeMenu);

function closeMenu(event) {
    if (!navMenu.contains(event.target) && !navToggle.contains(event.target)) {
        navMenu.classList.remove('show-menu')
    }
}

/*-------------------- REMOVE MENU MOBILE --------------------*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class

    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*-------------------- SCROLL SECTIONS ACTIVE LINK --------------------*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
