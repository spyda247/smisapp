import { showMenu, capitalizeFirstLetter } from "./utils.js";
import db from "./db_utils.js";

export default function updateStudentRecord(id, feild, value) {
  const res = db();
  res.then((db) => {
    const { updateStudentRecordById, getStudentById } = db;
    const data = getStudentById(id);

    const feilds = ["age", "name", "grade"];
    const messages = [
      `Something went wrong. You need to provide a valid id or select the right option`,
      "Something went wrong. Please enter a valid number for age",
      `Can not find record with id: ${id}`,
      `Record with id: ${id} modified successfully`,
    ];
    data.then((res) => {
      const record = res[0];
      if (id && feilds.includes(feild)) {
        if (feild === "age" && !parseInt(value)) {
          console.log(messages[1]);
        } else {
          /* Update data */
          /* const index = res.findIndex((obj) => obj.id === id); */
          if (!record.id === id) {
            console.log(messages[2]);
          } else {
            const newValue =
              feild === "name" || feild === "grade"
                ? capitalizeFirstLetter(value)
                : value;
            updateStudentRecordById(record.id, feild, newValue);
            console.log(messages[3]);
          }
        }
      } else {
        console.log(messages[0]);
      }
    });

    showMenu();
  });
}
