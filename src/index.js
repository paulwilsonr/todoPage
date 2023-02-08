import './style.css';
import { cardControler } from './taskDisplayControler';
import { taskControler } from './taskControler';
//import { taskInfoHolder } from './taskInfoHolder';

const openMenuButton = document.querySelector(".openMenuButton");
const sideMenu = document.querySelector(".sideMenu");
const taskContainer = document.querySelector(".taskContainer");
const openNewItemMenu = document.querySelector(".openNewItemMenu");
const newItemMenu = document.querySelector(".newItemMenu");
const createTask = document.querySelector('#createTask');
const taskMenu = document.querySelector('.newTask');
const openNewTaskMenu = document.querySelector('#openNewTaskMenu');
const closeNewTaskMenu = document.querySelector('#closeNewTaskMenu');
const addChecklistItem = document.querySelector('.AddChecklist');
const checklistContainer = document.querySelector('#checklistContainer');
let i = 1;


openMenuButton.addEventListener("click", toggleSideMenu);
openNewItemMenu.addEventListener("click", function () {
    toggleHidden(newItemMenu);
});

createTask.addEventListener("submit", function(event) {
    taskControler.newTask(event);
    toggleHidden(newItemMenu);
});

openNewTaskMenu.addEventListener("click", function () {
    toggleHidden(newItemMenu);
    toggleHidden(taskMenu);

})
closeNewTaskMenu.addEventListener("click", function () {
    toggleHidden(taskMenu);
})

addChecklistItem.addEventListener("click",checklistController);

function toggleSideMenu() {
    toggleHidden(sideMenu);
    if (sideMenu.classList.contains('hidden')) {
        taskContainer.style.gridColumn = "1 / 3";
    } else {
        taskContainer.style.gridColumn = "2 / 3";
    }
};


//switches between hidden and not hidden for elements

function toggleHidden(hiddenElement) {
    if (hiddenElement.classList.contains('hidden')) {
        hiddenElement.classList.remove('hidden');
    } else {
        hiddenElement.classList.add('hidden');
    }
};

function checklistController() {
    const newChecklistDiv = document.createElement('div');
    newChecklistDiv.setAttribute('class', 'checklistItem');
    const newChecklistItem = document.createElement('input');
    newChecklistItem.setAttribute('class','justifyLeft checklistInput');
    newChecklistItem.setAttribute('type', 'text');
    newChecklistItem.setAttribute('name', 'checklist');
    newChecklistItem.setAttribute('id', `checklist${i}`);
    newChecklistDiv.appendChild(newChecklistItem);
    const removeChecklistItemIcon = document.createElement('img');
    removeChecklistItemIcon.setAttribute('class', 'removeChecklist smallIcon end pointer');
    removeChecklistItemIcon.setAttribute('src', '../src/assets/close.png');
    removeChecklistItemIcon.setAttribute('alt', 'remove checklist item');
    newChecklistDiv.appendChild(removeChecklistItemIcon);
    checklistContainer.appendChild(newChecklistDiv);

    document.querySelectorAll('.removeChecklist').forEach(item => {
        item.addEventListener('click', event => {
            item.parentElement.remove();
        })})
};

function setCurrentDate () {

};

toggleSideMenu();

setCurrentDate();

cardControler.displayAllTasks();

