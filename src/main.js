const hamburger = document.getElementById("hamburger");
const close = document.getElementById("close");
const navItems = document.getElementById("nav-items");

hamburger.addEventListener("click", () => {
  navItems.classList.toggle("hidden");
  hamburger.classList.add("hidden");
  close.classList.remove("hidden");
});

close.addEventListener("click", () => {
  navItems.classList.toggle("hidden");
  close.classList.add("hidden");
  hamburger.classList.remove("hidden");
});
