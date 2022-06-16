//MENU SHOW
const showMenu = (toggleId, navId) =>{
    const toggle=document.getElementById(toggleId);
    const nav=document.getElementById(navId)
    console.log({toggle});
    console.log({navId});

    if (toggle && nav){
        toggle.addEventListener("click" ,()=>{
            nav.classList.toggle("show");//javacsricpt css display nav menu
        })
    }

};
showMenu("nav-toggle","nav-menu");

/*=========================================ACTIVE AND REMOVE MENU MOBILE==================*/
const navlink = document.querySelectorAll(".nav__link");

console.log({navlink});

function linkAction(){
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show");//When we click on each nav__link,we remove the show class
}
navlink.forEach((n)=>n.addEventListener("click" , linkAction));

/*============SCROLL REVEAL ANIMATION==================*/
const sr = ScrollReveal({
    origin:"top",
    distance:"80",
    duration:"2000",
    reset:true,
})
// SCROLL HOME
sr.reveal(".home__title", {});
sr.reveal(".button",{delay:200});
sr.reveal(".home__img",{delay:400});
sr.reveal(".home__social-icon",{interval: 400});

//SCROLL ABOUT
sr.reveal(".about__img", {});
sr.reveal(".about__subtitle",{delay:200});
sr.reveal(".about__text",{delay:400});

//SCROOLL SKILLS
sr.reveal(".skills__sutitle", {});
sr.reveal(".skills__text",{delay:200});
sr.reveal(".skill__data",{delay:400});
sr.reveal(".skills__img",{interval: 400});

//SCROLL WORK
sr.reveal(".work__img",{interval:200});

//SCROLL CONTACT
sr.reveal(".contact__input",{interval:300});