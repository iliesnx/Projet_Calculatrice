let display = document.querySelector('.display');
let operatorButtons = document.querySelectorAll('.operator');

const isOperator = (ch) => ['+', '-', '*', '/'].includes(ch);

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        const op = button.getAttribute('data-operator');

        const current = String(display.innerHTML);
        const trimmed = current.trim();

        if (trimmed.length === 0 || trimmed === '0') {
            return;
        }

        const lastChar = trimmed.slice(-1);

        if (isOperator(lastChar)) {
            display.innerHTML = trimmed.slice(0, -1) + op;
        } else {
            display.innerHTML = trimmed + op;
        }
    });
});