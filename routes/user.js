let express = require("express");
let router = express.Router();
// /user/signup
router.get("/signup", function(req,res){
    res.send("用户注册")
});

router.get("/signin", function(req,res){
    res.send("用户登录")
})

router.get("logout", function(req,res){
    res.send("退出")
})
module.exports = router;