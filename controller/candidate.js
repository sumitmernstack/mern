const User= require("../modals/Candidate");
const { check, validationResult } = require('express-validator');
const config = require('config');
const jwt = require('jsonwebtoken');
//(register)
exports.demo=(req,res)=>{
return res.send("hi postman")
}

exports.register=(req, res)=>{
    const errors= validationResult(req)
    if(!errors.isEmpty()){
        return res.status(422).json({
			 error: errors.array()[0].msg
        })
    }
    const user= new User(req.body)
    user.save();
    
  const payload = {
    user: {
      id: user.id
    }
  };

  jwt.sign(
    payload,
    config.get('jwtSecret'),
    { expiresIn: 360000 },
    (err, token) => {
      if (err) throw err;
      res.json({ token,user });
    }
  );
};

