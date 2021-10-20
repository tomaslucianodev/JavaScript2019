function PromesaA(){
    return new Promise( (resolve, reject) =>{
        setTimeout(resolve, 200, 'Pepe')
    })
}

function PromesaB(nombre){
    return new Promise( (resolve, reject) =>{
        setTimeout(resolve, 1400, 'Mi nombre es '+nombre)
    })
}

PromesaA().then(PromesaB).then(console.log)