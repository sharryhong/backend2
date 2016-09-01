var fs = require("fs"); // fs(file system) Module을 fs변수에 담는다. 
var renderer = require("./renderer");

function home(req, res) {
	if(req.url=="/"){
		return renderer(req, res, "home", {}); // req, res, layoutName, context
	}
}

// 유니크한 id를 가지고 있다. detail보다 위에 와야 한다.
function contact(req, res) {
	if(req.url=="content"){
		return renderer(req, res, "contact", {});
	}
}

function detail(req, res) {
	var detailId = req.url.replace("/", "");
	if(detailId.length > 0) { // /이하 length가 0보다 크면. 즉 값이 있으면
		res.write(detailId); 
		res.end();
	}
}

// 명시적으로 써준다.
module.exports.home = home; 
// 만약에 module.export = home;이라고 하면 모든 페이지가 home으로 간다. 
module.exports.contact = contact;
module.exports.detail = detail;
