var mongoose = require("mongoose");
var candidateSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 32,
      trim: true
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true
    }
},{ timestamps: true }
);


module.exports = mongoose.model("Candidate", candidateSchema);
