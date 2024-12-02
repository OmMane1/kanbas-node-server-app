import * as dao from "./dao.js";
export default function EnrollmentRoutes(app) {
  // app.delete("/api/enrollments", (req, res) => {
  //   const { user, course } = req.body;
  //   const result = dao.unenrollUserFromCourse(user, course);
  //   res.json(result);
  // });
  // app.get("/api/enrollments", (req, res) => {
  //   const enrollments = dao.findAllEnrollments();
  //   res.send(enrollments);
  // });
  // app.post("/api/enrollments", (req, res) => {
  //   console.log("Received POST /api/enrollments with body:", req.body);
  //   const { user, course } = req.body;
  //   console.log("Extracted user and course:", user, course);
  //   const newEnrollment = dao.enrollUserInCourse(user, course);
  //   res.json(newEnrollment);
  // });
}
