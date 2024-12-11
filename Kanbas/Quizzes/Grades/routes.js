import * as quizAnswersDao from "./dao.js";

export default function QuizAnswersRoutes(app) {
  app.put("/api/users/:userId/quizzes/:qid", async (req, res) => {
    const { userId, qid } = req.params;
    const responseUpdates = req.body;
    const status = await quizAnswersDao.updateResponse(
      userId,
      qid,
      responseUpdates
    );
    res.send(status);
  });
}
