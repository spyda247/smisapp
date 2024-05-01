import { writeDataToFileDB, getData, showMenu } from "./utils.js";

export default function updateStudentRecord(id, feild, value) {
  const { data, path } = getData();
  if (id) {
    /* Update data */
    const index = data.findIndex((obj) => obj.id === id);
    if (index === -1) {
      console.log(`Can not find record with id: ${id}`);
    } else {
      data[index][feild] = value;
      console.log(`Record with id: ${id} modified successfully`);
    }

    /* Write data to db */
    writeDataToFileDB(path, JSON.stringify(data));
  } else {
    console.log(`Something went wrong. You need to provide a valid id `);
  }
  showMenu();
}
