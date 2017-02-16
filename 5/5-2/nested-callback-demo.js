// this is pesudo code - not executable js

var somedb;
var someWebAPI;
var token;
var security;
//this uses callbacks
someWebAPI.get('/login', function (req, res) {
	token.checkToken(req.token, function (safe) {
		somedb.find(username, function (req.user) {
			security.checkPassword(user.password, req.password, function (matched) {
				token.createToken(user.id, function (userData) {
					res.send(userData, function () {
						// error
					}, function () {
						//success
					})
				})
			})
		})
	})
})

//this uses promises
someWebAPI.get('/login')
	.then(token.checkToken(req.token))
	.then(somedb.find(username))
	.then(security.checkPassword(user.password, req.password))
	.then(res.send(userData))
	.success(function () {})
	.error(function () {});