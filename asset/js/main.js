// document.getElementById("year").innerHTML = new Date().getFullYear();
const html = document.querySelector("html");
const header = document.querySelector('.header');

/* ====== Loader Start======= */
window.onload = () => {
  const loader = document.querySelector(".loader");
  loader.style.display = "none";
  setTimeout(() => {
    toogleModal();
  },5000);
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
if(broucherBtn !== null){
  broucherBtn.addEventListener("click", toogleModal);
  closeBtn.addEventListener("click", toogleModal);
}

const applyNowBtn = document.getElementById("apply-now-btn");
if(applyNowBtn !== null){
  applyNowBtn.addEventListener("click", toogleModal);
}
/* ====== Modal End ======= */

/* ====== Scroll to Top Start ======= */
var backToTopButton = document.querySelector('.backToTop');
if(backToTopButton !== null){
  backToTopButton.addEventListener('click', function (){
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  function backToTop() {
    if (window.scrollY > 350) {
      backToTopButton.classList.add("show");
      // broucherBtn.classList.add("hide");
    } else {
      backToTopButton.classList.remove("show");
      // broucherBtn.classList.remove("hide");
    }
  }
  window.addEventListener('scroll', backToTop);
}

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


/* ========== Show/Hide Video Popup start =========== */
function openVideo(videoId) {
  var videoSource = 'https://www.youtube.com/embed/' + videoId;
  document.getElementById('videoIframe').src = videoSource;
  document.getElementById('videoPopup').style.display = 'flex';
}
const videoCards = document.querySelectorAll(".video-card");
const closeButton = document.getElementById("close-btn");
if(videoCards !== null && closeButton !== null) {
  videoCards.forEach((videoCard, i) => {
    videoCard.addEventListener("click" , ()=>{
      const videoId = videoCard.dataset.videoid;
      openVideo(videoId);
    });
  });
  
  // Close The Video
  closeButton.addEventListener("click", ()=> {
    document.getElementById('videoIframe').src = '';
    document.getElementById('videoPopup').style.display = 'none';
  });
}
/* ========== Show/Hide Video Popup end =========== */


/* ====== Toggle Password Start ======= */
const passwordInputFields = document.querySelectorAll(".form-password");
if(passwordInputFields !== null) {
  passwordInputFields.forEach((passwordField) => {
    const passField = passwordField.children[0];
    const eyeBtn = passwordField.children[1];
    let eyeClose = eyeBtn.children[0];
    let eyeOpen = eyeBtn.children[1];
    eyeBtn.addEventListener("click", (e) =>{
      e.preventDefault();
      if(passField.type === "password"){
        passField.type="text";
        eyeClose.style.display = "none";
        eyeOpen.style.display = "block";
      }else{
        passField.type="password";
        eyeClose.style.display = "block";
        eyeOpen.style.display = "none";
      }
    });
  });
}
/* ====== Toggle Password End ======= */


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

// Tabs Start
function openTab(btn, tabIndex) {
  const tabContent = document.querySelectorAll(".tab-content");
  tabContent.forEach((content, index) => {
    content.classList.toggle("active", index === tabIndex);
    btn.classList.toggle("active");
  });
}
const tabBtns  = document.querySelectorAll(".tab-btn");
if(tabBtns !== null){
  tabBtns.forEach((btn, index) => {
    btn.addEventListener("click", ()=> openTab(btn, index));
  });
}
// Tabs End


// Toggle Search Input Field
let searchIcons = document.querySelectorAll(".search-icon");
if(searchIcons !== null) {
  searchIcons.forEach((searchIcon, searchIconIndex) => {
    const searchInputs = document.querySelectorAll(".widgets__search");
    searchIcon.addEventListener("click", () => {
      searchInputs.forEach((searchInput, searchInputIndex) => {
        if(searchIconIndex === searchInputIndex){
          searchInput.classList.toggle("show");
        }
      });
    });
  });
}

/* ======== Share this Start =========== */
const shareThisBtns = document.querySelectorAll(".share-this");
const shareThisCloseBtn =   document.querySelector("#share-this-close-btn");
if(shareThisBtns !== null && shareThisCloseBtn !== null) {
  const shareThisModal = document.querySelector(".share-this__modal");
  shareThisBtns.forEach((shareBtn)=>{
    shareBtn.addEventListener("click", ()=>{
      shareThisModal.style.display="block";
      html.classList.add("overflow-hidden");
    });
  });
  // Close the modal
  shareThisCloseBtn.addEventListener("click", ()=>{
    shareThisModal.style.display = "none";
    html.classList.remove("overflow-hidden");
  });
}
/* ======== Share-this End =========== */

/* ======== Toggle Fitler Sidebar Start =========== */
const filterMenuBtn = document.querySelector("#filter-menu-button");
if(filterMenuBtn !== null){
  filterMenuBtn.addEventListener("click", function(){
    const filterSidebar = document.querySelector(".filter__sidebar");
    filterSidebar.classList.toggle('is-open');
    const filterContentSidebar = document.querySelector(".filter__content-container");
    filterContentSidebar.classList.toggle('is-open');
  });
}
/* ======== Toggle Fitler Sidebar End =========== */

// Stream Array Lists
document.addEventListener('DOMContentLoaded', function (){

  const courseStreams = ["Medical", "Dental", "Ayurveda","Naturopathy And Yogic Science", "Homeopathy", "Veternity", "Engineering", "Allied Health", "Pharmacy", "Designing", "Law", "Architecture", "Science", "Nursing", "Computer",
  "BBA", "MBA", "Commerce", "Arts & Humanities"];

  const ownerships = ["Public", "Private", "Deemed", "Autonomous", "Government"];

  const cities = ["Belgaum", "Hubli", "Dharwad", "Mysuru", "Davanaqere", "Vijaypura", "Bidar", "Raichur", 
  "Bangalore", "Manipal", "Mangalore", "Ramanagaram", "Kolar", "Shivamoga", "Chikkaballapur", "Gulbarga", 
  "Dakshina Kannada", "Tamkur", "Bellary"]

  // Create list items with checkboxes and labels
  var listItem;
  function createInputLists(item){
      listItem = document.createElement("li");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.name ='course';
      checkbox.value = item;
      checkbox.id = item;

      const label = document.createElement("label");
      label.setAttribute("for", item);
      label.appendChild(document.createTextNode(item));

      // Append checkbox and label to the list item
      listItem.appendChild(checkbox);
      listItem.appendChild(label);
  }

//  Streams
  courseStreams.forEach(function(stream) {
    createInputLists(stream);
    // var courseList = document.querySelector(".widgets__lists");
    var courseList = document.getElementById("stream");
    if(courseList !== null) {
      courseList.appendChild(listItem);
    }
  });

  // Ownership
  ownerships.forEach((ownership)=>{
    createInputLists(ownership);
    var ownerList = document.getElementById("ownership");
    if(ownerList !== null) {
      ownerList.appendChild(listItem);
    }
  });

  //  Cities
  cities.forEach((city)=>{
    createInputLists(city);
    var citiesList = document.getElementById("city");
    if(citiesList !== null) {
      citiesList.appendChild(listItem);
    }
  });
});


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
