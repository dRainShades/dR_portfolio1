//Navbar Fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    fixedNav = header.offsetTop;

    if(window.scrollY> fixedNav){
        header.classList.add('navbar-fixed');
    }else{
        header.classList.remove('navbar-fixed');
    }
}

//Hamburger
const Hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

Hamburger.addEventListener('click', function(){
    Hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
})
