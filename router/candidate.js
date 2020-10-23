var express = require('express')
var router = express.Router()
const { check, validationResult } = require('express-validator')
const {register, demo}=require("../controller/candidate")
router.get("/demo",demo);
router.post("/register",
[
    check("name","name must be at least 3 char length").isLength({min:3}),
    check("email","email must be valid").isEmail(),
], 
register);

module.exports=router;
