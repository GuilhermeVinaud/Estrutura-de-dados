const objNomes = require('./data/vetor-obj-nomes.js')

function buscaSequencial(vetor,fnComp){
    for(let i=0; i < vetor.length; i++){
        if(fnComp(vetor[i])) return i
    }
return -1
}

function comparaNome(obj){
    return obj.first_name === 'ALEXANDRE'
}

function comparaNome2(obj){
    return obj.first_name === 'GUILHERME'
}
//import {objNomes} from './data/vetor-obj-nomes.js'


console.log('Posição de ALEXANDRE' , buscaSequencial(objNomes,comparaNome))
console.log('Posição de GUILHERME' , buscaSequencial(objNomes,comparaNome2))
