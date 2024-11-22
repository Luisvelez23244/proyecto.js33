function calcularTotal() {
  // Obtener los valores ingresados por el usuario
  const precio = parseFloat(document.getElementById("precio").value);
  const cantidad = parseInt(document.getElementById("cantidad").value);
  const aplicarIva = document.getElementById("iva").checked;
  const resultado = document.getElementById("resultado");
  // Calcular subtotal
  let subtotal = precio * cantidad;
  // Aplicar descuento si la cantidad es mayor a 10
  let descuento = 0 
  if (cantidad > 10){
    descuento=subtotal * 0.10
  }
  // Calcular IVA si el checkbox está seleccionado
  let  iva = 0
  if (aplicarIva==true){
    iva = (subtotal - descuento) * 0.15 
  } 
  // Calcular total
  const total = subtotal - descuento + iva;
  // Mostrar resultados en el área de texto
  resultado.innerHTML = `
                Subtotal: ${subtotal.toFixed(2)} USD
                Descuento: ${descuento.toFixed(2)} USD
                IVA: ${iva.toFixed(2)} USD
                Total a pagar: ${total.toFixed(2)} USD
            `;
}

function verificarRespuesta() {
  // Obtener la opción seleccionada por el usuario
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  const resultadoDiv = document.getElementById('resultado');

  // Verificar si se seleccionó una respuesta
  if (!respuestaSeleccionada) {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">🙄 ¡Selecciona una opción antes de continuar! 🙄</p>';
    return;
  }

  // La línea correcta que tiene un error es la línea 3
  const respuestaCorrecta = '3';

  // Comprobar si la respuesta seleccionada es correcta
  if (respuestaSeleccionada.value === respuestaCorrecta) {
    resultadoDiv.innerHTML = '<p class="respuesta-correcta">🎉 ¡Correcto! La línea 3 tiene un error 🎉</p>';
  } else {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
  }
}
//ejercicio3
//Crea un algoritmo para contar el número de vocales en una frase
// Función para resetear el formulario
function resetForm36() {
  document.querySelector('input[name="respuesta"]:checked').checked = false;
  document.getElementById('resultado').innerHTML = '';
}

// Función para verificar la respuesta y mostrar retroalimentación
function verificarRespuesta2() {
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  const resultadoDiv = document.getElementById('resultado');

  if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">🙄 ¡Selecciona una opción antes de continuar! 🙄</p>';
      return;
  }

  const respuestaCorrecta = '4';
  if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">🎉 ¡Correcto! La línea 4 cuenta correctamente las vocales en una frase 🎉</p>';
  } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
  }
}


//ejercicio4
//Desarrolla un programa que determine el número máximo en un arreglo
// Función para resetear el formulario
function resetForm37() {
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  if (respuestaSeleccionada) {
      respuestaSeleccionada.checked = false;
  }
  document.getElementById('resultado').innerHTML = '';
}

// Función para verificar la respuesta y mostrar retroalimentación
function verificarRespuesta3() {
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  const resultadoDiv = document.getElementById('resultado');

  if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">🙄 ¡Selecciona una opción antes de continuar! 🙄</p>';
      return;
  }

  const respuestaCorrecta = '4';
  if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">🎉 ¡Correcto! La línea 4 determina correctamente el número máximo en un arreglo 🎉</p>';
  } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
  }
}

//ejercicio5
//Implementa una función que calcule el promedio de una lista de números.
// Función para resetear el formulario
function resetForm38() {
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  if (respuestaSeleccionada) {
      respuestaSeleccionada.checked = false;
  }
  document.getElementById('resultado').innerHTML = '';
}

// Función para verificar la respuesta y mostrar retroalimentación
function verificarRespuesta4() {
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  const resultadoDiv = document.getElementById('resultado');

  if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">🙄 ¡Selecciona una opción antes de continuar! 🙄</p>';
      return;
  }

  const respuestaCorrecta = '5';
  if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">🎉 ¡Correcto! La línea 5 calcula correctamente el promedio de una lista de números 🎉</p>';
  } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
  }
}

//ejercicionuevo
//Implementa una función que calcule el promedio de una lista de números.
// Función para resetear el formulario
function resetForm39() {
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  if (respuestaSeleccionada) {
      respuestaSeleccionada.checked = false;
  }
  document.getElementById('resultado').innerHTML = '';
}

// Función para verificar la respuesta y mostrar retroalimentación
function verificarRespuesta5() {
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  const resultadoDiv = document.getElementById('resultado');

  if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">🙄 ¡Selecciona una opción antes de continuar! 🙄</p>';
      return;
  }

  const respuestaCorrecta = '5';
  if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">🎉 ¡Correcto! La línea 5 calcula correctamente el promedio de una lista de números 🎉</p>';
  } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
  }
}

//ejercicio6
//Calcula la suma de los primeros 100 números naturales
// Función para resetear el formulario
function resetForm40() {
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  if (respuestaSeleccionada) {
      respuestaSeleccionada.checked = false;
  }
  document.getElementById('resultado').innerHTML = '';
}

// Función para verificar la respuesta y mostrar retroalimentación
function verificarRespuesta6() {
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  const resultadoDiv = document.getElementById('resultado');

  if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">🙄 ¡Selecciona una opción antes de continuar! 🙄</p>';
      return;
  }

  const respuestaCorrecta = '3';
  if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">🎉 ¡Correcto! La línea 3 calcula correctamente la suma de los primeros 100 números naturales 🎉</p>';
  } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
  }
}

//ejercicio7
// Función para resetear el formulario
function resetForm41() {
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  if (respuestaSeleccionada) {
      respuestaSeleccionada.checked = false;
  }
  document.getElementById('resultado').innerHTML = '';
}

// Función para verificar la respuesta y mostrar retroalimentación
function verificarRespuesta7() {
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  const resultadoDiv = document.getElementById('resultado');

  if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">🙄 ¡Selecciona una opción antes de continuar! 🙄</p>';
      return;
  }

  const respuestaCorrecta = '1';
  if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">🎉 ¡Correcto! La línea 1 convierte correctamente grados Celsius a Fahrenheit 🎉</p>';
  } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
  }
}

//ejercicio8
// Función para resetear el formulario
function resetForm42() {
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  if (respuestaSeleccionada) {
      respuestaSeleccionada.checked = false;
  }
  document.getElementById('resultado').innerHTML = '';
}

// Función para verificar la respuesta y mostrar retroalimentación
function verificarRespuesta8() {
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  const resultadoDiv = document.getElementById('resultado');

  if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">🙄 ¡Selecciona una opción antes de continuar! 🙄</p>';
      return;
  }

  const respuestaCorrecta = '1';
  if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">🎉 ¡Correcto! La línea 1 convierte correctamente los grados Celsius a Fahrenheit 🎉</p>';
  } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
  }
}

//ejercicio9
// Función para resetear el formulario
function resetForm43() {
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  if (respuestaSeleccionada) {
      respuestaSeleccionada.checked = false;
  }
  document.getElementById('resultado').innerHTML = '';
}

// Función para verificar la respuesta y mostrar retroalimentación
function verificarRespuesta9() {
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  const resultadoDiv = document.getElementById('resultado');

  if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">🙄 ¡Selecciona una opción antes de continuar! 🙄</p>';
      return;
  }

  const respuestaCorrecta = '4';
  if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">🎉 ¡Correcto! La línea 4 encuentra correctamente la mediana de una lista de números 🎉</p>';
  } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
  }
}

//ejercicio10
// Función para resetear el formulario
function resetForm44() {
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  if (respuestaSeleccionada) {
      respuestaSeleccionada.checked = false;
  }
  document.getElementById('resultado').innerHTML = '';
}

// Función para verificar la respuesta y mostrar retroalimentación
function verificarRespuesta10() {
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  const resultadoDiv = document.getElementById('resultado');

  if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">🙄 ¡Selecciona una opción antes de continuar! 🙄</p>';
      return;
  }

  const respuestaCorrecta = '4';
  if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">🎉 ¡Correcto! La línea 4 cuenta correctamente las consonantes en una frase 🎉</p>';
  } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
  }
}
//ejercicio80
// Función para resetear el formulario
function resetForm45() {
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  if (respuestaSeleccionada) {
      respuestaSeleccionada.checked = false;
  }
  document.getElementById('resultado').innerHTML = '';
}

// Función para verificar la respuesta y mostrar retroalimentación
function verificarRespuesta11() {
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  const resultadoDiv = document.getElementById('resultado');

  if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">🙄 ¡Selecciona una opción antes de continuar! 🙄</p>';
      return;
  }

  const respuestaCorrecta = '4';
  if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">🎉 ¡Correcto! La línea 4 cuenta correctamente las consonantes en una frase 🎉</p>';
  } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
  }
}
