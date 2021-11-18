let button = document.querySelector(".btn-burger")
button.onclick = () => {
  // console.log("click")
  let mobileNav = document.querySelector(".mobile-nav")
  console.log(mobileNav)
  mobileNav.classList.toggle("mobile-nav_active")
}



// function burgermenu() {
//   const button = document.querySelector(".btn-burger")
//   console.log(button);
// }
// burgermenu()