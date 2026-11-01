// Update the footer year automatically.
document.getElementById("year").textContent = new Date().getFullYear();

// Close the mobile navigation after a menu link is selected.
document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const menu = document.querySelector(".navbar-collapse");
    if (menu.classList.contains("show")) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});
