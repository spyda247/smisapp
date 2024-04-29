import { writeDataToFileDB, readDataFromFile } from "./utils.js";

export default function addStudentRecord(record) {
  const path = "./db.json";
  /* Get existing data */
  const fileContents = readDataFromFile("./db.json");
  const data = JSON.parse(fileContents) || [];

  if (typeof record === "object" && !Array.isArray(record)) {
    /* Generate unique ID */
    const uniqueId = crypto.randomUUID();
    record.id = uniqueId;

    /* Add record to existing data */
    const content = [...data, record];

    /* Write data to db */
    writeDataToFileDB(path, JSON.stringify(content));
  } else {
    console.log(
      `Something went wrong. Expecting an object but got an 'array' or 'primitive' type}`
    );
  }
}
