import { en_en } from "./languages/en_en.js";
import { pt_br } from "./languages/pt_br.js";

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
}

export function closeMenu() {
  const menu = document.getElementById('menuToggleInput');
  menu.checked = false;
}

export function handleCase() {
  closeSection('casesSection');
  openSection('caseDetailsSection');
  focusOnSection('caseDetailsSection');
}

function closeSection(id) {
  const casesSection = document.getElementById(id);
  casesSection.style.display = 'none';

}

function openSection(id) {
  const caseDetailsSection = document.getElementById(id);
  caseDetailsSection.style.display = 'flex';
}

function focusOnSection(id) {
  location.href = '#' + id;
}

export function handleClosingCase() {
  closeSection('caseDetailsSection');
  openSection('casesSection');
  focusOnSection('casesSection');
}