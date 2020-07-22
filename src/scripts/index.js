import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import './request-data.js';

const menu = document.querySelector('#menu');
const main = document.querySelector('main');
const hero = document.querySelector('.hero');

menu.addEventListener('click', function (event) {
    drawer.classList.toggle('open');
    event.stopPropagation();
});

hero.addEventListener('click', function () {
    drawer.classList.remove('open');
});

main.addEventListener('click', function () {
    drawer.classList.remove('open');
});
