'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => resolve('Promise was resolved!'));
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Promise was rejected!')), 3000);
});

const createMessageDiv = (message, isError = false) => {
  const div = document.createElement('div');

  div.classList.add('message');

  if (isError) {
    div.classList.add('error-message');
  }

  div.textContent = message;
  document.body.appendChild(div);
};

const handleSuccess = (message) => createMessageDiv(message);
const handleError = (error) => createMessageDiv(error.message, true);

promise1.then(handleSuccess).catch(handleError);
promise2.then(handleSuccess).catch(handleError);
