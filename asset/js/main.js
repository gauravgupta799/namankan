// document.getElementById("year").innerHTML = new Date().getFullYear();
// const body = document.querySelector(".body");
const header = document.querySelector('.header');

//======  Loader start ======
window.onload = () => {
  const loader = document.querySelector(".loader");
  loader.style.display = "none";
}

//========= Scroll to Top  =============
var backToTopButton = document.querySelector('.backToTop');
backToTopButton.addEventListener('click', function (){
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

function backToTop() {
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
}
window.addEventListener('scroll', backToTop)
//====== Loader end ======


//====== Mobile Menu Toggle start ======
$(document).ready(function() {
    $('.hamburgur--mobile').click(function(){
        $(".header__mobile").addClass('open');
        $(".overlay").addClass('active');
        $("html").addClass("overflow-hidden");
    });
    $(".overlay").click(function(){
        $(".header__mobile").removeClass('open');
        $(".overlay").removeClass('active');
        $("html").removeClass("overflow-hidden");
    });
});
//====== Mobile Menu Toggle end ======

//====== Swipers start ======
const swiper1 = new Swiper(".heroSwiper",{
    slidesPerView:1,
    loop:true,
    autoplay:{
      delay:3000,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

// const swiper2 = new Swiper(".swiper-customers", {
//     spaceBetween:30,
//     slidesPerView:1,
//     grabCursor:true,
//     autoplay:{
//       delay:3000,
//     },
//     breakpoints:{
//         768:{
//             slidesPerView:2,
//         },
//     }
// });
//====== Swipers end ======


//====== Active Page Link start ======
const windowPathName = window.location.pathname;
const navLinks = document.querySelectorAll(".navbar__link");
if(navLinks !== null) {
  navLinks.forEach(link =>{
    const navLinkPathName = new URL(link.href).pathname;
    if((windowPathName === navLinkPathName) || (windowPathName === "/index.html" && navLinkPathName === "/")){
      link.classList.add("active");
    }
  });
}
//====== Active Page Link end ======





//====== Sticky header start ======
// function toggleHeaderSticky(scrollY){
//   if (scrollY > 20){
//     header.classList.add("sticky");
//   }else{
//     header.classList.remove("sticky");
//   }
// }
// window.addEventListener("scroll",()=>{
//   const scrollY = window.scrollY;
//   toggleHeaderSticky(scrollY);
// });
//====== Sticky header end ======