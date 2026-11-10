let salas = 5
let abaixo= 0
let impares = 0
let multiplos3 = 1

for (let i = 0; i < salas; i++) {
  let temperatura = parseInt(prompt("digite a temperatura da sala"))
  if (temperatura < 0) {
    abaixo++
  }
  if (temperatura % 2 !== 0) {
    impares = impares + temperatura
  }
  if (temperatura % 3 === 0) {
    multiplos3 = multiplos3 * temperatura
  }
}
console.log("Quantidade de temperaturas negativas =", abaixo, "Soma dos ímpares =", impares, "Multiplicação dos múltiplos de 3 =", multiplos3)