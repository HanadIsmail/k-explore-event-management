// Dark/light mode preference is stored in localStorage.
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("theme-toggle");
  const savedTheme = localStorage.getItem("k-explore-theme") || "light";
  document.documentElement.dataset.theme = savedTheme;
  updateThemeButton(button, savedTheme);

  if (button) {
    button.addEventListener("click", () => {
      const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = nextTheme;
      localStorage.setItem("k-explore-theme", nextTheme);
      updateThemeButton(button, nextTheme);
    });
  }
});
function updateThemeButton(button, theme) {
  if (!button) return;
  button.textContent = theme === "dark" ? "☀" : "☾";
  button.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
}
