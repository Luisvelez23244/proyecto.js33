
//1.Imprimir números impares: Imprimir todos los números impares entre 1 y 50.
// Función para resetear el formulario
function resetForm1() {
  document.getElementById('numero').value = '';
  document.getElementById('resp').value = '';
}
// Función para imprimir números impares y dar retroalimentación
function imprimirImpares() {
  const textarea = document.getElementById('resp');
  let resultado = 'Hola 😊, Los números impares del 1 al 50 son: \n';
  for (let i = 1; i <= 50; i++) {
      if (i % 2 !== 0) {
          resultado += `${i} \n`;
      }
  }
  resultado += '\nUn número impar es aquel que no es divisible entre 2. Esto significa que cuando se divide entre 2, el residuo es 1.';
  textarea.value = resultado.trim();
}
//2.Calcular la suma de los primeros 100 números: 

// Función para resetear el formulario
function resetForm2() {
  document.getElementById('resultado').value = '';
}
// Función para calcular la suma de los primeros 100 números
function calcularSuma() {
  const textarea = document.getElementById('resultado');
  let suma = 0;
  for (let i = 1; i <= 100; i++) {
      suma += i;
  }
  let resultado = `Hola 😊, La suma de los primeros 100 números (del 1 al 100) es: ${suma}\n`;
  resultado += 'La suma de una serie de números consecutivos del 1 al n se puede calcular usando la fórmula: suma = n(n + 1) / 2.\nEn este caso, n = 100. Por lo tanto, la suma es 100(100 + 1) / 2 = 5050.';
  textarea.value = resultado.trim();
}
//3. Suma de números pares: 
// Función para resetear el formulario
function resetForm3() {
  document.getElementById('numero').value = '';
  document.getElementById('resultado').value = '';
}

// Función para calcular la suma de números pares hasta un número dado
function calcularSumaPares() {
  const textarea = document.getElementById('resultado');
  const numero = parseInt(document.getElementById('numero').value);
  let suma = 0;
  for (let i = 1; i <= numero; i++) {
      if (i % 2 === 0) {
          suma += i;
      }
  }
  let resultado = `Hola 😊, La suma de los números pares del 1 al ${numero} es: ${suma}\n`;
  resultado += 'Un número par es aquel que es divisible entre 2. Esto significa que cuando se divide entre 2, el residuo es 0. Ejemplos de números pares son 2, 4, 6, 8, etc.';
  textarea.value = resultado.trim();
}
//4.Números divisibles por 3 y 5
// Función para resetear el formulario
function resetForm4() {
  document.getElementById('resultado').value = '';
}

// Función para imprimir números divisibles por 3 y 5
function imprimirDivisibles() {
  const textarea = document.getElementById('resultado');
  let resultado = 'Hola 😊, Los números del 1 al 100 que son divisibles por 3 y 5 son:\n';
  for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
          resultado += `${i}\n`;
      }
  }
  resultado += '\nUn número es divisible por 3 y 5 si al dividirlo por estos números, el residuo es 0. Ejemplos incluyen 15, 30, 45, etc.';
  textarea.value = resultado.trim();
}
//5.	Generar la tabla de multiplicar: 
// Función para resetear el formulario
function resetForm5() {
  document.getElementById('numero').value = '';
  document.getElementById('resultado').value = '';
}

// Función para generar la tabla de multiplicar de un número dado
function generarTabla() {
  const textarea = document.getElementById('resultado');
  const numero = parseInt(document.getElementById('numero').value);
  let resultado = `Hola 😊, La tabla de multiplicar del ${numero} es:\n`;
  for (let i = 1; i <= 10; i++) {
      resultado += `${numero} x ${i} = ${numero * i}\n`;
  }
  resultado += '\nUna tabla de multiplicar muestra el resultado de multiplicar un número por otros números secuenciales.';
  textarea.value = resultado.trim();
}

//6.	Números Fibonacci
// Función para resetear el formulario
function resetForm6() {
  document.getElementById('numero').value = '';
  document.getElementById('resultado').value = '';
}

// Función para imprimir los primeros n números de la serie de Fibonacci
function imprimirFibonacci() {
  const textarea = document.getElementById('resultado');
  const n = parseInt(document.getElementById('numero').value);
  if (n <= 0) {
      textarea.value = 'Por favor, ingrese un número positivo.';
      return;
  }
  let resultado = `Hola 😊, Los primeros ${n} números de la serie de Fibonacci son:\n`;
  let fibo = [0, 1];
  for (let i = 2; i < n; i++) {
      fibo.push(fibo[i - 1] + fibo[i - 2]);
  }
  resultado += fibo.slice(0, n).join(' ') + '\n';
  resultado += 'La serie de Fibonacci es una sucesión de números en la que cada número es la suma de los dos anteriores, comenzando con 0 y 1.';
  textarea.value = resultado.trim();
}

//7.	Calcular la multiplicación de n números
// Función para resetear el formulario
function resetForm7() {
  document.getElementById('numero').value = '';
  document.getElementById('resultado').value = '';
}

// Función para calcular la multiplicación de los números del 1 al 10
function calcularMultiplicacion() {
  const textarea = document.getElementById('resultado');
  let multiplicacion = 1;
  for (let i = 1; i <= 10; i++) {
      multiplicacion *= i;
  }
  let resultado = `Hola 😊, La multiplicación de los números del 1 al 10 es: ${multiplicacion}\n`;
  resultado += 'La multiplicación de una serie de números es el resultado de multiplicar todos esos números entre sí. En este caso, multiplicamos todos los números del 1 al 10 para obtener el resultado final.';
  textarea.value = resultado.trim();
}

//8.	Factorial de un número
// Función para resetear el formulario
function resetForm8() {
  document.getElementById('numero').value = '';
  document.getElementById('resultado').value = '';
}

// Función para calcular el factorial de un número dado
function calcularFactorial() {
  const textarea = document.getElementById('resultado');
  const numero = parseInt(document.getElementById('numero').value);
  if (numero < 0) {
      textarea.value = 'Por favor, ingrese un número no negativo.';
      return;
  }
  let factorial = 1;
  let cadena = '';
  for (let i = numero; i > 0; i--) {
      factorial *= i;
      cadena += (i !== 1) ? `${i} * ` : `${i} = ${factorial}`;
  }
  let resultado = `Hola 😊, El factorial de ${numero} es: ${cadena}\n`;
  resultado += 'El factorial de un número n es el producto de todos los números enteros positivos desde 1 hasta n. En este caso, el factorial se calcula como ' + cadena;
  textarea.value = resultado.trim();
}

//9.	Imprimir múltiplos de un número
// Función para resetear el formulario
function resetForm9() {
  document.getElementById('numero').value = '';
  document.getElementById('resultado').value = '';
}

// Función para imprimir los múltiplos de un número dado entre 1 y 20
function imprimirMultiplos() {
  const textarea = document.getElementById('resultado');
  const numero = parseInt(document.getElementById('numero').value);
  if (numero <= 0) {
      textarea.value = 'Por favor, ingrese un número positivo.';
      return;
  }
  let resultado = `Hola 😊, Los múltiplos de ${numero} entre 1 y 20 son:\n`;
  for (let i = 1; i <= 20; i++) {
      if (i % numero === 0) {
          resultado += `${i}\n`;
      }
  }
  resultado += '\nUn múltiplo de un número es el producto de ese número con cualquier número entero. Ejemplos incluyen 2, 4, 6 para el número 2.';
  textarea.value = resultado.trim();
}

//10.	Presentar los divisores de un número
// Función para resetear el formulario
function resetForm10() {
  document.getElementById('numero').value = '';
  document.getElementById('resultado').value = '';
}

// Función para imprimir los divisores de un número excluyendo el propio número
function imprimirDivisores() {
  const textarea = document.getElementById('resultado');
  const numero = parseInt(document.getElementById('numero').value);
  if (numero <= 0) {
      textarea.value = 'Por favor, ingrese un número positivo.';
      return;
  }
  let resultado = `Hola 😊, Los divisores de ${numero} excluyendo el propio número son:\n`;
  for (let i = 1; i < numero; i++) {
      if (numero % i === 0) {
          resultado += `${i}\n`;
      }
  }
  resultado += '\nUn divisor de un número es un número que divide al número original exactamente sin dejar residuo. Ejemplos para el número 6 incluyen 1, 2 y 3.';
  textarea.value = resultado.trim();
}

//11.	Número perfecto
// Función para resetear el formulario
function resetForm11() {
  document.getElementById('numero').value = '';
  document.getElementById('resultado').value = '';
}

// Función para verificar si un número es perfecto
function verificarPerfecto() {
  const textarea = document.getElementById('resultado');
  const numero = parseInt(document.getElementById('numero').value);
  if (numero <= 0) {
      textarea.value = 'Por favor, ingrese un número positivo.';
      return;
  }
  let suma = 0;
  for (let i = 1; i < numero; i++) {
      if (numero % i === 0) {
          suma += i;
      }
  }
  const esPerfecto = suma === numero;
  let resultado = `Hola 😊, El número ${numero} ${esPerfecto ? 'es' : 'no es'} un número perfecto.\n`;
  resultado += 'Un número perfecto es aquel que es igual a la suma de sus divisores propios positivos (excluyendo el propio número).';
  textarea.value = resultado.trim();
}

//12.	Comprobación de números primos
// Función para resetear el formulario
function resetForm12() {
  document.getElementById('numero').value = '';
  document.getElementById('resultado').value = '';
}

// Función para verificar si un número es primo
function verificarPrimo() {
  const textarea = document.getElementById('resultado');
  const numero = parseInt(document.getElementById('numero').value);
  if (numero <= 1) {
      textarea.value = 'Por favor, ingrese un número mayor que 1.';
      return;
  }
  let esPrimo = true;
  for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
          esPrimo = false;
          break;
      }
  }
  let resultado = `Hola 😊, El número ${numero} ${esPrimo ? 'es' : 'no es'} un número primo.\n`;
  resultado += 'Un número primo es aquel que tiene exactamente dos divisores: 1 y el propio número.';
  textarea.value = resultado.trim();
}

//13.	Invertir un número
// Función para resetear el formulario
function resetForm13() {
  document.getElementById('numero').value = '';
  document.getElementById('resultado').value = '';
}

// Función para invertir los dígitos de un número
function invertirNumero() {
  const textarea = document.getElementById('resultado');
  const numero = parseInt(document.getElementById('numero').value);
  if (isNaN(numero)) {
      textarea.value = 'Por favor, ingrese un número válido.';
      return;
  }
  const numeroInvertido = numero.toString().split('').reverse().join('');
  let resultado = `Hola 😊, El número invertido de ${numero} es: ${numeroInvertido}\n`;
  resultado += 'Invertir un número significa escribir sus dígitos en orden inverso.';
  textarea.value = resultado.trim();
}

//14.	Número de dígitos de un número
// Función para resetear el formulario
function resetForm14() {
  document.getElementById('numero').value = '';
  document.getElementById('resultado').value = '';
}

// Función para contar los dígitos de un número entero positivo
function contarDigitos() {
  const textarea = document.getElementById('resultado');
  const numero = parseInt(document.getElementById('numero').value);
  if (isNaN(numero) || numero < 0) {
      textarea.value = 'Por favor, ingrese un número entero positivo.';
      return;
  }
  const numeroDigitos = numero.toString().length;
  let resultado = `Hola 😊, El número ${numero} tiene ${numeroDigitos} dígitos.\n`;
  resultado += 'Contar los dígitos de un número implica determinar cuántos caracteres numéricos componen ese número.';
  textarea.value = resultado.trim();
}

//15. Dibujo de un triángulo de asteriscos
// Función para resetear el formulario
function resetForm15() {
  document.getElementById('numero').value = '';
  document.getElementById('resultado').value = '';
}

// Función para dibujar un triángulo de asteriscos de altura n
function dibujarTriangulo() {
  const textarea = document.getElementById('resultado');
  const altura = parseInt(document.getElementById('numero').value);
  if (isNaN(altura) || altura <= 0) {
      textarea.value = 'Por favor, ingrese una altura positiva.';
      return;
  }
  let resultado = `Hola 😊, Aquí tienes un triángulo de asteriscos de altura ${altura}:\n`;
  for (let i = 1; i <= altura; i++) {
      resultado += '*'.repeat(i) + '\n';
  }
  textarea.value = resultado.trim();
}
