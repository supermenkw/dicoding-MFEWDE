import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import './request-data';

const menu = document.querySelector('#menu');
const main = document.querySelector('main');
const hero = document.querySelector('.hero');

menu.addEventListener('click', (event) => {
  drawer.classList.toggle('open');
  event.stopPropagation();
});

hero.addEventListener('click', () => {
  drawer.classList.remove('open');
});

main.addEventListener('click', () => {
  drawer.classList.remove('open');
});
