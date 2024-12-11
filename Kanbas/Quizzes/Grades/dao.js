import model from "./model.js";
export function createQuizGrades(grade) {
  delete grade._id;
  return model.create(grade);
}
export function updateResponse(userId, qid, responseUpdates) {
  return model.updateOne({ user: userId, quiz: qid }, responseUpdates);
}

export const findGradesForUser = (userId, quizId) => {
  return model.findOne({ user: userId, quiz: quizId });
};
