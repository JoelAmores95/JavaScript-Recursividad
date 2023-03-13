// De forma secuencial

function factorial(num) {
  let resultado = num;
  for (let i = num - 1; i > 1; i--) {
    resultado *= i;
  }
  return resultado;
}

console.log(factorial(5));

// De forma recursiva
function factorial_recursiva(num) {
    
    // Condicion de salida
    if( num === 1) return 1
    return num * factorial_recursiva(num -1)
}

console.log(factorial_recursiva(5))