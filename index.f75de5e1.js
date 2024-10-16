"use strict";
const logo = document.querySelector(".logo");
const messageDiv = document.createElement("div");
document.body.appendChild(messageDiv);
function handleSuccess(message) {
    messageDiv.className = "message";
    messageDiv.textContent = message;
}
function handleError(errorMessage) {
    messageDiv.className = "message error-message";
    messageDiv.textContent = errorMessage;
}
function handleClick() {
    const promise1 = new Promise((resolve)=>{
        resolve("Promise was resolved!");
    });
    promise1.then(handleSuccess).catch(handleError);
}
logo.addEventListener("click", handleClick);
const promise2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject(new Error("Promise was rejected!"));
    }, 3000);
});
promise2.then(handleSuccess).catch(handleError);

//# sourceMappingURL=index.f75de5e1.js.map
