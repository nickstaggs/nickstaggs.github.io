function isMobile() {
    return this.windowWidth < 850;
}

// Set theme to the user's preferred color scheme
function updateTheme() {
    const colorMode = window.matchMedia("(prefers-color-scheme: dark)").matches ?
      "dark" :
      "light";
    document.querySelector("html").setAttribute("data-bs-theme", colorMode);
}

updateTheme()