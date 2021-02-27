
let pessoas = ['Murilo', 'Noemy', 'Mariana', 'Natalia', 'Flavia']

function sortear(){

    let numPessoas = pessoas.length

    // Math.round arredonda
    //let numSorteado = Math.round(Math.random() * numPessoas)

    // Math.floor arredonda para baixo, para não sair o valor 5, que n existe
    let numSorteado = Math.floor(Math.random() * numPessoas)

    // Mostra o valor no H1
    document.getElementById('display').innerHTML = pessoas[numSorteado]

}