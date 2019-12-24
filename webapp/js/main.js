import { en_en } from "./languages/en_en.js";
import { pt_br } from "./languages/pt_br.js";
import { fillCaseContent } from './cases.js';

export function main() {
  setUpLanguage();
}

function setUpLanguage() {
  const strings = getSelectedLanguageStrings();
  Object.keys(strings).forEach(key => {
    const e = document.getElementById(key);
    e.innerText = strings[key];
  })
}

function getSelectedLanguageStrings() {
  const selectedLanguage = document.getElementById('selectedLanguage');
  return selectedLanguage.innerText == 'Português' ? pt_br : en_en
}

export function switchLanguage() {
  const selectedLanguage = document.getElementById('selectedLanguage');
  if (selectedLanguage.innerText === 'English')
    selectedLanguage.innerText = 'Português';
  else
    selectedLanguage.innerText = 'English';
  setUpLanguage();
  fillCaseContent();
}

export function closeMenu() {
  const menu = document.getElementById('menuToggleInput');
  menu.checked = false;
}
