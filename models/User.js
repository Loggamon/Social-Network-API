const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required!"],
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required!"],
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w+{2,3})+$/,
        "Please enter a valid email!",
      ],
    },
    thoughts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "thought",
      },
    ],
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

userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("user", userSchema);

module.exports = User;
