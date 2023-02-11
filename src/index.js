import express from "express";
import employees from "./routes/employees.routes.js";
import index from "./routes/index.routes.js";
import {
  PORT,
  DB_DATABASE,
  DB_HOST,
  DB_PASSWORD,
  DB_USER,
  DB_PORT,
} from "./config.js";
const app = express();
app.use(express.json());
app.use("/api", employees);
app.get("/hi", (req, res) => {
  res.send("It's everything ok");
});
app.use(index);
console.log(DB_DATABASE);
console.log(DB_HOST);
console.log(DB_PASSWORD);
console.log(DB_USER);
console.log(DB_PORT);
console.log(`I am listening at port ${PORT}`);
app.listen(PORT);
