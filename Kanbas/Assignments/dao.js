import Database from "../Database/index.js";

export function findAllAssignments() {
  return Database.assignments;
}

export function createAssignment(assignment) {
  const newAssignment = { ...assignment, _id: Date.now().toString() };
  Database.assignments = [...Database.assignments, newAssignment];
  return newAssignment;
}

export function findAssignmentById(assignmentId) {
  return Database.assignments.find(
    (assignment) => assignment._id === String(assignmentId)
  );
}


export function updateAssignment(assignmentId, assignmentUpdates) {
  const assignment = Database.assignments.find((assignment) => assignment._id === assignmentId);
  if (!assignment) throw new Error("Assignment not found");
  Object.assign(assignment, assignmentUpdates);
  return assignment;
}

export function deleteAssignment(assignmentId) {
  Database.assignments = Database.assignments.filter((assignment) => assignment._id !== assignmentId);
}
