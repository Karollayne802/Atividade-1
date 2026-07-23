function latticePaths(gridSize) {


    // Cria uma matriz vazia
    let matriz = [];


    // Percorre todas as linhas da matriz
    for (let i = 0; i <= gridSize; i++) {


        // Cria uma linha vazia
        matriz[i] = [];


        // Percorre todas as colunas da linha atual
        for (let j = 0; j <= gridSize; j++) {
            // Inicializa cada posição com 0
            matriz[i][j] = 0n;
        }
    }


    // Preenche a primeira linha e a primeira coluna com 1
    for (let i = 0; i <= gridSize; i++) {
        matriz[0][i] = 1n;
        matriz[i][0] = 1n;
    }


    // Calcula o restante da matriz
    for (let i = 1; i <= gridSize; i++) {
        for (let j = 1; j <= gridSize; j++) {
            matriz[i][j] = matriz[i - 1][j] + matriz[i][j - 1];
        }
    }


    return matriz[gridSize][gridSize];
}
