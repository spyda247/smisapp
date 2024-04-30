import inquirer from "inquirer";
import processAnswers from "./process_answers.js";

export default function displayMenu() {
  console.log("\nStudent Management Information System\n");

  inquirer
    .prompt([
      {
        type: "rawlist",
        name: "menu",
        message: "What do you want to do?",

        choices: [
          "Add Student Record",
          "Update Student Record",
          "Display Student Record By Id",
          "Display All Student Records",
        ],
        default() {
          return 3;
        },
      },
    ])
    .then((answers) => {
      processAnswers(answers);
    });
}
