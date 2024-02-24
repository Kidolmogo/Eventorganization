/* MOBILE NAVIGATION ACTIVATION */
const body = document.querySelector("body");
const mobileSideBarIcon = document.querySelector("#icon");
const mobile = document.querySelector("#mobile");

mobileSideBarIcon.onclick = () => {
  mobileSideBarIcon.querySelector(".icon").classList.toggle("active");
  mobile.classList.toggle("active");
  body.classList.toggle("covered");
};

window.scrollTo(0, 0);
// Loader
