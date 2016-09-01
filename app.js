var http = require("http"); 
var router = require("./router"); // router.js를 router변수에 넣는다.


var app = http.createServer(function(req, res){ 
	console.log(req.url);

	// router.js에서 처리해서 app.js로 
	router.home(req, res); // router.js파일내의 home함수
	router.detail(req, res);
	router.contact(req, res); 

})

app.listen(3030, function(){
	console.log('Server is running at localhost:3030');
});
