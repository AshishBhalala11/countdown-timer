let submitButton = document.getElementById("submit-button");
let date = document.getElementById("date-input");
let description = document.getElementById("event-description");


submitButton.addEventListener("click" , () => {
    sessionStorage.setItem("date" , JSON.stringify(date.value));
    sessionStorage.setItem("description" , JSON.stringify(description.value));
});