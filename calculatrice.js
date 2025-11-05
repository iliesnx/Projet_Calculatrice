const display = document.getElementById('display');
const buttons = document.querySelectorAll('[data-number]');
let currentDisplay = '0';

// Ajouter un écouteur d'événement à chaque bouton numérique
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const number = button.getAttribute('data-number');
        
        // Si 0, remplacer par le nouveau chiffre
        // Sinon, mettre le chiffre à la suite
        if (currentDisplay === '0') {
            currentDisplay = number;
        } else {
            currentDisplay += number;
        }

        // MAJ de l'affichage
        display.innerHTML = currentDisplay;
    });
});
