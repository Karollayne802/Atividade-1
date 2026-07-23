function primoOuNao(n) {


    //verifica se o numero não é inferior a 1
    if (n <= 1) return false;


    // verifica se o numero é 2 ou 3
    if(n <= 3) return true;


    // verifica se o numero é divisivel por 2 e 3
    if (n % 2 == 0 || n % 3 == 0) return false;
    for ( let i = 5; i * i <= n; i += 6){
      if (n % i == 0 || n % ( i + 2 ) == 0) return false;
    }
    return true;
  }
 
  function enesimoPrimo(n) {
    // conta quantos primos encontrou
    let contador = 0;


    // testa os numeros
    let numero = 2;


    while (contador < n) {
        if (primoOuNao(numero)) {
            contador++;
        }
        numero++
    }
    return numero -1;
  }
  console.log(enesimoPrimo(6));
