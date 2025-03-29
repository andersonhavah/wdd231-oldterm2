const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

// Dark mode toggle
// Toggle on and off the dark mode
const modeButton = document.querySelector('#darkBtn');
const main = document.querySelector('main');

modeButton.addEventListener('click', () => { 
    main.classList.toggle('dark-mode');
});