//Cursor animation
const cursor = document.querySelector(".cursor");
window.addEventListener("mousemove", function (e) {
  const posX = e.clientX;
  const posY = e.clientY;
  cursor.style.left = `${posX}px`;
  cursor.style.top = `${posY}px`;
});
//Hamburger
const hamburgerIcon = document.querySelector(".hamburger_icon");
const sideBar = document.querySelector(".mobile");
hamburgerIcon.onclick = () => {
  hamburgerIcon.classList.toggle("active");
  sideBar.classList.toggle("active");
};
