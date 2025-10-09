// Detecta el scroll y muestra/oculta el header según la dirección
let lastScrollTop = 0; // Guarda la posición del último scroll
const header = document.querySelector("header"); // Selecciona el header
const mobileBreakpoint = 1024; // Máximo ancho para activar el efecto (tablets y móviles)

window.addEventListener("scroll", () => {
  // Solo aplicar si el ancho de pantalla es de teléfono/tablet
    if (window.innerWidth <= mobileBreakpoint) {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // Si hace scroll hacia abajo → ocultar
        if (currentScroll > lastScrollTop && currentScroll > 50) {
            header.style.transform = "translateY(-100%)";
            header.style.transition = "transform 0.3s ease";
        }
    // Si hace scroll hacia arriba → mostrar
        else {
            header.style.transform = "translateY(0)";
            header.style.transition = "transform 0.3s ease";
        }

    // Actualiza la posición del scroll
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    } else {
    // Si es escritorio, mantener el header visible
        header.style.transform = "translateY(0)";
    }
});
