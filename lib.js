// Javascript Document

var XhrPlugin = document.createElement("script");
XhrPlugin.src = "https://cdn.jsdelivr.net/gh/Merret/UsefulJS@0.4.2/js/xhr.min.js";
document.body.appendChild(XhrPlugin);

var MDB = (function () {
	var create = function (Data) {
		var casper = JSON.parse(xhr.post("https://api.myjson.com/bins", JSON.stringify(Data)));
		return casper.uri.substring(28);
	};
	var connect = function (DBcode) {
		var casper = JSON.parse(xhr.get("https://api.myjson.com/bins/" + DBcode));
		return casper;
	};
	var edit = function (DBcode, Data) {
		var casper = JSON.parse(xhr.put("https://api.myjson.com/bins/" + DBcode, JSON.stringify(Data)));
		if (casper == Data) {
			return {
				status: "success",
				code: 1,
				data: casper
			}
		} else {
			return {
				status: "failed",
				code: 0
			}
		}
	};
	var search = function (DBcode, Index="all", Data="all") {
		var casper = JSON.parse(xhr.get("https://api.myjson.com/bins/" + DBcode));
		if(Index=="all") {
			
		} else {
			
		}
		return;
	};

	return {
		create: create,
		connect: connect,
		edit: edit,
		search: search
	};
})();
