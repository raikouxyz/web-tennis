document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li a");
    
    navLinks.forEach(link => {
        link.addEventListener("mouseover", function () {
            this.style.color = "lightblue";
        });
        link.addEventListener("mouseout", function () {
            this.style.color = "white";
        });
    });
});
