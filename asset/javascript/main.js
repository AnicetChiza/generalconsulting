document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".menu");
    const exitIcon = document.querySelector(".exit");
    const overlay = document.querySelector(".overlay");
    const menuList = document.querySelector(".header-list ul");

    // Ouvrir le menu
    menuIcon.addEventListener("click", () => {
        menuList.classList.add("active");
        overlay.classList.add("active");
        exitIcon.style.display = "flex";
    });

    // Fermer le menu
    const closeMenu = () => {
        menuList.classList.remove("active");
        overlay.classList.remove("active");
        exitIcon.style.display = "none";
    };

    exitIcon.addEventListener("click", closeMenu);
    overlay.addEventListener("click", closeMenu);
});
