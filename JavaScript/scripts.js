// scripts.js
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll('.slider-img');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Cambia la imagen cada 2 segundos
}
// Función para mostrar/ocultar menú en móviles
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('show');
}

