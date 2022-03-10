

function buscaSequencial (vetor, valorBusca){
    
    for(let i=0 ; i < vetor.length; i++){
        if(vetor[i] === valorBusca) return i //encontrou valorBusca
          
    }
    return -1 // valor não existe
    
}

//const frutas = ['laranja','maca','uva','pera' ,'jabuticaba', 'limão', 'mamão']
//console.log('Posição de uva', buscaSequencial(frutas, 'uva'))
//console.log('Posição de mamão', buscaSequencial(frutas, 'mamão'))
//console.log('Posicao de abacate', buscaSequencial(frutas,'abacate'))


const nomes = require ('./data/vetor-nomes.js')
console.log('Posição de GUILHERME', buscaSequencial(nomes,'GUILHERME'))

