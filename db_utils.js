import mysql from "mysql2";

export default async function db() {
  const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    database: "smis",
  });
  const promisePool = pool.promise();

  /* Create */
  async function createStudent(name, age, grade) {
    try {
      const [data] = await promisePool.execute(
        "INSERT INTO `students` (`name`, `age`, `grade`) VALUES (" +
          `'${name}', '${age}', '${grade}'` +
          ")"
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  /* Read */
  async function getStudents() {
    try {
      const [data] = await promisePool.execute("SELECT * FROM `students`");
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  async function getStudentById(id) {
    try {
      const [data] = await promisePool.execute(
        "SELECT * FROM `students` WHERE `id` = " + id
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  /* Update */
  async function updateStudentRecordById(id, feild, value) {
    try {
      const [data] = await promisePool.execute(
        "UPDATE `students` SET " +
          `\`${feild}\` = '${value}'` +
          " WHERE `id` = " +
          `${id}`
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  return {
    createStudent,
    getStudents,
    getStudentById,
    updateStudentRecordById,
  };
}
