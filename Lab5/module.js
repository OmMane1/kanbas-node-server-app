const module = {
    id: "123",
    name: "Introduction to React",
    description: "Learn the basics of React, including components, state, and props.",
    course: "Web Development"
  };
  
  let assignment = {
    score: 85,
    completed: false
  };
  
  export default function Module(app) {
    app.get("/lab5/module", (req, res) => {
      res.json(module);
    });
  
    app.get("/lab5/module/name", (req, res) => {
      res.json({ name: module.name });
    });
  
    app.put("/lab5/module/name", (req, res) => {
      const { name } = req.body;
      module.name = name;
      res.json(module);
    });
  
    app.put("/lab5/module/description", (req, res) => {
      const { description } = req.body;
      module.description = description;
      res.json(module);
    });
  
    app.put("/lab5/assignment/score", (req, res) => {
      const { score } = req.body;
      assignment.score = score;
      res.json(assignment);
    });
  
    app.put("/lab5/assignment/completed", (req, res) => {
      const { completed } = req.body;
      assignment.completed = completed;
      res.json(assignment);
    });
  }
  