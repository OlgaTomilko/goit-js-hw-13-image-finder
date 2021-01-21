import './styles.css';
import featchImage from './js/apiService.js';
// import cardTemplate from './templates/card-template.hbs';
import cardTemplate from './templates/card-template-bootstrap.hbs';
import messageTemplate from './templates/message-template.hbs';

const input = document.querySelector('input');
const form = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const button = document.querySelector('button');
const div = document.querySelector('.row');
const toastContainer = document.querySelector('.toast-container');

let page = 1;

form.addEventListener('submit', event => {
  event.preventDefault();
  // gallery.innerHTML = '';
  div.innerHTML = '';
  page = 1;
  fetchResult();
  button.disabled = false;
});

button.addEventListener('click', buttonHandler);

async function fetchResult() {
  // featchImage(input.value, page).then(data => formHandler(data));
  try {
    await featchImage(input.value, page)
      .then(({ hits }) => hits)
      .then(data => formHandler(data));
  } catch (error) {
    toastContainer.insertAdjacentHTML('afterbegin', messageTemplate(error));
    document.querySelector('.btn-close').addEventListener('click', () => {
      toastContainer.innerHTML = '';
    });
    setTimeout(() => {
      toastContainer.innerHTML = '';
      btnClose.removeEventListener();
    }, 10000);
  }
}

function formHandler(element) {
  // gallery.insertAdjacentHTML('beforeend', cardTemplate(element));
  div.insertAdjacentHTML('beforeend', cardTemplate(element));

  window.scrollTo({
    top: document.documentElement.offsetHeight,
    behavior: 'smooth',
  });
}

function buttonHandler() {
  page += 1;
  fetchResult();
}
