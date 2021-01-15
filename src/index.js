import './styles.css';
import featchImage from './js/apiService.js';
import cardTemplate from './templates/card-template.hbs';

const input = document.querySelector('input');
const form = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const button = document.querySelector('button');

let page = 1;

form.addEventListener('submit', event => {
  event.preventDefault();
  gallery.innerHTML = '';
  featchImage(input.value, page).then(data => formHandler(data));
});

button.addEventListener('click', buttonHandler);

function formHandler(element) {
  gallery.insertAdjacentHTML('beforeend', cardTemplate(element));
}

function buttonHandler() {
  page += 1;
  featchImage(input.value, page).then(data => formHandler(data));
  window.scrollTo({
    top: 1000,
    behavior: 'smooth',
  });
}
