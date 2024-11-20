document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".menu-icon");
    const exitIcon = document.querySelector(".exit");
    const menuList = document.querySelector(".my-list");

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


// Vieuw images

document.addEventListener('DOMContentLoaded', () => {
    const bigImage = document.querySelectorAll('.show-image');
    const allImages = document.querySelectorAll('.vieuw-img');

    allImages.forEach(allImages => {
        allImages.addEventListener('click', function() {
            const imageSrc = this.src;
            bigImage.forEach(bigImage => {
                const imgElement = bigImage.querySelector('img');
                imgElement.src = imageSrc;
                bigImage.style.display = 'flex';
            });
        });
    });

    // Add event listener to close the show-image when the exit icon is clicked
    bigImage.forEach(bigImage => {
        const iconExit = bigImage.querySelector('.exit-icon');
        iconExit.addEventListener('click', function() {
            bigImage.style.display = 'none';
        });
    });
});
