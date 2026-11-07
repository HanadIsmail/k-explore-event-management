document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const menuButton = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  if (menuButton && navLinks) {
    menuButton.addEventListener("click", () => {
      const open = navLinks.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(open));
    });
    navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    }));
  }

  const searchForm = document.getElementById("hero-search");
  const searchInput = document.getElementById("hero-search-input");
  if (searchForm && searchInput) {
    searchForm.addEventListener("submit", event => {
      event.preventDefault();
      const query = searchInput.value.trim();
      if (!query) { searchInput.focus(); return; }
      window.location.href = `events.html?search=${encodeURIComponent(query)}`;
    });
  }
});
