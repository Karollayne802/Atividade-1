function smallestMult(n) {
  // Função para calcular o MDC
  function mdc(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  // Função para calcular o MMC
  function mmc(a, b) {
    return (a * b) / mdc(a, b);
  }

  let resultado = 1;

  for (let i = 2; i <= n; i++) {
    resultado = mmc(resultado, i);
  }

  return resultado;
}

// Testes
console.log(smallestMult(5));  
console.log(smallestMult(7));   
console.log(smallestMult(10));  
console.log(smallestMult(13)); 
console.log(smallestMult(20));  
