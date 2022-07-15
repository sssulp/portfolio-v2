// mobile-menu
const menuFade = () => {
    const mobileNav = document.querySelector('nav')
    const menu = document.querySelector('.burger-menu');
    const nav = document.querySelector('.main-menu');
    const mobile = document.querySelector('.mobile-logo');
    const menuItems = document.querySelectorAll('.menu-item');
   

    menu.addEventListener('click', () => {
        nav.classList.toggle('mobile-active');
        mobile.classList.toggle('logo-active');
        mobileNav.classList.toggle('nav-active');

        // menu animation
        menu.classList.toggle('toggle');
    });
}

// calling the mobile menu
menuFade();



// const menuButton = document.querySelector('.hamburger');
// const menu = document.querySelector('.menu');
// const menuLinks = document.querySelectorAll('.menuLinks');
// const menuIcon = document.querySelector('.fa-solid');


// menuButton.addEventListener('click', () => {
//     menu.classList.toggle('active');
//     menuButton.classList.toggle('active');
//     menuIcon.classList.toggle('fa-square-xmark');
//     menuIcon.classList.toggle('fa-bars');


    
// });

// menuLinks.forEach((e)=>{

//     e.addEventListener('click', ()=>{
        
//         menu.classList.toggle('active');
//         menuButton.classList.toggle('active');
//         menuIcon.classList.toggle('fa-square-xmark');
//         menuIcon.classList.toggle('fa-bars');

//     })
// })
