import sumar from "./sumador";
import multiplicar from "./multiplicador";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>Suma: " + sumar(firstNumber, secondNumber) + "</p>";
});

const primerNumeroMultiplicar = document.querySelector("#primer-numero-multiplicar");
const segundoNumeroMultiplicar = document.querySelector("#segundo-numero-multiplicar");
const formMultiplicar = document.querySelector("#multiplicar-form");
const divMultiplicar = document.querySelector("#resultado-multiplicar-div");

formMultiplicar.addEventListener("submit", (event) => {
  event.preventDefault();

  const primerNumero = Number.parseInt(primerNumeroMultiplicar.value);
  const segundoNumero = Number.parseInt(segundoNumeroMultiplicar.value);

  divMultiplicar.innerHTML = "<p>Multiplicación: " + multiplicar(primerNumero, segundoNumero) + "</p>";
});
