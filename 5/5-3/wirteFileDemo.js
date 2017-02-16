var fs = require('fs');

var user = '{"name":"luke"}';

fs.writeFile('user.json',user);

var user2 = 
{
    name:'Hillary'
};

fs.writeFile('user2.json',JSON.stringify(user2));

