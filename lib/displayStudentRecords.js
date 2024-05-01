import { getData, showMenu } from "./utils.js";

export default function updateStudentRecord(confirm) {
  const { data } = getData();
  if (confirm === "Y") {
    /* Display data */
    console.table(data);
  }
  showMenu();
}
