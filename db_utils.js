import mysql from "mysql2";
import { config } from "./db_config.js";

const pool = mysql.createPool({
  host: config.host,
  user: config.user,
  database: config.database,
});
const promisePool = pool.promise();

/* Create */
export async function createStudent(name, age, grade) {
  try {
    const [data] = await promisePool.execute(
      "INSERT INTO `students` (`name`, `age`, `grade`) VALUES (" +
        `'${name}', '${age}', '${grade}'` +
        ")"
    );
    console.log("Student record added successfully");
    return data;
  } catch (error) {
    console.log(
      "Could not add student record Error:",
      error.code,
      error.message
    );
  }
}

/* Read */
export async function getStudents() {
  try {
    const [data] = await promisePool.execute("SELECT * FROM `students`");
    return data;
  } catch (error) {
    console.error(
      "Could not retrieve to data. Error:",
      error.code,
      error.message
    );
  }
}
export async function getStudentById(id) {
  try {
    const [data] = await promisePool.execute(
      "SELECT * FROM `students` WHERE `id` = " + id
    );
    return data;
  } catch (error) {
    console.log(
      "Could not retrieve to data. Error:",
      error.code,
      error.message
    );
  }
}

/* Update */
export async function updateStudentRecordById(id, feild, value) {
  try {
    const [data] = await promisePool.execute(
      "UPDATE `students` SET " +
        `\`${feild}\` = '${value}'` +
        " WHERE `id` = " +
        `${id}`
    );
    console.log("Student record updated successfully");
    return data;
  } catch (error) {
    console.log("Could not update to data. Error:", error.code, error.message);
  }
}
