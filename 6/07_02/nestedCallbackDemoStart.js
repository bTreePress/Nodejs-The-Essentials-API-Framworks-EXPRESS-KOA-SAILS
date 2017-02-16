// this is pesudo code - not executable js

var somedb;
var someWebAPI;
var token;
var security;
 
someWebAPI.get('/login')
	.then(token.checkToken(req.token))
	.then(somedb.find(username))
	.then(security.checkPassword(user.password, req.password))
	.then(res.send(userData))
	.success(function () {})
	.error(function () {});