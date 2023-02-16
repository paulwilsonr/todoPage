import './style.css';
import { taskControler } from './taskController';
import { listControler } from './listController';
import { projectController } from './projectController';
//import { cardControler } from './taskDisplayControler';
//import { taskInfoHolder } from './taskInfoHolder';
import { projectDisplayController } from './projectDisplayController';

let i = 0;
const openMenuButton = document.querySelector(".openMenuButton");
const sideMenu = document.querySelector(".sideMenu");
const taskContainer = document.querySelector(".taskContainer");
const openNewItemMenu = document.querySelector(".openNewItemMenu");
const newItemMenu = document.querySelector(".newItemMenu");
const createTask = document.querySelector('#createTask');
const taskMenu = document.querySelector('#newTask');
const openNewTaskMenu = document.querySelector('#openNewTaskMenu');
const closeNewTaskMenu = document.querySelector('#closeNewTaskMenu');
const addChecklistItem = document.querySelector('#addChecklist');
const addEditChecklistItem = document.querySelector('#addEditChecklist')
const dueToday = document.querySelector('#dueToday');
const dueTomorrow = document.querySelector('#dueTomorrow');
const dueThisWeek = document.querySelector('#dueThisWeek');
const dueAll = document.querySelector('#dueAll');
const closeNewProjectMenu = document.querySelector('#closeNewProjectMenu');
const projectMenu = document.querySelector('#newProject')
const openNewProjectMenu = document.querySelector('#openNewProjectMenu');
const sideMenuOpenNewProject = document.querySelector('#sideMenuProjectMenu')
const createProject = document.querySelector('#newProject');
const closeEditMenu = document.querySelector('#closeEditTaskMenu');
const editMenu = document.querySelector('#editTask')
const editTask = document.querySelector('#editTaskForm')
const closeEditProject = document.querySelector('#closeEditProjectMenu');


openMenuButton.addEventListener("click", toggleSideMenu);
openNewItemMenu.addEventListener("click", function () {
    toggleHidden(newItemMenu);
});

createTask.addEventListener("submit", newTask);

createProject.addEventListener("submit", newProject);

editTask.addEventListener('submit', function() {
    taskControler.editTask();
});

openNewTaskMenu.addEventListener("click", function () {
    toggleHidden(newItemMenu);
    taskControler.resetNewTaskMenu();
    toggleHidden(taskMenu);

})
closeNewTaskMenu.addEventListener("click", function () {
    toggleHidden(taskMenu);
});

closeEditMenu.addEventListener("click", function () {
    toggleHidden(editMenu);
});

addEditChecklistItem.addEventListener("click", function() {
    checklistController('edit')
});
addChecklistItem.addEventListener("click", function() {
    checklistController('new')
});

dueToday.addEventListener('click', function() {
    listControler.dueDateArrMaker('today');
    
});

dueTomorrow.addEventListener('click', function() {
    listControler.dueDateArrMaker('tomorrow');
    
});

dueThisWeek.addEventListener('click', function() {
    listControler.dueDateArrMaker('week');
    
});

dueAll.addEventListener('click', function() {
    listControler.dueDateArrMaker('all');
    
})

closeNewProjectMenu.addEventListener("click", function () {
    toggleHidden(projectMenu);
})

openNewProjectMenu.addEventListener("click", function () {
    toggleHidden(newItemMenu);
    toggleHidden(projectMenu);

})

sideMenuOpenNewProject.addEventListener("click", function () {
    toggleSideMenu();
    toggleHidden(projectMenu);

})

closeEditProject.addEventListener('click', function () {
    toggleHidden(document.querySelector('#editProject'))
});

document.querySelector('#editProject').addEventListener('submit', function () {
    projectController.editProject();
    toggleHidden(document.querySelector('#editProject'));
})

export function toggleSideMenu() {
    toggleHidden(sideMenu);
    if (sideMenu.classList.contains('hidden')) {
        taskContainer.style.gridColumn = "1 / 3";
    } else {
        taskContainer.style.gridColumn = "2 / 3";
    }
};


//switches between hidden and not hidden for elements

export function toggleHidden(hiddenElement) {
    if (hiddenElement.classList.contains('hidden')) {
        hiddenElement.classList.remove('hidden');
    } else {
        hiddenElement.classList.add('hidden');
    }
};

export function checklistController(newOrEdit) {
    let checklistContainer;
    let inputClass;
    if(newOrEdit == 'edit'){
        checklistContainer = document.querySelector('#editChecklistContainer');
        inputClass = 'editChecklistInput'
    } else {
        checklistContainer = document.querySelector('#checklistContainer')
        inputClass = 'newChecklistInput'
    }
    const newChecklistDiv = document.createElement('div');
    newChecklistDiv.setAttribute('class', 'checklistItem');
    const newChecklistItem = document.createElement('input');
    newChecklistItem.setAttribute('class','justifyLeft checklistInput');
    newChecklistItem.classList.add(inputClass);
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

function newTask() {
    taskControler.newTask();
    toggleHidden(newItemMenu);
    
};

function newProject() {
    projectController.newProject();
    toggleHidden(projectMenu);
}


toggleSideMenu(); 
listControler.dueDateArrMaker('all');
projectDisplayController.displayProjects();
taskControler.setLocalStorageTaskKey();
projectController.projectKeyMaker();
