let valores = [2, 5, 9, 3, 7, 0, 4]
valores.sort()
console.log(`O vetor tem ${valores.length} elementos`)
// console.log(valores)

// for(let pos = 0; pos < valores.length; pos++){
//     console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
// }

for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}