// console.log("admin");

/* ============== Menu Toggle start ============== */
const toggleBtn = document.querySelector(".toggle");
const navigation = document.querySelector(".navigation");

if(toggleBtn !== null){
  const main = document.querySelector(".main--admin");
  toggleBtn.onclick = function (){
      navigation.classList.toggle("collapse");
      navigation.classList.toggle("active");
      main.classList.toggle("collapse");
      const menuBtn = document.querySelector("#menu-outline");
      menuBtn.classList.toggle("active");
  };
  const closeBtn = document.querySelector("#close-menu-btn");
  closeBtn.onclick = function (){
    navigation.classList.remove("active");
  }
}
/* ============== Menu Toggle end ============== */


/* ============== Active Link start ============== */
let list = document.querySelectorAll(".navigation-menu li");
function activeLink(){
  list.forEach((item) => {
    item.classList.remove("active");
    navigation.classList.remove("active");
  });
  this.classList.add("active");
}

if(list.length > 0){
    list.forEach((item) => {
      item.addEventListener("click", activeLink);
    });
}
/* ============== Active Link end ============== */


/* ============== Tab Start ============== */
const links = document.querySelectorAll(".link");
if(links.length > 0){
  links.forEach(function (link) {
    link.addEventListener("click",(e) => {
      e.preventDefault();
      const contedId = link.getAttribute("data-content").trim();
      const tabContents = document.querySelectorAll(".tab-contents");
      tabContents.forEach(function (tabContent){
        if(tabContent.id === contedId){
          tabContent.style.display = "block";
        }else{
          tabContent.style.display = "none";
        }
      });
    });
  });
}
/* ============== Tab End ============== */