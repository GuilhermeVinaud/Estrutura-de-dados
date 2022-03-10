let nums = [77,44,22,33,99,55,88,0,66,11]

let comparacoes , trocas
function bubblesort(vetor){
 
    let trocou
    comparacoes = 0
    trocas = 0
    do{
        
        trocou = false
        for(i=0; i < vetor.length -1; i++){
            comparacoes++
            if(vetor[i]> vetor[i + 1] ){
                [vetor[i],vetor[i + 1] ] = [vetor[i + 1], vetor[i] ]
                    trocou =  true 
                    trocas++
            }
            
        }
    }while(trocou)
    bubblesor(nums)
    console.log(num)
    console.log({comparacoes, trocas})

    
}