import * as assignmentDao from './dao.js';

export default function AssignmentRoutes(app) {

    // Create a new assignment
    app.post('/api/assignments', async (req, res) => {
        try {
            const assignment = req.body;
            const newAssignment = await assignmentDao.createAssignment(assignment);
            res.status(201).json(newAssignment);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    // Get assignments for a specific course code
    app.get('/api/assignments/course/:courseId', async (req, res) => {
        try {
            const { courseId } = req.params;
            const assignments = await assignmentDao.findAssignmentsForCourse(courseId);
            res.json(assignments);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    // Update an assignment
    app.put('/api/assignments/:assignmentId', async (req, res) => {
        try {
            const { assignmentId } = req.params;
            const assignmentUpdates = req.body;
            const updatedAssignment = await assignmentDao.updateAssignment(assignmentId, assignmentUpdates);
            res.json(updatedAssignment);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    // Delete an assignment
    app.delete('/api/assignments/:assignmentId', async (req, res) => {
        try {
            const { assignmentId } = req.params;
            await assignmentDao.deleteAssignment(assignmentId);
            res.sendStatus(204);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });
}