require('dotenv').config()
const express=require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser') 
const app=express();
const candidateRoutes= require('./router/candidate')
const testscoreRoutes=require('./router/testscore')
const PORT=process.env.port;
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(process.env.db,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then(()=>{
  console.log("database connected")
});
app.use("/api", candidateRoutes);
app.use("/api", testscoreRoutes);

 app.listen(PORT,()=>{console.log(`server started at port no ${PORT}...`) })