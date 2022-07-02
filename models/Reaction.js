const { Schema } = require("mongoose");
const Scheme = Schema;

const reactionSchema = new Scheme(
  {
    reactionId: {
      type: Scheme.Types.ObjectId,
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
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;
