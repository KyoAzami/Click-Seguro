(function() {
    try {
        const appState = JSON.parse(localStorage.getItem('appState')) || {};

        if (appState.isMenuOpen) {
            document.documentElement.classList.add('menu-active');
        }

    } catch (e) {
        console.error("Error al inicializar estado", e);
    }
}) ();