import { readDataFromFile } from "./utils.js";

export default function updateStudentRecord(confirm) {
  const path = "./db.json";
  /* Get existing data */
  const fileContents = readDataFromFile("./db.json");
  const data = JSON.parse(fileContents) || [];

  if (confirm === "Y") {
    /* Display data */
    console.table(data);
  }
}
