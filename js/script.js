// marca o item do menu correspondente à página atual
document.addEventListener("DOMContentLoaded", function () {
  var pagina = window.location.pathname.split("/").pop() || "index.html";
  var links = document.querySelectorAll("nav.menu a");
  for (var i = 0; i < links.length; i++) {
    if (links[i].getAttribute("href") === pagina) {
      links[i].className = "atual";
    }
  }
});
