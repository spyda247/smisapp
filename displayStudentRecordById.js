import { getData, showMenu } from "./utils.js";

export default function updateStudentRecord(id) {
  const { data } = getData();

  if (id) {
    /* Display data */
    const content = data.find((obj) => obj.id === id);
    console.table(content);
  } else {
    console.log(`Something went wrong. You need to provide a valid id `);
  }
  showMenu();
}
