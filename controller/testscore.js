const  auth=require("../middleware/auth")
const Tscore=require("../modals/Test_score")
const User= require("../modals/Candidate");
const { check, validationResult } = require('express-validator');

exports.testauth=(req,res)=>{
    const score= Tscore.findOne({user:req.user.id})
   // console.log(score.name)
    if(!score){
        res.status(400).json({msg:"There is no  profile"})
    }else {
        res.json({msg:"dlchskjh"})
    }

}

exports.testscore=(req,res)=>{
    const errors= validationResult(req)
    if(!errors.isEmpty()){
        return res.status(422).json({
			 error: errors.array()[0].msg
        })
    }
    const {first_round,second_round,third_round}=req.body;
    const total_score=(first_round+second_round+third_round)/3
    const scoreObj={}
    scoreObj.user = req.user.id;
    scoreObj.first_round = first_round;
    scoreObj.second_round =second_round;
    scoreObj.third_round =third_round;
    scoreObj.total_score=total_score;
    try {
        let profile= Tscore.findOne({user:req.user.id})
      
        profile=new Tscore(scoreObj)
        profile.save();
        res.json(profile)
        
    } catch (error) {
        console.error(error.message)
        res.status(400).send("server error")
    }
}


exports.getHighestScore=(req,res)=>{

    let arr=[];
    let box,highestMarks,totalMarks,sortedArray,arrayLength;
   let userCollection= Tscore.find()
   .then(userColl=>{
       for(let i=0;i<userColl.length;i++){
        box=(userColl[i].second_round + userColl[i].third_round +userColl[i].first_round)/3
        arr.push(box)
       }
     //  console.log(arr)
     //console.log(Math.max(...arr));
       highestMarks=Math.max(...arr);
       let marks= Tscore.find()
       .then(mrk=>{
           for(let j=0;j<mrk.length;j++){
            totalMarks=(mrk[j].second_round + mrk[j].third_round +mrk[j].first_round)/3
            if(totalMarks == highestMarks){
                console.log("answear");
                console.log(mrk[j].user, "  ", highestMarks);
            }
           }
       }).catch(err=>{
       console.log(err);  
       return null;          
    })
   
     
      // console.log("values",userColl)
       //console.log("values",arr[arrayLength])
     //name display
   
   })
   .catch(err=>{
       console.log(err);  
       return null;          
    })
   
    res.json({mgs:"check console for highest scoriong candidate"})
 
}



exports.getAllaverageScore=(req,res)=>{
    let arr=[];
    let box,sortedArray,arrayLength;
   let userCollection= Tscore.find()
   .then(userColl=>{
       for(let i=0;i<userColl.length;i++){
        box=(userColl[i].second_round + userColl[i].third_round +userColl[i].first_round)/3
        console.log(i)
       console.log("user id",userColl[i].user)
        console.log("average score per semester",box)
       }
       sortedArray=arr.sort();
       arrayLength=arr.length-1;
      // console.log("values",userColl)
       //console.log("values",arr[arrayLength])
     //name display
   
   })
   .catch(err=>{
       console.log(err);  
       return null;          
    })
    
      res.json({mgs:"check console for average score"})
   }
   
   
