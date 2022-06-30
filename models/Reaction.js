const Schema = require("mongoose");

const reactionSchema = new Schema(
  {
    reactionId: {
      type: ObjectId,
    },
    reactionBody: {
      type: String,
      required: [true, "Leave a reaction!"],
      max: [280, "That's too long!"],
    },
    username: {
      type: String,
      required: true,
    },
    friends: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;
