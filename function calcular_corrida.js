function calcular_corrida(distancia, tipo) {
  let preco
  if (tipo == 1){
    preco = distancia * 3
  }
  if(tipo == 2) {
    preco = distancia * 4.50
  }
  if(tipo == 3) {
    preco = distancia * 6
  }
  return preco
}
let valorT = 0
let corridas = 3
for (let i = 0; i < corridas; i++) {
  let km = parseFloat(prompt("digite a kilometragem rodada"))
  let tarifa = parseInt(prompt("digite o tipo de tarifa da corrida"))
  let valor = calcular_corrida(km, tarifa)
  valorT = valorT + valor
  console.log("valor da corrida =", valor.toFixed(2))
}
console.log("valor total das corridas=",valorT)