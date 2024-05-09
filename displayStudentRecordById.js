import { showMenu } from "./utils.js";
import { getStudentById } from "./db_utils.js";

export default function displayStudentRecord(id) {
  if (id) {
    /* Display data */
    const res = getStudentById(id);
    res.then((data) => console.table(data));
  } else {
    console.log(`Something went wrong. You need to provide a valid id `);
  }
  showMenu();
}
