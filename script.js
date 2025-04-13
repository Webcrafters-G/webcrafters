document.addEventListener("DOMContentLoaded", function () {
    loadComponent("header-container", "Header.html", setupMenu);
    loadComponent("footer-container", "Footer.html");
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