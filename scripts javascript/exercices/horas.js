function prever_acesso(horas) {
  let t1 = 0
  let t2 = 1
  for(let i = 1; i <= horas; i++){
    console.log("acessos na hora", i, "=", t1)
    let proximo = t1 +t2
    t1 = t2
    t2 = proximo
  }
}

let tempo = parseInt(prompt("digite a quantidade de horas"))
let resultado = prever_acesso(tempo)