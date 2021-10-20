let promesaA = new Promise((resolve, reject)=> setTimeout(resolve, 500, 'Hola soy la promesa A'))
let promesaB = new Promise((resolve, reject)=> setTimeout(resolve, 500, 'Hola soy la promesa B'))
let promesaC = Promise.reject()

// promesaA.then(function(){
//     promesaB.then(function(){
//         console.log('terminó todo')
//     })
//     console.log('soy la promesa A y me completé')
// })
Promise.all([promesaA, promesaB, promesaC]).then(function(e){
    console.log('terminó todo',e)
}).catch(function(err){
    console.log(err,'Todo mal')
})