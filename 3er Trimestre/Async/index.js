const request = require('request')

console.log('Soy el primero')

request('https://wikipedia.com', function(){
    console.log('Soy el segundo y ya se todo de wikipedia')
        request('https://google.com', function(){
            console.log('Soy el segundo y ya se todo de google')
        })
})

console.log('Soy el ultimo')    

const promesa = require('request-promise')

promesa('https://wikipedia.com').then(function(html){
    console.log('ya se todo de wikipedia 2')
}).catch(function(err){
    console.log(err)
})