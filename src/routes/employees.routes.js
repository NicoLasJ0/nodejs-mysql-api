import { Router } from "express";
import { getEmployees, createEmployees, getEmployeesById, deleteEmployees, updateEmployees } from "../controllers/employees.controller.js";
const router= Router();
router.get("/employees", getEmployees);
router.get("/employees/:id", getEmployeesById);
router.post("/employees", createEmployees);
router.delete("/employees/:id", deleteEmployees);
router.put("/employees/:id", updateEmployees);
export default router;