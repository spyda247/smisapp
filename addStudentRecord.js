import { showMenu, capitalizeFirstLetter } from "./utils.js";
import db from "./db_utils.js";

export default function addStudentRecord(record) {
  const res = db();
  res.then((db) => {
    const { createStudent } = db;

    const messages = [
      "Something went wrong. Expected an object but got an 'array' or 'primitive' type",
      "Something went wrong. Please enter a valid number for age",
    ];

    if (typeof record === "object" && !Array.isArray(record)) {
      if (!parseInt(record.age)) {
        console.log(messages[1]);
      } else {
        /* Some text formating */
        const newName = capitalizeFirstLetter(record.name);
        const newGrade = capitalizeFirstLetter(record.grade);

        createStudent(newName, record.age, newGrade);
      }
    } else {
      console.log(messages[0]);
    }
    showMenu();
  });
}
