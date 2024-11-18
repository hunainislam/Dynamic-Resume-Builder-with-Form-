"use strict";

// Toggle the visibility of the Skills section (Milestone 1)

const toggleButton = document.querySelector('#toggle-skills');
const skillsSection = document.querySelector('#skills');
toggleButton === null || toggleButton === void 0 ? void 0 : toggleButton.addEventListener('click', () => {
    if (skillsSection) {
        skillsSection.style.display = skillsSection.style.display === 'none' ? 'block' : 'none';
    }
});


// Show the form to create a resume

// (Milestone 3)

const generateResumeButton = document.querySelector('#generate-resume');

const resumeForm = document.querySelector('#resume-form');

generateResumeButton === null || generateResumeButton === void 0 ? void 0 : generateResumeButton.addEventListener('click', () => {
    resumeForm.style.display = 'block';
});

// Handle form submission to generate the resume (Milestone 3)

const resumeFormElement = document.querySelector('#resume-builder-form');
resumeFormElement === null || resumeFormElement === void 0 ? void 0 : resumeFormElement.addEventListener('submit', (event) => {
    event.preventDefault();

     // Get user input

    const nameInput = document.querySelector('#name-input').value;
    const emailInput = document.querySelector('#email-input').value;
    const educationInput = document.querySelector('#education-input').value;
    const skillsInput = document.querySelector('#skills-input').value;
    const workInput = document.querySelector('#work-input').value;

    // Update resume sections with user input

    document.querySelector('#name').textContent = nameInput;
    document.querySelector('#contact').textContent = `Contact: ${emailInput}`;
    document.querySelector('#education-info').textContent = educationInput;
    const skillsList = document.querySelector('#skills-list');
    skillsList.innerHTML = '';
    skillsInput.split(',').forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill.trim();
        skillsList.appendChild(li);
    });
    document.querySelector('#work-infom').textContent = workInput;

    // Hide the form after submission
    resumeForm.style.display = 'none';

});