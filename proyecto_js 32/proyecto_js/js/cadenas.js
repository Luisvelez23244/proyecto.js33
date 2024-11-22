//1.	Ingresar un nombre y un apellido
// Función para resetear el formulario
function resetForm16() {
  document.getElementById('nombre').value = '';
  document.getElementById('apellido').value = '';
  document.getElementById('resultado').value = '';
}

// Función para concatenar nombre y apellido
function concatenarNombreApellido() {
  const textarea = document.getElementById('resultado');
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  if (nombre === '' || apellido === '') {
      textarea.value = 'Por favor, ingrese un nombre y un apellido.';
      return;
  }
  const resultado = `Hola 😊, Nombre completo concatenado: ${apellido} ${nombre}`;
  textarea.value = resultado;
}
//2.	Comparar frases: 
// Función para resetear el formulario
function resetForm17() {
  document.getElementById('frase1').value = '';
  document.getElementById('frase2').value = '';
  document.getElementById('resultado').value = '';
}
// Función para comparar dos frases
function compararFrases() {
  const textarea = document.getElementById('resultado');
  const frase1 = document.getElementById('frase1').value;
  const frase2 = document.getElementById('frase2').value;
  if (frase1 === '' || frase2 === '') {
      textarea.value = 'Por favor, ingrese ambas frases.';
      return;
  }
  let resultado;
  if (frase1 === frase2) {
      resultado = 'Las frases son iguales.';
  } else if (frase1 > frase2) {
      resultado = 'La primera frase es mayor que la segunda.';
  } else {
      resultado = 'La primera frase es menor que la segunda.';
  }
  textarea.value = `Hola 😊, Resultado de la comparación: ${resultado}\n`;
  textarea.value += 'Esta comparación se basa en el orden lexicográfico, similar al orden alfabético.';
}

//3.	Ingresar palabra
// Función para resetear el formulario
function resetForm18() {
  document.getElementById('palabra').value = '';
  document.getElementById('resultado').value = '';
}

// Función para espaciar cada carácter de una palabra
function espaciarPalabra() {
  const textarea = document.getElementById('resultado');
  const palabra = document.getElementById('palabra').value;
  if (palabra === '') {
      textarea.value = 'Por favor, ingrese una palabra.';
      return;
  }
  const palabraEspaciada = palabra.split('').join(' ');
  let resultado = `Hola 😊, La palabra con espacios es: ${palabraEspaciada}\n`;
  resultado += 'Esta operación toma cada carácter de la palabra original y lo separa por un espacio.';
  textarea.value = resultado;
}

//4.	Dada una frase
// Función para resetear el formulario
function resetForm19() {
  document.getElementById('frase').value = '';
  document.getElementById('resultado').value = '';
}

// Función para presentar cada carácter de una frase con su código ASCII
function presentarCodigoASCII() {
  const textarea = document.getElementById('resultado');
  const frase = document.getElementById('frase').value;
  if (frase === '') {
      textarea.value = 'Por favor, ingrese una frase.';
      return;
  }
  let resultado = `Hola 😊, Los códigos ASCII de la frase son:\n`;
  for (let i = 0; i < frase.length; i++) {
      resultado += `${frase[i]}: ${frase.charCodeAt(i)}\n`;
  }
  resultado += '\nEl código ASCII es un estándar de codificación de caracteres que representa texto en computadoras y otros dispositivos que usan texto.';
  textarea.value = resultado.trim();
}

//5.	Invertir una palabra
// Función para resetear el formulario
function resetForm20() {
  document.getElementById('frase').value = '';
  document.getElementById('resultado').value = '';
}

// Función para invertir una frase
function invertirFrase() {
  const textarea = document.getElementById('resultado');
  const frase = document.getElementById('frase').value;
  if (frase === '') {
      textarea.value = 'Por favor, ingrese una frase.';
      return;
  }
  const fraseInvertida = frase.split('').reverse().join('');
  let resultado = `Hola 😊, La frase invertida es: ${fraseInvertida}\n`;
  resultado += 'Invertir una frase significa escribir sus caracteres en el orden inverso.';
  textarea.value = resultado;
}

//6.	Contar vocales en una palabra
// Función para resetear el formulario
function resetForm21() {
  document.getElementById('palabra').value = '';
  document.getElementById('resultado').value = '';
}

// Función para contar las vocales de una palabra
function contarVocales() {
  const textarea = document.getElementById('resultado');
  const palabra = document.getElementById('palabra').value.toLowerCase();
  if (palabra === '') {
      textarea.value = 'Por favor, ingrese una palabra.';
      return;
  }
  const vocales = 'aeiou';
  let contador = 0;
  for (let char of palabra) {
      if (vocales.includes(char)) {
          contador++;
      }
  }
  let resultado = `Hola 😊, La palabra "${palabra}" tiene ${contador} vocales.\n`;
  resultado += 'Contar las vocales implica identificar y contar las letras a, e, i, o, u en la palabra ingresada.';
  textarea.value = resultado;
}

//7.	Contar las letras del alfabeto en una palabra
// Función para resetear el formulario
function resetForm22() {
  document.getElementById('palabra').value = '';
  document.getElementById('resultado').value = '';
}

// Función para contar cuántas letras del alfabeto tiene una palabra
function contarLetras() {
  const textarea = document.getElementById('resultado');
  const palabra = document.getElementById('palabra').value.toLowerCase();
  if (palabra === '') {
      textarea.value = 'Por favor, ingrese una palabra.';
      return;
  }
  const alfabeto = 'abcdefghijklmnopqrstuvwxyz';
  let contador = 0;
  for (let char of palabra) {
      if (alfabeto.includes(char)) {
          contador++;
      }
  }
  let resultado = `Hola 😊, La palabra "${palabra}" tiene ${contador} letras del alfabeto.\n`;
  resultado += 'Contar las letras del alfabeto implica contar solo las letras que pertenecen al conjunto a-z, excluyendo números y caracteres especiales.';
  textarea.value = resultado;
}

//8.	Contar dígitos de una frase
// Función para resetear el formulario
function resetForm23() {
  document.getElementById('frase').value = '';
  document.getElementById('resultado').value = '';
}

// Función para contar los dígitos en una frase
function contarDigitosFrase() {
  const textarea = document.getElementById('resultado');
  const frase = document.getElementById('frase').value;
  if (frase === '') {
      textarea.value = 'Por favor, ingrese una frase.';
      return;
  }
  const digitos = '0123456789';
  let contador = 0;
  for (let char of frase) {
      if (digitos.includes(char)) {
          contador++;
      }
  }
  let resultado = `Hola 😊, La frase "${frase}" tiene ${contador} dígitos.\n`;
  resultado += 'Contar los dígitos en una frase implica identificar y contar los caracteres que son números del 0 al 9.';
  textarea.value = resultado;
}

//9.	Contar los signos de puntuación en una palabra
// Función para resetear el formulario
function resetForm24() {
  document.getElementById('palabra').value = '';
  document.getElementById('resultado').value = '';
}

// Función para contar cuántos signos de puntuación tiene una palabra
function contarSignosPuntuacion() {
  const textarea = document.getElementById('resultado');
  const palabra = document.getElementById('palabra').value;
  if (palabra === '') {
      textarea.value = 'Por favor, ingrese una palabra.';
      return;
  }
  const signosPuntuacion = '.,;:!?¡¿\'"()-';
  let contador = 0;
  for (let char of palabra) {
      if (signosPuntuacion.includes(char)) {
          contador++;
      }
  }
  let resultado = `Hola 😊, La palabra "${palabra}" tiene ${contador} signos de puntuación.\n`;
  resultado += 'Contar los signos de puntuación implica identificar y contar caracteres como puntos, comas, signos de exclamación, etc.';
  textarea.value = resultado;
}

//10.	Contar palabras en una frase
// Función para resetear el formulario
function resetForm25() {
  document.getElementById('frase').value = '';
  document.getElementById('resultado').value = '';
}

// Función para contar cuántas palabras tiene una frase
function contarPalabras() {
  const textarea = document.getElementById('resultado');
  const frase = document.getElementById('frase').value;
  if (frase === '') {
      textarea.value = 'Por favor, ingrese una frase.';
      return;
  }
  const palabras = frase.trim().split(/\s+/);
  const contador = palabras.length;
  let resultado = `Hola 😊, La frase "${frase}" tiene ${contador} palabras.\n`;
  resultado += 'Contar las palabras en una frase implica separar la frase por espacios y contar cada grupo de caracteres como una palabra.';
  textarea.value = resultado;
}
