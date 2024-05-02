import displayMenu from "./display_menu.js";
import { checkFileDbExists, writeDataToFileDB } from "./utils.js";

(function () {
  const path = "./db.json";

  /* Check if DB exixts, if not create it */
  if (!checkFileDbExists(path)) {
    console.log("No database file found...");
    try {
      writeDataToFileDB(path, "[]");
      console.log("Database file created successfully");
    } catch (error) {
      console.log("Something bad happened....Aborting", error);
    }
  }

  /* Display App Menu */
  displayMenu();
})();
