const menuButton=document.getElementById("menuButton");
const menuItems=document.getElementById("navItems");
const body=document.getElementById("body");
const logo=document.getElementById("logo");

menuButton.addEventListener("click", function(){
//   if (menuItems.style.visibility === "visible") {
//     menuItems.style.visibility = "hidden";
//   } else {
//     menuItems.style.visibility = "visible";
// } 
  if (menuItems.style.display=== "none") {
    menuItems.style.display = "flex";
    // logo.style.display= "flex";
  } else {
    menuItems.style.display = "none";
  }
});

// a function that will hide the menu when the user clicks outside of it


body.addEventListener('click', function(event) {
  let isClickInside = menuItems.contains(event.target);
  if (!isClickInside) {
    menuItems.style.display = "none";
    // logo.style.display = "none";
  }
});


