var http = require("http"); // 외부 파일 불러왔다는 의미로 두 칸 띄기 


http.createServer(function(request, response){ //서버생성
    response.writeHead(200, {"Content-Type":"text/plain"}); // 200: 성공. 대소문자 잘 적어야 오류 안난다.
    response.write("hello world \n");
    response.end(); // 응답이 끝났으면 종료한다. 
}).listen(3030); // 숫자 아무거나 써도 되는데.. 1024번까지 막안놓았을 것 

console.log('Server is running at localhost:3030');