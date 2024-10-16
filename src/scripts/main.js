'use strict';

const logo = document.querySelector('.logo');

function handleClick() {
  const promise1 = new Promise((resolve) => {
    resolve('Promise was resolved!');
  });

  promise1.then(handleSuccess).catch(handleError);
}

function createRejectingPromise(message) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error(message));
    }, 3000);
  });
}

logo.addEventListener('click', handleClick);

const promise2 = createRejectingPromise('Promise was rejected!');
const messageDiv = document.createElement('div');

document.body.appendChild(messageDiv);

const handleSuccess = (message) => {
  messageDiv.className = 'message';
  messageDiv.textContent = message;
};

const handleError = (errorMessage) => {
  messageDiv.className = 'message error-message';
  messageDiv.textContent = errorMessage;
};

promise2.then(handleSuccess).catch((error) => handleError(error.message));
