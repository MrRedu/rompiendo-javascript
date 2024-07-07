const alfabeto = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const inputOriginal = document.getElementById("input-original");
const resultado = document.getElementById("resultado");
const rango = document.getElementById("rango");
const cifrador = document.getElementById("cifrador");

const shifMessage = () => {
  const wordsArray = [...inputOriginal.value.toUpperCase()];

  printChar(0, wordsArray);
};

const printChar = (currentLetterIndex, wordsArray) => {
  if (wordsArray.length === currentLetterIndex) return;
  inputOriginal.value = inputOriginal.value.substring(1);

  const spanChar = document.createElement("span");
  resultado.appendChild(spanChar);
  animateChar(spanChar).then(() => {
    const charSinCodificar = wordsArray[currentLetterIndex];

    spanChar.innerHTML = alfabeto.includes(charSinCodificar)
      ? alfabeto[
          (alfabeto.indexOf(charSinCodificar) + parseInt(rango.value)) %
            alfabeto.length
        ]
      : charSinCodificar;

    printChar(currentLetterIndex + 1, wordsArray);
  });
};

const animateChar = (spanChar) => {
  let cambioDeLetra = 0;
  return new Promise((resolve) => {
    const intervalo = setInterval(() => {
      spanChar.innerHTML =
        alfabeto[Math.floor(Math.random() * alfabeto.length)];

      cambioDeLetra++;
      if (cambioDeLetra === 3) {
        clearInterval(intervalo);
        resolve();
      }
    }, 50);
  });
};

const submit = (e) => {
  e.preventDefault();
  resultado.innerHTML = "";
  shifMessage();
};

cifrador.onsubmit = submit;
