import { showMenu } from "./utils.js";
import db from "./db_utils.js";

export default function displayStudentRecord(id) {
  const data = db();
  data.then((res) => {
    const { getStudentById } = res;
    if (id) {
      /* Display data */
      const res = getStudentById(id);
      res.then((data) => console.table(data));
    } else {
      console.log(`Something went wrong. You need to provide a valid id `);
    }
  });
  showMenu();
}
