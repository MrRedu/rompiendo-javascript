const formulario = document.getElementById("formulario");
const longitudInput = document.getElementById("longitudInput");
const mayusculasCheckbox = document.getElementById("mayusculasCheckbox");
const numerosCheckbox = document.getElementById("numerosCheckbox");
const generatedPassword = document.getElementById("generatedPassword");
const simbolosCheckbox = document.getElementById("simbolosCheckbox");
const btnGenerate = document.getElementById("btnGenerate");

const generatePassword = (base, length) => {
  let password = "";
  for (let x = 0; x < length; x++) {
    let random = Math.floor(Math.random() * base.length);
    password += base.charAt(random);
  }
  return password;
};

const generate = () => {
  let length = parseInt(longitudInput.value);

  let base = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "1234567890";
  const symbols = "!@#$%^&*()_+";

  if (mayusculasCheckbox.checked) {
    base = base + base.toUpperCase();
  }
  if (numerosCheckbox.checked) base += numbers;
  if (simbolosCheckbox.checked) base += symbols;

  generatedPassword.innerText = generatePassword(base, length);
};

window.addEventListener("DOMContentLoaded", () => {
  btnGenerate.addEventListener("click", () => {
    generate();
  });
});
