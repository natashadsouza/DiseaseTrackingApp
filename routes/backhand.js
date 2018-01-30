/**
 * http://usejsdoc.org/
 */
exports.backhand = function(req,res,next){
	var a = req.param("username");
	var b = req.param("pas");
	var c = req.param("dhiraj");
	var d = req.param("aditya");
	var e = req.param("saurab");
	var total = 0;
	console.log(a);	console.log(b);	console.log(c);	console.log(d);	console.log(e);//	console.log(a);
	//console.log(a);
	var white_pasta, pizza ,red_pasta, samose, pasta;
	if (a == true){
		white_pasta = "white pasta: 100";
		total = total + 100;	
	}
	
	if (b == true){
		console.log("b");
		red_pasta = "red pasta: 200";
		total = total + 200;	
	}
	if (c == true){
		pasta = "red pasta : 200";
		total = total + 200;	
	}
	if (d == true){
		pizza = "pizaa:200";
		total = total + 200;	
	}
	
	if (e == true){
		samose="samose:200";
		total = total + 200;	
	}
	console.log(samose);
	var json_responses = { "naam" : total, "redpasta" : red_pasta, "whitepasta" : white_pasta, "pasta": pasta, "pizza":pizza, "samose":samose};
	res.send(json_responses);
};