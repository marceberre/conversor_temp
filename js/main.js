// Capturo todo lo que ingrese el usuario
const txtdato = document.getElementById("dato");
const txtescalaOriginal = document.getElementById("e1");
const txtescalafinal = document.getElementById("e2");
const btn_convertir = document.getElementById("btn_convertir");
const salida = document.getElementById("salida");

//
const ce = document.getElementById("ce");

// Escucho el click del botón
btn_convertir.addEventListener("click", calcular);
btn_limpiar.addEventListener("click", limpiar);

function calcular() {
  const dato = parseFloat(txtdato.value);
  const escOrig = txtescalaOriginal.value;
  const escFinal = txtescalafinal.value;
  if (!isNaN(dato)) {
    let resultado;
	salida.style = "color:black";
    if (escOrig == "ce" && escFinal == "ke") {
      resultado = dato + 273.15;
      salida.innerText = resultado.toFixed(2) + " ° Kelvin";
    }
    if (escOrig == "ce" && escFinal == "fa") {
      resultado = (dato * 9) / 5 + 32;
      salida.innerText = resultado.toFixed(2) + " ° Fahrenheit";
    }
    if (escOrig == "ke" && escFinal == "ce") {
      resultado = dato - 273.15;
      salida.innerText = resultado.toFixed(2) + " ° Celsius";
    }
    if (escOrig == "ke" && escFinal == "fa") {
      resultado = ((dato - 273.15) * 9) / 5 + 32;
      salida.innerText = resultado.toFixed(2) + " ° Fahrenheit";
    }
    if (escOrig == "fa" && escFinal == "ce") {
      resultado = ((dato - 32) * 5) / 9;
      salida.innerText = resultado.toFixed(2) + " ° Celsius";
    }
    if (escOrig == "fa" && escFinal == "ke") {
      resultado = ((dato - 32) * 5) / 9 + 273.15;
      salida.innerText = resultado.toFixed(2) + " ° Kelvin";
    }
  } else {
    salida.innerText = "Ingresar números";
    salida.style = "color:red";
  }
}

function limpiar() {
	window.location.reload()
}

function anularOtros() {
  if (e1 == "ce"){
	getComputedStyle.display = False
  }
}
