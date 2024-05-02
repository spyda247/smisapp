import { getData, showMenu } from "./utils.js";

export default function updateStudentRecord(confirm) {
  const { data } = getData();
  if (confirm === "Y") {
    /* Display data */
    data.length === 0
      ? console.log("No data to display. Add a Student record")
      : console.table(data);
  }
  showMenu();
}
