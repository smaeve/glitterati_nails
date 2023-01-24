/*--SHOW MENU--*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*---REMOVE MENU MOBILE---*/
const navLink = document.querySelectorAll('nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n=> n.addEventListener('click', linkAction))

/*--SCROLL ACTIVE LINK--*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute ('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }

    })
}
window.addEventListener('scroll', scrollActive)

/*---CHANGE BACKGROUND HEADER---*/
function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 200) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/*--SHOW SCROLL TOP--*/
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top')
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/*MIXITUP FILTER SHOP HOME PAGE*/
const mixer = mixitup('.shop__container', {
    selectors: {
        target: '.shop__content'
    },
    animation: {
        duration: 400
    }
});

/* Link active shop */ 
const linkShop = document.querySelectorAll('.shop__item')

function activeShop(){
    if(linkShop){
        linkShop.forEach(l=> l.classList.remove('active-shop'))
        this.classList.add('active-shop')
    }
}    
linkShop.forEach(l=> l.addEventListener('click', activeShop))

/*-----SWIPER HOME------*/
const swiper = new Swiper('.review__container', {
    spaceBetween: 16,
    loop: true,
    grabCursor: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoint:{
        640:{
            slidesPreview: 2,
        },
        1024:{
            slidesPreview: 3,
        },
    }

});


  /*-----GSAP ANIMATION------*/
gsap.from('.home__img', {opacity: 0, duration: 2, delay: .5, x: 60}) /*This section moves across after .5s*/
gsap.from('.home__data', {opacity: 0, duration: 2, delay: .8, y: 25}) /*This section moves up after .8s*/
gsap.from('.home__greeting, .home__keyword, .home__cont, .home__button', {opacity: 0, duration: 2, delay: 1, y: 25, ease: 'expo.out', stagger: .2})

gsap.from('.nav__logo, .nav__toggle', {opacity: 0, duration: 2, delay: 1.5, y: 25, ease: 'expo.out', stagger: .2})
gsap.from('.nav__item', {opacity: 0, duration: 1.8, delay: 1.5, y: 25, ease: 'expo.out', stagger: .2})
gsap.from('.home__social-icon', {opacity: 0, duration: 2, delay: 2.3, y: 25, ease: 'expo.out', stagger: .2})


/*-----SWIPER TEAM PAGE PROFILES------*/
/*const swiper = new Swiper('.profile__container', {
    spaceBetween: 16,
    loop: true,
    grabCursor: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoint:{
        640:{
            slidesPreview: 2,
        },
        1024:{
            slidesPreview: 3,
        },
    }

}); */


