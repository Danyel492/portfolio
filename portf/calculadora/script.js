function calcular(tipo, valor) {

    let valorVisor = document.getElementById('resultado')

    if (tipo === "acao") {

        if (valor === "/" || valor === "*" || valor === "-" || valor === "+") {
            valorVisor.value += valor
            console.log(valor)
        } else if (valor === '.') {
            valorVisor.value += valor
            console.log(valor)
        } else {
            valorVisor.value = eval(valorVisor.value)
            console.log(`O resultado foi: ${valorVisor.value}`)
        }
    }else if (tipo === "num") {

        valorVisor.value += valor
        console.log(valor)
    }


}