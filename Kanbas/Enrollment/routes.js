import * as dao from "./dao.js";

export default function EnrollmentRoutes(app) {
  app.post("/api/enrollments", (req, res) => {
    const { userId, courseId } = req.body;
    try {
      const enrollment = dao.enrollInCourse(userId, courseId);
      res.status(201).json(enrollment);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });

  app.delete("/api/enrollments", (req, res) => {
    const { userId, courseId } = req.body;
    try {
      const unenrollment = dao.unenrollFromCourse(userId, courseId);
      res.status(200).json(unenrollment);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });

  app.get("/api/enrollments/:userId", (req, res) => {
    const { userId } = req.params;
    const enrollments = dao.findEnrollmentsByUserId(userId);
    res.json(enrollments);
  });
}
