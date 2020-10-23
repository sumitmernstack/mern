
var express = require('express')
var router = express.Router()
const { check, validationResult } = require('express-validator')
const {register, demo}=require("../controller/candidate")
const  auth=require("../middleware/auth")
const { testauth, testscore,  getAllaverageScore ,getHighestScore} = require('../controller/testscore')

router.get("/me",auth,testauth);  

router.post("/testscore",auth,
[
    check("first_round","first_round no is required"),
    check("second_round","second_round no is required"),
    check("third_round","third_roundno is required"),
], 
testscore);

router.get("/highScore", getHighestScore);
router.get("/averageScore", getAllaverageScore);

module.exports=router;
