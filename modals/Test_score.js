var mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
var testScoreSchema = new mongoose.Schema(
  {
    user:{
    type:mongoose.Schema.Types.ObjectId,
    ref: "Candidate",
  },
    first_round: {
      type: Number,
      default: 0,
    },
    second_round: {
        type: Number,
        default: 0,
      },
      third_round: {
        type: Number,
        default: 0,
      },
      total_score: {
        type: Number,
        default: 0,
      },
},{ timestamps: true }
);

module.exports = mongoose.model("TestScore", testScoreSchema);





