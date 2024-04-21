function soma(a: number, b: number): number {
    return a + b;
}

function subtracao(a: number, b: number): number {
    return a - b;
}

// Teste para a função soma
function testarSoma() {
    const resultado = soma(2, 3);
    const esperado = 5;

    if (resultado === esperado) {
        console.log('Teste de soma passou!');
    } else {
        console.error('Teste de soma falhou. Resultado:', resultado, 'Esperado:', esperado);
    }
}

// Teste para a função subtração
function testarSubtracao() {
    const resultado = subtracao(5, 2);
    const esperado = 3;

    if (resultado === esperado) {
        console.log('Teste de subtração passou!');
    } else {
        console.error('Teste de subtração falhou. Resultado:', resultado, 'Esperado:', esperado);
    }
}

// Executar os testes
testarSoma();
testarSubtracao();
