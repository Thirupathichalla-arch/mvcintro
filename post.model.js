const mongoose=require("mongoose");

const postSchema = new mongoose.Schema(
    {
      current_batch: { type: String, required: true },
      roll_id: { type: Number, required: true },
      user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
      },
      tag_ids: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "tag",
          required: true,
        },
      ],
    },
    {
      versionKey: false,
      timestamps: true,
    }
  );
  
  module.exports = mongoose.model("post", postSchema);