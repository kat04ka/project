const html = document.documentElement;

  const toggles = [
    document.getElementById("themeToggle"),
    document.getElementById("themeToggleMobile")
  ].filter(Boolean);

  const setTheme = (theme) => {
    html.setAttribute("data-bs-theme", theme);
    localStorage.setItem("theme", theme);

    toggles.forEach(btn => {
      const icon = btn.querySelector(".theme-icon");
      const text = btn.querySelector(".theme-text");

      if (icon) icon.textContent = theme === "dark" ? "☀️" : "🌙";
      if (text) text.textContent = theme === "dark" ? "Light mode" : "Dark mode";
    });
  };

  // init
  const saved = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  setTheme(saved || (prefersDark ? "dark" : "light"));

  toggles.forEach(btn => {
    btn.addEventListener("click", () => {
      const current = html.getAttribute("data-bs-theme");
      setTheme(current === "dark" ? "light" : "dark");
    });
  });