
const AppState = {
    // Lee el estado desde localStorage o devuelve un objeto por defecto
    get: function() {
        return JSON.parse(localStorage.getItem('appState')) || { isMenuOpen: false };
    },
    // Guarda el estado completo en localStorage
    save: function(state) {
        localStorage.setItem('appState', JSON.stringify(state));
    }
};

// 2. Lógica del evento
const menuToggle = document.getElementById('menu-toggle');

menuToggle.addEventListener('click', function() {
    // Obtenemos el estado actual
    const currentState = AppState.get();

    // Calculamos el nuevo estado
    const newState = {
        ...currentState, // Copia todas las propiedades existentes
        isMenuOpen: !currentState.isMenuOpen // Invierte solo la del menú
    };

    // Actualizamos la clase en el DOM
    document.documentElement.classList.toggle('menu-active', newState.isMenuOpen);
    
    // Guardamos el nuevo objeto de estado completo
    AppState.save(newState);
});