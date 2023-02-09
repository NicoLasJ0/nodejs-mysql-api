import express from "express";
import employees from "./routes/employees.routes.js";
import index from "./routes/index.routes.js";
import {PORT} from "./config.js"
const app = express();
app.use(express.json());
app.use("/api", employees);
app.use(index);
console.log(`I am listening at port ${PORT}`);
app.listen(PORT);
