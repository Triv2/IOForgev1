const menuButton=document.getElementById("menuButton");
const menuItems=document.getElementById("navItems");

menuButton.addEventListener("click", function(){
//   if (menuItems.style.visibility === "visible") {
//     menuItems.style.visibility = "hidden";
//   } else {
//     menuItems.style.visibility = "visible";
// } 
  if (menuItems.style.display=== "none") {
    menuItems.style.display = "flex";
  } else {
    menuItems.style.display = "none";
  }
});

