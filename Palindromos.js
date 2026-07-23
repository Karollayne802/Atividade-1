//Calcula a soma de todos os numeros menores que n
function doubleBasePalindromes(n) {
    // Armazena a soma dos numeros encontrados
    let soma = 0;


    // percorre por todos os numeros menores que n
    for (let i = 1; i < n; i++) {


        // Transforma o número para texto
        let decimal = i.toString();


        if (ehPalindromo(decimal)) {


            //trnsforma o numero para binario
            let binario = i.toString(2);


            // Verifica se o binário também é um palíndromo
            if (ehPalindromo(binario)) {


                // Soma o número encontrado
                soma += i;


            }


        }


    }
    return soma;
}


// verifica se é um textopalindromo
function ehPalindromo(texto) {
    // inverte em texto
    let invertido = texto.split("").reverse().join("");
    return texto === invertido;
}
