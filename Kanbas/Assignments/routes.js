import * as dao from "./dao.js";

export default function AssignmentRoutes(app) {
  app.get("/api/assignments", (req, res) => {
    const assignments = dao.findAllAssignments();
    res.send(assignments);
  });

  app.get("/api/assignments/:assignmentId", (req, res) => {
    const { assignmentId } = req.params; // This will be passed as a string
    console.log("Assignment ID from route:", assignmentId); // Log to verify
    const assignment = dao.findAssignmentById(assignmentId);
    if (!assignment) {
      return res.status(404).send({ message: "Assignment not found" });
    }
    res.json(assignment);
  });
  
  

  app.post("/api/assignments", (req, res) => {
    const newAssignment = dao.createAssignment(req.body);
    res.status(201).send(newAssignment);
  });

  app.put("/api/assignments/:assignmentId", (req, res) => {
    const { assignmentId } = req.params;
    try {
      const updatedAssignment = dao.updateAssignment(assignmentId, req.body);
      res.send(updatedAssignment);
    } catch (error) {
      res.status(404).send({ message: error.message });
    }
  });

  app.delete("/api/assignments/:assignmentId", (req, res) => {
    const { assignmentId } = req.params;
    dao.deleteAssignment(assignmentId);
    res.status(204).send();
  });
}
