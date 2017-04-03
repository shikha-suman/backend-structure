const userService = require('../services/user.service');

console.log("here");

function init(router) {
  console.log("in init");
    router.route('/user')
        .get(getAllUsers)
        .post(addUser);
    router.route('/user/:id')
        .delete(deleteUser)
        .put(updateUser); 
}


/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });


function getAllUsers(req,res) {
  console.log("reached here");
  userService.getAllUser(function(err,result){
    if(err)
      res.send(err);
    else{
      console.log("result is--------------------------",result);
       res.send(result);
    }

  })
}

function addUser(req,res) {
  var userData=req.body;
  userService.addUser(userData,function(err,result){
        if(err) {
          res.json(err);
        }
        // console.log("hey save");
       console.log("post result is------------------",result);
       //console.log(res);
       res.json(result);

    });
}


function updateUser(req,res) {
   var userData=req.body;
   var id = req.params.id;
   console.log("id--------",id);
   userService.updateUser(id,userData,function(err,result){
        if(err) {
          res.json(err);
        }
        // console.log("hey save");
       console.log("update result is------------------",result);
       //console.log(res);
       res.json(result);

    });
}


function deleteUser(req,res) {
  var delId = req.params.id;
  console.log(delId+"------");
   userService.deleteUser(delId,function(err,result){
        if(err) {
          res.json(err);
        }
        // console.log("hey save");
       console.log("delete result is------------------",result);
       //console.log(res);
       res.json(result);

    });
}


// router.post("/message",Users.createUser) {
//     //res.send("response for post");
//     console.log("router post-------");
// }
// router.put("/update/:id",Users.updateUser) {
//      console.log("router put-------");
// }
// router.delete("/delete/:id",Users.deleteUser) {
//      console.log("router delete-------");
// }
// router.get("/employee",Users.getAllUser) {
//     console.log("router get-------");
// }


module.exports.init = init;
