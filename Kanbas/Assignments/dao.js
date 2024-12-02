import AssignmentModel from './model.js';

export async function createAssignment(assignment) {
    return await AssignmentModel.create(assignment);
}


export async function findAssignmentsForCourse(courseId) {
    return await AssignmentModel.find({ course: courseId });
}


export async function updateAssignment(assignmentId, assignmentUpdates) {
    return await AssignmentModel.findByIdAndUpdate(assignmentId, assignmentUpdates, { new: true });
}


export async function deleteAssignment(assignmentId) {
    return await AssignmentModel.findByIdAndDelete(assignmentId);
}