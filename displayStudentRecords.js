import { showMenu } from "./utils.js";
import { getStudents } from "./db_utils.js";
import { exit } from "process";

export default function displayStudentRecord(confirm) {
  try {
    const data = getStudents();
    data.then((data) => {
      if (confirm === "Y" && data) {
        /* Display data */
        data.length === 0
          ? console.log("No data to display. Add a Student record")
          : console.table(data);
        showMenu();
      } else {
        exit(1);
      }
    });
  } catch (err) {
    console.log(err);
  }
}
