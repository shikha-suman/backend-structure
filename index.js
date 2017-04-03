const express = require('express');
var apis = require("./config/api-config");
var port = "8000";
apis.app.listen(port, function (){
    console.log("server connected to port "+port);
})