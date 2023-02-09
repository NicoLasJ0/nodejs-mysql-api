import { pool } from "../db.js";

export const getEmployees = async (req, res) => {
  let [rows] = await pool.query("SELECT * FROM employee");
  res.json(rows);
};
export const createEmployees = async (req, res) => {
  const { employeeName, salary } = req.body;
  const [rows] = await pool.query(
    "INSERT INTO employee(employeeName, salary) VALUES(?, ?)",
    [employeeName, salary]
  );
  res.send({
    id: rows.insertId,
    employeeName: employeeName,
    salary: salary,
  });
};
export const getEmployeesById = async (req, res) => {
  const id = parseInt(req.params.id);
  const [result] = await pool.query("SELECT * FROM employee WHERE id= ?", [id]);
  if (result.length <= 0)
    return res.status(404).json({
      message: "Employee not found",
    });
  res.send(result);
};
export const deleteEmployees = async (req, res) => {
  const id = parseInt(req.params.id);
  const [result] = await pool.query("DELETE FROM employee WHERE id= ?", [id]);
  if (result.affectedRows <= 0)
    return res.status(404).json({
      message: "Employee not found",
    });
  res.send("Affected rows " + result.affectedRows);
};
export const updateEmployees = async (req, res) => {
  const id = req.params.id;
  const { employeeName, salary } = req.body;
  const [result] = await pool.query(
    "UPDATE employee SET employeeName = IFNULL(?, employeeName), salary= IFNULL(?, salary) WHERE id= ?",
    [employeeName, salary, id]
  );
  if (result.affectedRows == 0) {
    res.status(404).json({
      message: "Employee not found",
    });
  }
  const [rows] = await pool.query("SELECT * FROM employee WHERE id= ?", [id]);
  res.json(rows[0]);
};
