document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio website loaded successfully!");

    const backToTopButton = document.getElementById("backToTop");

    if (backToTopButton) {
        backToTopButton.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});/* ===== Theme Toggle ===== */

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {
            themeToggle.textContent = "🌙 Dark Mode";
        } else {
            themeToggle.textContent = "☀️ Light Mode";
        }
    });
}