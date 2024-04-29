import { db } from "./db.js";
import inquirer from "inquirer";

db()
  .then((result) => {
    /* Todo */
  })
  .catch((err) => console.log(err));
