import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a username"],
  },
  email: {
    type: String,
    required: [true, "Please provide a email"],
  },
  message: {
    type: String,
    required: [true, "Please provide a message"],
  },
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
