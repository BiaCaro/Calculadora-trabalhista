
window.alert('Bem vindo! Essa é a super calculadora trabalhista da Bianca!')
var peg = window.prompt('Está preparado?')

    if (peg.toUpperCase() !== 'SIM') {
        window.alert('Poxa, como assim?')
        location.reload()
    } else { window.alert('Então vamos lá') }



function dividir(){

    let salario = document.getElementById('tx1') // tentei usar o let fora da função, mas não funcionou, não entendi pq :/
    let cargahora = document.getElementById('tx2')
    let resultado = document.getElementById('results')

    let n1 = Number(salario.value)
    let n2 = Number(cargahora.value)
    let d = n1 / n2
    resultado.innerHTML = `Seu salário/hora é de R$ ${d} reais`
}

