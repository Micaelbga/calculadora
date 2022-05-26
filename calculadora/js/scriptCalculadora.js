let painelInf = document.getElementById('painel-inferior');
let painelSup = document.getElementById('painel-superior');

let digitos = [];
let numeroDigitado = 0;
let numeroSalvo;
let resultado;
let operador;

function imprimirNoPainel(n,painel){
    painel.innerText = n;
}

function adicionarDigito(digito){
    verificarCampo()
    digitos.push(digito);
    numeroDigitado = digitos.join("");
    imprimirNoPainel(numeroDigitado, painelInf);
}

function verificarCampo(){
    if( Number(numeroSalvo) == Number(resultado)){
        limparMemoria()
    }
}

function limparMemoria(){
    numeroDigitado = 0;
    numeroSalvo = 1;
    digitos = [];
    operador = '';
    resultado = null;
    imprimirNoPainel('',painelSup);
    imprimirNoPainel(numeroDigitado, painelInf);
}

function deletarDigito(){
    if(resultado != null){
        imprimirNoPainel('',painelSup)
        return
    }
    else{
        if(numeroDigitado == ''){
            numeroDigitado = 0;
            imprimirNoPainel(0, painelInf)  ;  
        }
        else{
            imprimirNoPainel(numeroDigitado, painelInf);
        }
    }
    digitos.pop();
    numeroDigitado = digitos.join("");
}

function aplicarOperador(op){
    if(resultado == null| numeroSalvo == 0){
        numeroSalvo = numeroDigitado;
    }
    operador = op;
    digitos = [];
    imprimirNoPainel(numeroSalvo +' '+ operador,painelSup);
}

function resolver(){
    switch (operador) {
        case 'x':
            resultado = parseFloat(numeroSalvo) * parseFloat(numeroDigitado);
            break;
        case '+':
            resultado = parseFloat(numeroSalvo) + parseFloat(numeroDigitado);
            break;
        case '-':
            resultado = parseFloat(numeroSalvo) - parseFloat(numeroDigitado);
            break;
        case '/':
            resultado = parseFloat(numeroSalvo) / parseFloat(numeroDigitado);
            break;
        case '%':
            resultado = parseFloat(numeroSalvo) * parseFloat(numeroDigitado/100);
    }
    imprimirNoPainel(numeroSalvo+' '+operador+' '+numeroDigitado+ ' = '+resultado,painelSup);
    imprimirNoPainel(resultado,painelInf);
    numeroSalvo = resultado;
}