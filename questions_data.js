export const qRecords = [
  {
    type: "input",
    name: "confirm",
    message: "Y/N",
  },
];
export const qRecordById = [
  {
    type: "input",
    name: "id",
    message: "Enter Student id",
  },
];

export const qUpdateRecord = [
  {
    type: "input",
    name: "id",
    message: "Enter Student id",
  },
  {
    type: "input",
    name: "feild",
    message: "Feild name(Options are name, age and grade)",
  },
  {
    type: "input",
    name: "value",
    message: "Enter update value",
  },
];

export const qInputRecord = [
  {
    type: "input",
    name: "full_name",
    message: "Enter student's fullname",
  },
  {
    type: "input",
    name: "age",
    message: "Enter Student's age",
    default() {
      return "18";
    },
  },
  {
    type: "input",
    name: "grade",
    message: "Enter Student's grade",
  },
];
