export default function QueryParameters(app) {
    app.get("/lab5/calculator", (req, res) => {
      const { a, b, operation } = req.query;
  
      if (isNaN(a) || isNaN(b)) {
        return res.status(400).send("Invalid input. Please provide valid numbers for 'a' and 'b'.");
      }
  
      const numA = parseFloat(a);
      const numB = parseFloat(b);
      let result;
  
      switch (operation) {
        case "add":
          result = numA + numB;
          break;
        case "subtract":
          result = numA - numB;
          break;
        case "multiply":
          result = numA * numB;
          break;
        case "divide":
          if (numB === 0) {
            return res.status(400).send("Division by zero is not allowed.");
          }
          result = numA / numB;
          break;
        default:
          result = "Invalid operation. Supported operations are add, subtract, multiply, divide.";
      }
  
      res.send(result.toString());
    });
  }
  