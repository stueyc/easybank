console.log("hello world");

document.getElementById('hamburger').onclick = function() {
  let floatingMenu = document.getElementById("floating-menu")
  let hamburger = document.getElementsByClassName("closed")[0]
  let cross = document.getElementsByClassName("open")[0]
  console.log(floatingMenu.style.display)
  if (floatingMenu.style.display !== "block") {
    floatingMenu.style.display = "block"
    hamburger.style.display = "none"
    cross.style.display = "block"
  } else {
    floatingMenu.style.display = "none"
    hamburger.style.display = "block"
    cross.style.display = "none"
  }
  
}
