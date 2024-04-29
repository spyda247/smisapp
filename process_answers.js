import inquirer from "inquirer";
import addStudentRecord from "./lib/addStudentRecord.js";
import updateStudentRecord from "./lib/updateStudentRecord.js";
import displayStudentRecordById from "./lib/displayStudentRecordById.js";
import displayStudentRecords from "./lib/displayStudentRecords.js";
import {
  qInputRecord,
  qUpdateRecord,
  qRecordById,
  qRecords,
} from "./questions_data.js";

export default function processAnswers(answers) {
  switch (answers.menu) {
    case "Add Student Record":
      inquirer.prompt(qInputRecord).then((answers) => {
        addStudentRecord(answers);
      });
      break;

    case "Update Student Record":
      inquirer.prompt(qUpdateRecord).then((answers) => {
        //console.log(JSON.stringify(answers, null, "  "));
        updateStudentRecord(answers.id, answers.feild, answers.value);
      });
      break;

    case "Display Student Record By Id":
      inquirer.prompt(qRecordById).then((answers) => {
        //console.log(JSON.stringify(answers, null, "  "));
        displayStudentRecordById(answers.id);
      });
      break;

    case "Display All Student Records":
      inquirer.prompt(qRecords).then((answers) => {
        //console.log(JSON.stringify(answers, null, "  "));
        displayStudentRecords(answers.confirm);
      });
      break;

    default:
      break;
  }
}
