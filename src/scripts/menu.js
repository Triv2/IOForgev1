const menuButton=document.getElementById("menuButton");
const menuItems=document.getElementById("navItems");

menuButton.addEventListener("click", function(){
  if (menuItems.style.display === "none") {
    menuItems.style.display = "block";
  } else {
    menuItems.style.display = "none";
}
});

