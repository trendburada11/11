// LOADER
document.addEventListener("DOMContentLoaded", function () {
  var loaderContainer = document.querySelector(".loader-container");
  
  setTimeout(function () {
    fadeOut(loaderContainer);
  }, 2500); // 8 saniye sonra loader-container'ı gizle

  function fadeOut(element) {
    var opacity = 1;
    var timer = setInterval(function () {
      if (opacity <= 0.1) {
        clearInterval(timer);
        element.style.display = "none";
      }
      element.style.opacity = opacity;
      opacity -= 0.1;
    }, 100); // 100 milisaniyede bir güncelle
  }
});

// L