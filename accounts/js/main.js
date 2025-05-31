const form = document.querySelector("form");
const password = document.getElementById("login-password");
const passwordConfirm = document.getElementById("password-confirm");

let strong;
form.addEventListener("submit", (e) => {
    if (password.value !== passwordConfirm.value) {
        e.preventDefault();
        if (!(document.querySelector("strong"))) {
            strong = document.createElement("strong");
            let area = document.querySelector("div")
            area.appendChild(strong)
        }
        else {
            strong = document.querySelector("strong");
        }
        strong.textContent = "Your password and password-confirm is not same.";
    }
});