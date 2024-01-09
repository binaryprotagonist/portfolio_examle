import mongoose from "mongoose";

const workSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a title"],
    unique: true,
  },
  description: {
    type: String,
    required: [true, "Please provide a description"],
  },
  role: {
    type: String,
    required: [true, "Please provide a role"],
  },
  responsibilities: [
    {
      type: String,
      required: [true, "Please provide a responsibilities"],
    },
  ],
  techstack: [
    {
      type: String,
      required: [true, "Please provide a techstack"],
    },
  ],
  url: {
    type: String,
    required: [true, "Please provide a techstack"],
  },
});

const Work = mongoose.models.works || mongoose.model("works", workSchema);

export default Work;
