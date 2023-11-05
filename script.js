let navbar = document.querySelector('.navbar'); 

//slide del navbar responsive
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');    
}

const navLinks = document.querySelectorAll('.navbar a');

// Función para quitar la clase .active
function closeNavbar() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.remove('active');
}

// Agrega un controlador de eventos a cada enlace
navLinks.forEach(link => {
    link.addEventListener('click', closeNavbar);
});