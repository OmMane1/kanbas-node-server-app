import * as dao from "./dao.js";

export default function AssignmentRoutes(app) {
  app.get("/api/assignments", (req, res) => {
    const assignments = dao.findAllAssignments();
    res.send(assignments);
  });

  app.get("/api/assignments/:assignmentId", (req, res) => {
    const { assignmentId } = req.params; 
    console.log("Assignment ID from route:", assignmentId); 
    const assignment = dao.findAssignmentById(assignmentId);
    if (!assignment) {
      return res.status(404).send({ message: "Assignment not found" });
    }
    res.json(assignment);
  });
  
  

  app.post("/api/assignments", (req, res) => {
    try {
        const newAssignment = dao.createAssignment(req.body);
        res.status(201).json(newAssignment); // Ensure correct response status and JSON format
    } catch (error) {
        console.error("Error creating assignment:", error.message);
        res.status(500).json({ message: "Error creating assignment" }); // Send meaningful error message
    }
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
