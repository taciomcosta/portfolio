import { en_en, dynamic_en_en } from "./languages/en_en.js";
import { pt_br, dynamic_pt_br } from "./languages/pt_br.js";

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

export function handleCase(event) {
  fillCaseContent(event.target.id);
  closeSection('casesSection');
  openSection('caseDetailsSection');
  focusOnSection('caseDetailsSection');
}

function fillCaseContent(caseId) {
  const selectedLanguage = document.getElementById('selectedLanguage');
  const content = getCaseContent(caseId, selectedLanguage.innerText);
  document.getElementById('caseImage').src = 'res/images/' + content.image;
  document.getElementById('caseTitle').innerText = content.name;
  document.getElementById('caseDescription').innerText = content.description;
  generateChildren('techStackChips', content.techStack.map(tech => `<span>${tech}</span>`));
  generateChildren('contributionsList', content.contributions.map(tech => `<li class="description">${tech}</li>`));
}

function generateChildren(parentId, childrenList) {
  const parent = document.getElementById(parentId)
  parent.innerHTML = '';
  childrenList.forEach(child => parent.innerHTML += child);
}

function getCaseContent(caseId, language) {
  if (language === 'Português')
    return dynamic_pt_br.cases.filter(c => c.id === caseId).pop();
  else
    return dynamic_en_en.cases.filter(c => c.id === caseId).pop();
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