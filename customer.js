var express = require("express");
var app= express();

var customercontroller=function(req,resp)
{
	console.log("calling rest API");
	var customers=[
	{firstName:'ravi',lastName:'patil',age:'25'},
		{firstName:'soni',lastName:'patil',age:'26'}
];
resp.send(customers);
};
  app.get('/customers',customercontroller);
  
  var server=app.listen(8088,function() {
	  console.log("example app listening...");
  })