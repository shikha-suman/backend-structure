var userModel = require("../models/user-model.js");


console.log("here in service");

var userService = {
    getAllUser: getAllUser,
    addUser: addUser,
    updateUser:updateUser,
    deleteUser:deleteUser
}
//var Person = require("../models/user-model.js");

function addUser(userData,callback) {
    userModel.addUser(userData, function (err, res) {
        console.log("res in service-------", res);
        if (!err)
           // return res;
           {
               console.log("posting----------");
               callback (null, res);
           }
            
        else {
            console.log("not posting----------");
            callback (err, null);
        }
           // return err;
        
    });
}


function updateUser(id,userData,callback) {
      userModel.updateUser(id,userData, function (err, res) {
        console.log("res in service-------", res);
        if (!err)
           // return res;
           {
               console.log("posting----------");
               callback (null, res);
           }
            
        else {
            console.log("not posting----------");
            callback (err, null);
        }
           // return err;
        
    });
}

function deleteUser(id,callback) {
    userModel.deleteUser(id,function(err, res) {
        //console.log("res in service-------", res);
        if (!err)
           // return res;
           {
               console.log("deleting----------");
               callback (null, res);
           }
            
        else {
            console.log("not deleting----------");
            callback (err, null);
        }
    });
}




// module.exports.updateUser = function(req,res) {
//     console.log("inside node")
//     console.log(req.params.id);

//     User.update({_id:req.params.id}, req.body, null, function(err,result){
//        // res.send("update the user");
//        console.log("hey update");
//        res.json(result);
//     });
// }

// module.exports.deleteUser = function(req,res) {
//     console.log("hey  delete");
//    // console.log("my --------------------------------------------",req);
    // User.remove({_id:req.params.id}, function(err,result){
    //     console.log("removed");
    //      res.json(result);
    // });
// }

function getAllUser(callback) {
    userModel.getAllUser(function (err, resu) {
        if (!err) {
            console.log("wow----------");
            callback (null, resu);
        }
        else {
            callback (err, null);
        }
            
    });
}


module.exports = userService;

