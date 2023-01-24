//FORM VALIDATION for CONTACT PAGE
const form = document.querySelector("form[name='contact-form']"); //this allows us to add an event listener, so when someone tries to submit the form, we can do something
const thankYou = document.querySelector("form[name='thank-you']");
const nameInput = document.querySelector("input[name='name']"); //grabbing the DOM element that is called 'name'
const emailInput = document.querySelector("input[name='email']");
const phoneInput = document.querySelector("input[name='phone']");
const messageInput = document.querySelector("textarea[name='message']");

nameInput.isValid = () => !!nameInput.value;
emailInput.isValid = () => isValidEmail(emailInput.value);
phoneInput.isValid = () => isValidPhone(phoneInput.value);
messageInput.isValid = () => !!messageInput.value;

const inputFields = [nameInput, emailInput, phoneInput, messageInput]; //event listener will check for these input lists when we type

//2 functions we will use to check for phone numbers and emails
const isValidEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase()); //REFERENCED from STACKOVERFLOW
  //Checks string to make sure it matches a particular format
};

const isValidPhone = (phone) => {
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im; 
  return re.test(String(phone).toLowerCase());
}; 

let shouldValidate = false; //Set up a boolean
let isFormValid = false;

const validateInputs = () => { //this helper function will check if name.inputValue is not defined, then we have an error
  console.log("we are here");
  if (!shouldValidate) return; //Checking validation of each input

  isFormValid = true;
  inputFields.forEach((input) => {
    input.classList.remove("invalid"); 
    input.nextElementSibling.classList.add("hide");

    if (!input.isValid()) {
      input.classList.add("invalid"); //highlights the input box as red/invalid too
      isFormValid = false;
      input.nextElementSibling.classList.remove("hide"); //uncovers the hidden error value, when we have an error/invalid text
    }
  });
};

form.addEventListener("submit", (e) => { //listen to the submit event (by clicking submit or hitting enter on form)
  e.preventDefault(); //don't allow page to refresh
  shouldValidate = true;
  validateInputs();
  if (isFormValid) {
      form.remove(); //These 2 lines remove the form whenever a valid input has been submitted
      thankYou.classList.remove("hidden");
  }
});

inputFields.forEach((input) => input.addEventListener("input", validateInputs)); //removes these error fields oncce a valid input has been entered



/*------NAV BAR JS FOR CONTACT FORM------*/
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

/*----TEAM ARRAY DROPDOWN LIST-----*/
//build an Assoc Array called nailList
//populate it with various nail metadata arrays
var nailList = {};
//we can now add other Assoc Arrays inside this array
nailList['Gel'] = {
//add  properties for Gel
    Colour: "€30",
    French : "€35",
    Stamp : "€35",
    Custom : "€45-€60",
    Duration : "1-2hr",
    Technicians : "Nat, Leanne, Petra"
};//end of Gel dropdown
    nailList['Acrylic'] = {
    //add  properties for Acrylic
    Colour: "€35",
    French : "€40",
    Stamp : "€45",
    Custom : "€50-€60",
    Duration : "1.5-2hr",
    Technicians : "Diane, Emma"
};//end of Acrylic
    nailList['Biosculpture'] = {
    //add  properties for Biosculpture
    Colour: "€30",
    French : "€37",
    Stamp : "€40",
    Custom : "€50-€60",
    Duration : "1-2hr",
    Technicians : "Padraig, Petra" 
};//end of Biosculpture
    nailList['Powder'] = {
    //add  properties for Powder
    Colour: "€35",
    French : "40",
    Stamp : "€45",
    Custom : "€55-€60",
    Duration : "1.5-2hr",
    Technicians : "Leanne, Nat"
};//end of Powder