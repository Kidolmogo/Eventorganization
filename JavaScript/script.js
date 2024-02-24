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
// Whatwedo
let count = 0;
//if add to cart btn clicked
$(".cart-btn").on("click", function () {
  let cart = $(".cart-nav");
  // find the img of that card which button is clicked by user
  let imgtodrag = $(this)
    .parent(".buttons")
    .parent(".content")
    .parent(".card")
    .find("img")
    .eq(0);
  if (imgtodrag) {
    // duplicate the img
    var imgclone = imgtodrag
      .clone()
      .offset({
        top: imgtodrag.offset().top,
        left: imgtodrag.offset().left,
      })
      .css({
        opacity: "0.8",
        position: "absolute",
        height: "150px",
        width: "150px",
        "z-index": "100",
      })
      .appendTo($("body"))
      .animate(
        {
          top: cart.offset().top + 20,
          left: cart.offset().left + 30,
          width: 75,
          height: 75,
        },
        1000,
        "easeInOutExpo"
      );
    setTimeout(function () {
      count++;
      $(".cart-nav .item-count").text(count);
    }, 1500);
    imgclone.animate(
      {
        width: 0,
        height: 0,
      },
      function () {
        $(this).detach();
      }
    );
  }
});
