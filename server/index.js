const app = require("./app");

const port = 5000;
app.listen(port, () => {
  console.log(`server has started on port http://localhost:${port}`);
});
