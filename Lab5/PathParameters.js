export default function PathParameters(app) {
    app.get("/lab5/add/:a/:b", (req, res) => {
      const { a, b } = req.params;
      const sum = parseInt(a) + parseInt(b);
      res.send(sum.toString());
    });
    app.get("/lab5/subtract/:a/:b", (req, res) => {
      const { a, b } = req.params;
      const sum = parseInt(a) - parseInt(b);
      res.send(sum.toString());
    });
    app.get("/lab5/multiply/:a/:b", (req, res) => {
      const { a, b } = req.params;
      const numA = parseInt(a, 10);
      const numB = parseInt(b, 10);
  
      if (isNaN(numA) || isNaN(numB)) {
          return res.status(400).send("Invalid input: Both parameters should be numbers.");
      }
  
      const product = numA * numB;
      res.send(product.toString());
  });
  
      app.get("/lab5/divide/:a/:b", (req, res) => {
        const { a, b } = req.params;
        if (parseInt(b) === 0) {
          res.send("Cannot divide by zero");
        } else {
          const quotient = parseInt(a) / parseInt(b);
          res.send(quotient.toString());
        }
      });
      
  };
  