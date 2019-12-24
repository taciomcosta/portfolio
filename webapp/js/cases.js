import { dynamic_en_en } from "./languages/en_en.js";
import { dynamic_pt_br } from "./languages/pt_br.js";

export function handleCase(event) {
  document.getElementById('selectedCase').innerText = event.target.id;
  fillCaseContent();
  closeSection('casesSection');
  openSection('caseDetailsSection');
  focusOnSection('caseDetailsSection');
}

function fillCaseContent() {
  const selectedLanguage = document.getElementById('selectedLanguage');
  const content = getCaseContent(selectedLanguage.innerText);
  document.getElementById('caseImage').src = 'res/images/' + content.image;
  document.getElementById('caseTitle').innerText = content.name;
  document.getElementById('caseDescription').innerText = content.description;
  generateChildren('techStackChips', content.techStack.map(tech => `<span>${tech}</span>`));
  generateChildren('contributionsList', content.contributions.map(tech => `<li class="description">${tech}</li>`));
}

function getCaseContent(language) {
  const caseId = document.getElementById('selectedCase').innerText;
  if (language === 'Português')
    return dynamic_pt_br.cases.filter(c => c.id === caseId).pop();
  else
    return dynamic_en_en.cases.filter(c => c.id === caseId).pop();
}

function generateChildren(parentId, childrenList) {
  const parent = document.getElementById(parentId)
  parent.innerHTML = '';
  childrenList.forEach(child => parent.innerHTML += child);
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