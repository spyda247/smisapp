import { showMenu } from "./utils.js";
import db from "./db_utils.js";

export default function displayStudentRecord(confirm) {
  const res = db();
  res
    .then((db) => {
      const { getStudents } = db;
      const data = getStudents();
      data.then((data) => {
        if (confirm === "Y") {
          /* Display data */
          data.length === 0
            ? console.log("No data to display. Add a Student record")
            : console.table(data);
        }
      });
    })
    .catch((err) => console.log("Something bad happened", err));

  showMenu();
}
