const request = require('request')

function llamada(url){
    return new Promise(function(resolve, reject){
        request(url, function(err, response){
            if(err){
                reject(err)
            }else{
                resolve(response)
            }
        })
    })
}

llamada('http://wikipedia.com').then(function(response){
    console.log(response)
}).catch(function(err){
    console.log(err)
})