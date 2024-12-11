import mongoose from "mongoose";
const questionSchema = new mongoose.Schema(
  {
    question: { type: mongoose.Schema.Types.ObjectId, ref: "QuestionsModel" },
    answer: String,
  },
  { _id: false }
);
const schema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "UserModel" },
    quiz: { type: mongoose.Schema.Types.ObjectId, ref: "QuizModel" },
    grade: Number,
    attempts: Number,
    time: Number,
    dateOfAttempt: Date,
    questions: [questionSchema],
  },
  { collection: "quizgrades" }
);
export default schema;
