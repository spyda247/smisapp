import { writeDataToFileDB, readDataFromFile } from "./utils.js";

export default function updateStudentRecord(id) {
  const path = "./db.json";
  /* Get existing data */
  const fileContents = readDataFromFile("./db.json");
  const data = JSON.parse(fileContents) || [];

  if (id) {
    /* Display data */
    const content = data.find((obj) => obj.id === id);
    console.table(content);
  } else {
    console.log(`Something went wrong. You need to provide a valid id `);
  }
}
