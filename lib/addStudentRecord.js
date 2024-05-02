import { writeDataToFileDB, getData, showMenu } from "./utils.js";

export default function addStudentRecord(record) {
  const { data, path } = getData();

  const messages = [
    "Something went wrong. Expected an object but got an 'array' or 'primitive' type",
    "Something went wrong. Please enter a valid number for age",
  ];

  if (typeof record === "object" && !Array.isArray(record)) {
    if (!parseInt(record.age)) {
      console.log(messages[1]);
    } else {
      /* Generate unique ID */
      const uniqueId = crypto.randomUUID();
      record.id = uniqueId;

      /* Add record to existing data */
      const content = [...data, record];

      /* Write data to db */
      writeDataToFileDB(path, JSON.stringify(content));
    }
  } else {
    console.log(messages[0]);
  }
  showMenu();
}
