const rollers = document.querySelectorAll('[data-roller]');
console.log(rollers);

rollers.forEach((roller) => {
    const optionsString = roller.dataset.roller ?? '';
    if (!optionsString) return;
    const options = optionsString.split(', ');
    if (!options) return;

    roller.innerHTML = options[Math.floor(Math.random() * options.length)];
});
