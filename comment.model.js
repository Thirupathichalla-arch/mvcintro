const mongoose=require("mongoose");

const commentSchema = new mongoose.Schema(
    {
        date_of_evaluation: { type: Number, required: true },
        topic_name:{ type: String ,required:true},
        user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
      },
      post_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "post",
        required: true,
      },
    },
    {
      versionKey: false,
      timestamps: true,
    }
  );
  
  module.exports = mongoose.model("comment", commentSchema)