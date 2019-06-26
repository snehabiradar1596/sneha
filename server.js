var express = require("express");
var app= express();

var customercontroller=function(req,resp)
{
	console.log("calling rest API");
	var customers=[
	{firstName:"sneha" Account no:1001 Account balance:50,000},
{firstName:"pragati" Account no:1003 Account balance:25,000}
{firstName:"aishwarya" Account no:1004 Account balance:30,000}

];
resp.send(customers);
};
  app.get('/customers',customercontroller);
  
  var server=app.listen(8088,function() {
	  console.log("example app listening...");
  })