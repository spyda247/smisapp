import displayMenu from "./display_menu.js";
import { checkFileDbExists, writeDataToFileDB } from "./utils.js";

(function () {
  const path = "./db.json";

  /* Check if DB exixts, if not create it */
  if (!checkFileDbExists(path)) {
    writeDataToFileDB(path, "[]");
  }

  /* Display App Menu */
  displayMenu();
})();
