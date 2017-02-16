var fs = require('fs');

//Mac users
// fs.readdir('/', function(err,data){
//     console.log(data);
// });
fs.readdir('c:/', function(err,data){
    console.log(data);
});
