document.addEventListener("DOMContentLoaded", function () {
  loadComponent("header-container", "Header.html", setupMenu);
  loadComponent("footer-container", "Footer.html");
  startProgress();
});

function loadComponent(containerId, file, callback) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(containerId).innerHTML = data;
      if (callback) callback();
    })
    .catch(error => console.error("Error loading " + file, error));
}

function setupMenu() {
  const btn = document.getElementById("menu-btn");
  const menu = document.getElementById("nav-menu");

  if (btn && menu) {
    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  }
}

let slideIndex = 1;

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  const slides = document.querySelectorAll(".portfolio-slide");
  const dots = document.querySelectorAll(".dot");

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  slides.forEach(slide => {
    slide.style.display = "none";
  });

  dots.forEach(dot => {
    dot.classList.remove("bg-primary");
    dot.classList.add("bg-gray-400");
  });

  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].classList.remove("bg-gray-400");
  dots[slideIndex - 1].classList.add("bg-primary");
}

setInterval(() => {
  plusDivs(1);
}, 4000);

function startProgress() {
  const progresses = document.querySelectorAll(".progress");

  progresses.forEach((progress) => {
    let width = 1;
    const interval = setInterval(() => {
      if (width >= 100) {
        clearInterval(interval)
      } else {
        progress.style.width = width + "%"
        width++
      }
    }, 2);
  })
}

