document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".menu-btn");
  const nav = document.querySelector(".nav");
  if (button && nav) {
    button.addEventListener("click", () => {
      nav.classList.toggle("open");
      nav.style.display = nav.classList.contains("open") ? "flex" : "";
      if (nav.classList.contains("open")) {
        nav.style.position = "absolute";
        nav.style.top = "70px";
        nav.style.left = "0";
        nav.style.right = "0";
        nav.style.padding = "20px 5%";
        nav.style.background = "#07080c";
        nav.style.flexDirection = "column";
      }
    });
  }
});
