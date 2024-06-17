//Asignacion de valores

function validarSuma() {
  let valor1 = document.getElementById("valorUsuario1").value;
  let valor2 = document.getElementById("valorUsuario2").value;
  let valor3 = document.getElementById("valorUsuario3").value;

  // Convertir los valores a números
  let num1 = Number(valor1);
  let num2 = Number(valor2);
  let num3 = Number(valor3);

  //calculo de la suma de todos los valores

  const suma = num1 + num2 + num3;

  // Mostrar el resultado
  const resultado = document.getElementById("resultado");

  if (suma <= 10) {
    resultado.innerText = `La suma de tus stickers es: ${suma} y no supera el limiter de 10 :).`;
  } else {
    resultado.innerText = `La suma de tus stickers es: ${suma} y excediste la cantidad maxima de 10 :(, Por favor no superes el limite de 10`;
  }
}
