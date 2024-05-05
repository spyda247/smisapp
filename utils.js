import displayMenu from "./display_menu.js";

export function showMenu(interval = 1000) {
  setTimeout(() => {
    displayMenu();
  }, interval);
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
