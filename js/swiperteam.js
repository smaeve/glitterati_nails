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


/*-----SWIPER HOME------*/
const swiper = new Swiper('.profile__container', {
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




/*----LOCATION ARRAY DROPDOWN LIST-----*/
//build an Assoc Array called locationList
//populate it with various location metadata arrays
var locationList = {};
//we can now add other Assoc Arrays inside this array
locationList['Dublin'] = {
//add  info for Dublin
    Address: "123 Henry Street, Dublin 2, D01 1234",
    Manager : "Diane Lee",
    Telephone : "01 2334592",
    Email : "Glitterati_Dublin@gmail.com",
    Open : "9am-5pm, Mon-Fri",
};//end 
locationList['Galway'] = {
    //add  info for Galway
        Address: "12 Eyre Shopping Centre, Co. Galway, Y2K 1234",
        Manager : "Padraig O' Connor",
        Telephone : "01 7434592",
        Email : "Glitterati_Galway@gmail.com",
        Open : "9am-5pm,Mon-Fri",
};//end
locationList['Cork'] = {
    //add  info for Cork
    Address: "123 Connolly Street, Ballincollig, Co. Cork, EY1 1234",
    Manager : "Petra Radancu",
    Telephone : "01 8334591",
    Email : "Glitterati_Cork@gmail.com",
    Open : "10am-5pm, Tues-Sat",
};//end
    locationList['Kildare'] = {
//add  info for Kildare
    Address: "3 Holles Street, Co. Kildare, K03 1234",
    Manager : "Leanne Everton",
    Telephone : "01 5921111",
    Email : "Glitterati_Kildare@gmail.com",
    Open : "11am-6pm, Mon-Sat",
};//end