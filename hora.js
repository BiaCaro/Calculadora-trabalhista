// var salario = document.getElementById('tx1')
// var cargahora = document.getElementById('tx2')
// var resultado = document.getElementById('result')

window.alert('Bem vindo! Essa é a super calculadora trabalhista da Bianca! ')





function dividir(){
    var salario = document.getElementById('tx1')
    var cargahora = document.getElementById('tx2')
    var resultado = document.getElementById('results')

    var n1 = Number(salario.value)
    var n2 = Number(cargahora.value)
    var d = n1 / n2
    resultado.innerHTML = `Seu salário/hora é de R$ ${d} reais`
}