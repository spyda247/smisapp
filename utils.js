import * as fs from "node:fs";
import displayMenu from "./display_menu.js";

export function checkFileDbExists(path) {
  try {
    if (fs.existsSync(path)) {
      return true;
    }
    return false;
  } catch (error) {
    console.error("Something went wrong", error);
  }
}

export function writeDataToFileDB(path, content) {
  try {
    fs.writeFileSync(path, content);
    console.log("Data written successfuly");
    return content;
  } catch (error) {
    console.error("Something went wrong. Could not write to file");
    return null;
  }
}

export function readDataFromFile(path) {
  try {
    const data = fs.readFileSync(path, "utf-8");
    return data;
  } catch (error) {
    console.error("Something went wrong", error);
    return null;
  }
}

export function showMenu(interval = 1000) {
  setTimeout(() => {
    displayMenu();
  }, interval);
}

export function getData() {
  const path = "./db.json";
  /* Get existing data */
  const fileContents = readDataFromFile(path);
  const data = JSON.parse(fileContents) || [];

  return { data, path };
}

export function capitalizeFirstLetter(str) {
  const splitStr = str.split(" ");
  const words = splitStr.map((word) => {
    const firstLetter = word[0].toUpperCase();
    const restLetters = word.slice(1).toLowerCase();
    return firstLetter + restLetters;
  });
  const newStr = words.join(" ");
  return newStr;
}
