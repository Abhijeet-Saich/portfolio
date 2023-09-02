//accessing components
const navMenu =  document.getElementById('nav-menu');
const navToggle =  document.getElementById('nav-toggle');
const navClose =  document.getElementById('nav-close');


//to display menu
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu');
    })
}


//to remove menu
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu');
    })
}


//to remove menu after clicking
const navItems = document.querySelectorAll('.nav__link');
const linkAction = () => {
    navMenu.classList.remove('show-menu');
}

navItems.forEach((e) => e.addEventListener('click',linkAction));




//adding blur to header
const blurHeader = () => {
    const header = document.getElementById('header');
    this.scrollY >= 90 ? header.classList.add('blur-header') : header.classList.remove('blur-header')
}

window.addEventListener('scroll',blurHeader);




//send messge
const contactForm = document.getElementById("contact-form");
const contactMessage = document.getElementById("contact-message");

const sendEmail = () => {
    e.preventDefault();

    emailjs.sendForm('service_24pmn3e','template_yypws7q','#contact-form','qTRNe5JTzDUNBcbOr')
    .then(()=>{
        contactMessage.textContent = "Message sent successfully";
        //removing message
        setTimeout(()=>{contactMessage.textContent=''},5000);
        contactForm.reset() ;
    },()=>{
        contactMessage.textContent = "Message not sent (service error)"
    })
}

contactForm.addEventListener('submit',sendEmail);


//show scroll up
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') 
                        : scrollUp.classList.remove('show-scroll') 
}

window.addEventListener('scroll',scrollUp);