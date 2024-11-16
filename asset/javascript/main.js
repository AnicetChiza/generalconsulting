document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".menu-icon");
    const exitIcon = document.querySelector(".exit");
    const menuList = document.querySelector(".list ul");

    // Ouvrir le menu
    menuIcon.addEventListener("click", () => {
        menuList.classList.add("active");
        exitIcon.style.display = "flex";
        menuIcon.style.display = "none";
    });

    // Fermer le menu
    const closeMenu = () => {
        menuList.classList.remove("active");
        exitIcon.style.display = "none";
        menuIcon.style.display = "flex";
    };

    exitIcon.addEventListener("click", closeMenu);
});
