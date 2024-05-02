import {
  writeDataToFileDB,
  getData,
  showMenu,
  capitalizeFirstLetter,
} from "./utils.js";

export default function updateStudentRecord(id, feild, value) {
  const { data, path } = getData();
  const feilds = ["age", "name", "grade"];
  const messages = [
    `Something went wrong. You need to provide a valid id or select the right option`,
    "Something went wrong. Please enter a valid number for age",
    `Can not find record with id: ${id}`,
    `Record with id: ${id} modified successfully`,
  ];

  if (id && feilds.includes(feild)) {
    if (feild === "age" && !parseInt(value)) {
      console.log(messages[1]);
    } else {
      /* Update data */
      const index = data.findIndex((obj) => obj.id === id);
      if (index === -1) {
        console.log(messages[2]);
      } else {
        const newValue =
          feild === "name" || feild === "grade"
            ? capitalizeFirstLetter(value)
            : value;
        data[index][feild] = newValue;
        console.log(messages[3]);
      }

      /* Write data to db */
      writeDataToFileDB(path, JSON.stringify(data));
    }
  } else {
    console.log(messages[0]);
  }
  showMenu();
}
