function converter_para_binario(decimal) {
    if (decimal === 0) return "0";
    
    let resultado_binario = ""; 
    
    while (decimal > 0) {
        let resto = decimal % 2; 
        resultado_binario = resto + resultado_binario;
        decimal = Math.floor(decimal / 2); 
    }
    
    return resultado_binario;
}

let numero = parseInt(prompt("Digite um número decimal para converter em binário:"));
let binario = converter_para_binario(numero);

console.log("O número", numero, "em binário é =", binario);