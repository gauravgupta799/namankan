// document.getElementById("year").innerHTML = new Date().getFullYear();
const html = document.querySelector("html");
const header = document.querySelector('.header');

/* ====== Loader Start======= */
window.onload = () => {
  const loader = document.querySelector(".loader");
  loader.style.display = "none";
  setTimeout(() => {
    toogleModal();
  },3000)
}
/* ====== Loader End ======= */


/* ====== Modal Start ======= */
const broucherBtn = document.querySelector(".broucher-wrapper");
const closeBtn = document.querySelector(".close");

function toogleModal(){
  const backdrop = document.querySelector(".modal-backdrop");
  const modalDialog = document.querySelector(".modal-dialog");
  backdrop.classList.toggle("show");
  modalDialog.classList.toggle("show");
  html.classList.toggle("overflow-hidden")
}
broucherBtn.addEventListener("click", toogleModal);
closeBtn.addEventListener("click", toogleModal);
/* ====== Modal End ======= */


/* ====== Scroll to Top Start ======= */
var backToTopButton = document.querySelector('.backToTop');
backToTopButton.addEventListener('click', function (){
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

function backToTop() {
  if (window.scrollY > 350) {
    backToTopButton.classList.add("show");
    broucherBtn.classList.add("hide");
  } else {
    backToTopButton.classList.remove("show");
    broucherBtn.classList.remove("hide");
  }
}
window.addEventListener('scroll', backToTop)
/* ====== Scroll to Top End ======= */


/* ====== Mobile Menu Toggle Start ====== */
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
/* ====== Mobile Menu Toggle End ====== */


/* ====== Swipers Start ====== */
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
/* ====== Swipers End ====== */

/* ====== Signup/Login Form Start ====== */
$('#signup-btn').on('click', function () {
  $(".signup").css('display', 'block');
  $(".login").css("display","none");
  $("#signup-btn").addClass("active");
  $("#login-btn").removeClass("active");
})
$('#login-btn').on('click', function () {
  $(".signup").css('display', 'none');
  $(".login").css("display","block");
  $("#signup-btn").removeClass("active");
  $("#login-btn").addClass("active");
})
/* ====== Signup/Login Form End ====== */



/* ====== Active Page Link Start ====== */
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
/* ====== Active Page Link End ====== */
