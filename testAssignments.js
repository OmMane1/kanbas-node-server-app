import * as dao from "./Kanbas/Assignments/dao.js";

async function testAssignments() {
  console.log("Initial assignments:", dao.findAllAssignments());

  // Create assignments
  const assignment1 = dao.createAssignment({
    title: "Assignment 1",
    course: "Course 1",
  });
  const assignment2 = dao.createAssignment({
    title: "Assignment 2",
    course: "Course 2",
  });
  console.log("After creation:", dao.findAllAssignments());

  // Find an assignment
  console.log("Find assignment 1:", dao.findAssignmentById(assignment1._id));

  // Update an assignment
  const updatedAssignment = dao.updateAssignment(assignment1._id, { title: "Updated Assignment 1" });
  console.log("After update:", updatedAssignment);

  // Delete an assignment
  dao.deleteAssignment(assignment2._id);
  console.log("After deletion:", dao.findAllAssignments());
}

testAssignments().catch((err) => console.error("Error:", err.message));
