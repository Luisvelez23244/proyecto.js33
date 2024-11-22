//1.	Dado un arreglo de 10 números 
// Función para resetear el formulario
function resetForm26() {
  document.getElementById('resultado').value = '';
}

// Función para presentar los números de un arreglo generado aleatoriamente
function presentarNumeros() {
  const textarea = document.getElementById('resultado');
  let arreglo = [];
  for (let i = 0; i < 10; i++) {
      arreglo.push(Math.floor(Math.random() * 100)); // Genera números aleatorios entre 0 y 99
  }
  let resultado = `Hola 😊, Los números del arreglo son:\n${arreglo.join('\n')}\n`;
  resultado += 'Este arreglo contiene 10 números generados aleatoriamente.';
  textarea.value = resultado.trim();
}

//2.	Promedio de calificaciones
// Función para resetear el formulario
function resetForm27() {
  document.getElementById('calificacion1').value = '';
  document.getElementById('calificacion2').value = '';
  document.getElementById('calificacion3').value = '';
  document.getElementById('calificacion4').value = '';
  document.getElementById('calificacion5').value = '';
  document.getElementById('resultado').value = '';
}

// Función para calcular el promedio de cinco calificaciones
function calcularPromedio() {
  const cal1 = parseFloat(document.getElementById('calificacion1').value);
  const cal2 = parseFloat(document.getElementById('calificacion2').value);
  const cal3 = parseFloat(document.getElementById('calificacion3').value);
  const cal4 = parseFloat(document.getElementById('calificacion4').value);
  const cal5 = parseFloat(document.getElementById('calificacion5').value);
  if (isNaN(cal1) || isNaN(cal2) || isNaN(cal3) || isNaN(cal4) || isNaN(cal5)) {
      document.getElementById('resultado').value = 'Por favor, ingrese todas las calificaciones correctamente.';
      return;
  }
  const promedio = (cal1 + cal2 + cal3 + cal4 + cal5) / 5;
  const resultado = `Hola 😊, El promedio de las calificaciones es: ${promedio.toFixed(2)}\n`;
  resultado += 'El promedio se calcula sumando todas las calificaciones y dividiendo el total entre el número de calificaciones.';
  document.getElementById('resultado').value = resultado;
}

//3.	Encontrar el máximo de una lista de números
// Función para resetear el formulario
function resetForm28() {
  document.getElementById('numeros').value = '';
  document.getElementById('resultado').value = '';
}

// Función para encontrar el número más grande en una lista de números
function encontrarMaximo() {
  const textarea = document.getElementById('resultado');
  const numeros = document.getElementById('numeros').value.split(',').map(Number);
  if (numeros.length === 0 || numeros.some(isNaN)) {
      textarea.value = 'Por favor, ingrese una lista de números separados por comas correctamente.';
      return;
  }
  const maximo = Math.max(...numeros);
  let resultado = `Hola 😊, El número más grande en la lista es: ${maximo}\n`;
  resultado += 'El máximo se encuentra recorriendo todos los números y seleccionando el mayor de ellos.';
  textarea.value = resultado;
}

//4.	Encontrar el promedio de números mayores a un valor dado
// Función para resetear el formulario
function resetForm29() {
  document.getElementById('numeros').value = '';
  document.getElementById('valor').value = '';
  document.getElementById('resultado').value = '';
}

// Función para calcular el promedio de los números mayores a un valor límite en un arreglo
function calcularPromedioMayores() {
  const textarea = document.getElementById('resultado');
  const numeros = document.getElementById('numeros').value.split(',').map(Number);
  const valorLimite = parseFloat(document.getElementById('valor').value);
  if (numeros.length === 0 || numeros.some(isNaN) || isNaN(valorLimite)) {
      textarea.value = 'Por favor, ingrese una lista de números y un valor límite correctamente.';
      return;
  }
  const mayores = numeros.filter(num => num > valorLimite);
  if (mayores.length === 0) {
      textarea.value = 'No hay números mayores al valor límite ingresado.';
      return;
  }
  const promedio = mayores.reduce((acc, num) => acc + num, 0) / mayores.length;
  let resultado = `Hola 😊, El promedio de los números mayores a ${valorLimite} es: ${promedio.toFixed(2)}\n`;
  resultado += 'Este promedio se calcula filtrando los números mayores al valor límite, sumándolos y dividiendo el total entre la cantidad de números mayores.';
  textarea.value = resultado;
}

//5.	Encontrar el mínimo de un arreglo de números
// Función para resetear el formulario
function resetForm30() {
  document.getElementById('numeros').value = '';
  document.getElementById('resultado').value = '';
}

// Función para encontrar el número más pequeño en un arreglo de números
function encontrarMinimo() {
  const textarea = document.getElementById('resultado');
  const numeros = document.getElementById('numeros').value.split(',').map(Number);
  if (numeros.length === 0 || numeros.some(isNaN)) {
      textarea.value = 'Por favor, ingrese una lista de números separados por comas correctamente.';
      return;
  }
  const minimo = Math.min(...numeros);
  let resultado = `Hola 😊, El número más pequeño en la lista es: ${minimo}\n`;
  resultado += 'El mínimo se encuentra recorriendo todos los números y seleccionando el menor de ellos.';
  textarea.value = resultado;
}

//6.	Promedio de números pares de un arreglo
// Función para resetear el formulario
function resetForm31() {
  document.getElementById('numeros').value = '';
  document.getElementById('resultado').value = '';
}

// Función para calcular el promedio de los números pares en un arreglo de 10 números
function calcularPromedioPares() {
  const textarea = document.getElementById('resultado');
  const numeros = document.getElementById('numeros').value.split(',').map(Number);
  if (numeros.length !== 10 || numeros.some(isNaN)) {
      textarea.value = 'Por favor, ingrese una lista de 10 números separados por comas correctamente.';
      return;
  }
  const pares = numeros.filter(num => num % 2 === 0);
  if (pares.length === 0) {
      textarea.value = 'No hay números pares en la lista ingresada.';
      return;
  }
  const promedio = pares.reduce((acc, num) => acc + num, 0) / pares.length;
  let resultado = `Hola 😊, El promedio de los números pares es: ${promedio.toFixed(2)}\n`;
  resultado += 'Este promedio se calcula filtrando los números pares, sumándolos y dividiendo el total entre la cantidad de números pares.';
  textarea.value = resultado;
}

//7.	Arreglo suma dígitos
// Función para resetear el formulario
function resetForm32() {
  document.getElementById('numero').value = '';
  document.getElementById('resultado').value = '';
}

// Función para almacenar los dígitos de un número en un arreglo y luego calcular la suma de los dígitos
function sumarDigitos() {
  const textarea = document.getElementById('resultado');
  const numero = document.getElementById('numero').value;
  if (numero === '') {
      textarea.value = 'Por favor, ingrese un número.';
      return;
  }
  const digitos = numero.split('').map(Number);
  const suma = digitos.reduce((acc, num) => acc + num, 0);
  let resultado = `Hola 😊, La suma de los dígitos de ${numero} es: ${suma}\n`;
  resultado += 'Este cálculo almacena cada dígito del número en un arreglo y luego suma todos los dígitos.';
  textarea.value = resultado;
}

//8.	Contar y sumar números positivos y negativos
// Función para resetear el formulario
function resetForm33() {
  document.getElementById('numeros').value = '';
  document.getElementById('resultado').value = '';
}

// Función para contar y sumar números positivos y negativos en un arreglo
function contarSumarPositivosNegativos() {
  const textarea = document.getElementById('resultado');
  const numeros = document.getElementById('numeros').value.split(',').map(Number);
  if (numeros.length !== 10 || numeros.some(isNaN)) {
      textarea.value = 'Por favor, ingrese una lista de 10 números separados por comas correctamente.';
      return;
  }
  let positivos = 0, negativos = 0, sumaPositivos = 0, sumaNegativos = 0;
  for (let num of numeros) {
      if (num > 0) {
          positivos++;
          sumaPositivos += num;
      } else if (num < 0) {
          negativos++;
          sumaNegativos += num;
      }
  }
  let resultado = `Hola 😊, De los 10 números ingresados:\n- Positivos: ${positivos}, Suma de positivos: ${sumaPositivos}\n- Negativos: ${negativos}, Suma de negativos: ${sumaNegativos}\n`;
  resultado += 'Este ejercicio cuenta y suma los números positivos y negativos de la lista ingresada.';
  textarea.value = resultado.trim();
}

//9.	Dado un arreglo 
// Función para resetear el formulario
function resetForm34() {
  document.getElementById('numeros').value = '';
  document.getElementById('resultado').value = '';
}

// Función para crear un arreglo con el cuadrado de cada elemento del primer arreglo
function crearArregloCuadrado() {
  const textarea = document.getElementById('resultado');
  const numeros = document.getElementById('numeros').value.split(',').map(Number);
  if (numeros.some(isNaN)) {
      textarea.value = 'Por favor, ingrese una lista de números separados por comas correctamente.';
      return;
  }
  const cuadrados = numeros.map(num => num * num);
  let resultado = `Hola 😊, El arreglo de los cuadrados es: [${cuadrados.join(', ')}]\n`;
  resultado += 'Este arreglo contiene el cuadrado de cada elemento del primer arreglo.';
  textarea.value = resultado.trim();
}

//10.	Dado dos arreglos 
// Función para resetear el formulario
function resetForm35() {
  document.getElementById('arreglo1').value = '';
  document.getElementById('arreglo2').value = '';
  document.getElementById('resultado').value = '';
}

// Función para crear un arreglo con la suma de cada elemento de dos arreglos en la misma posición
function sumarArreglos() {
  const textarea = document.getElementById('resultado');
  const arreglo1 = document.getElementById('arreglo1').value.split(',').map(Number);
  const arreglo2 = document.getElementById('arreglo2').value.split(',').map(Number);
  if (arreglo1.length !== arreglo2.length || arreglo1.some(isNaN) || arreglo2.some(isNaN)) {
      textarea.value = 'Por favor, ingrese dos arreglos de igual longitud separados por comas correctamente.';
      return;
  }
  const sumaArreglos = arreglo1.map((num, idx) => num + arreglo2[idx]);
  let resultado = `Hola 😊, El arreglo de la suma de los elementos es: [${sumaArreglos.join(', ')}]\n`;
  resultado += 'Este arreglo contiene la suma de cada elemento de los dos arreglos en la misma posición.';
  textarea.value = resultado.trim();
}
