var promise = new Promise(function(resolve,reject){
    reject();

});

promise.then(function(){
    console.log('then');
}).catch(function(){
    console.error('failed');
});