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
      get: (date) => {
        if (date) return date.toLocaleString().split("T")[0];
      },
      default: Date.now,
    },
  },
  {
    timestamps: true,
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;
