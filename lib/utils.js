import * as fs from "node:fs";

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
