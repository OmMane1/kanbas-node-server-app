import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    title: String,
    description: String,
    quizType: String,
    points: Number,
    assignmentGroup: String,
    shuffleAnswers: Boolean,
    timeLimit: Number,
    multipleAttempts: Boolean,
    multipleAttemptsCount: Number,
    showCorrectAnswers: Boolean,
    accessCode: String,
    oneQuestionAtATime: Boolean,
    webcamRequired: Boolean,
    lockQuestionAfterAnswering: Boolean,
    dueDate: Date,
    availableFrom: Date,
    availableUntil: Date,
    course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
    numberOfQuestions: Number,
    published: Boolean,
  },
  { collection: "quizzes" }
);
export default schema;
