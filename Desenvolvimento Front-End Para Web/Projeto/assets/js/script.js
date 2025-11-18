document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
        // Alterna a classe 'active' no menu para expandir/recolher
        navMenu.classList.toggle("active");
        
        // Alterna a classe 'active' no botão para animar o ícone (hambúrguer -> X)
        hamburger.classList.toggle("active");
    });
});