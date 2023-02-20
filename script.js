// FAQ

const faqs = document.querySelectorAll(".faq__section");

faqs.forEach(faq =>{
    faq.addEventListener("click", ()=> {
        faq.classList.toggle("active")
    })
} )

// MUSIC

let miCancion = document.getElementById("music");
let offButton = document.getElementById("off__button")

// LOADING

let pantallaCarga = document.getElementById("loading");

pantallaCarga.addEventListener("click", function() {
  pantallaCarga.style.display = "none";
  miCancion.play();
});

offButton.addEventListener("click", function(){
  miCancion.muted = !miCancion.muted;
});

// MENU

let menu = document.getElementById("menu__responsive")
let viewMenu = document.getElementById("container")
const itemNav = document.querySelectorAll(".item__list")

menu.addEventListener("click", function(){
  viewMenu.classList.toggle("show")
})

itemNav.forEach(item =>{
  item.addEventListener("click", ()=>{
    viewMenu.classList.toggle("show")
  })
})