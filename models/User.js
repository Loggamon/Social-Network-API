const { Schema, model, default: mongoose } = require("mongoose");
require("mongoose-type-email");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required!"],
      unique: true,
      trim: true,
    },
    email: {
      type: mongoose.SchemaTypes.Email,
      required: [true, "Email is required!"],
      unique: true,
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
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
