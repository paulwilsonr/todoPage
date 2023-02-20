import './style.css';
import { taskControler } from './taskController';
import { listControler } from './listController';
import { projectController } from './projectController';
import { cardControler } from './taskDisplayControler';
import { projectDisplayController } from './projectDisplayController';

let i = 0;
const openMenuButton = document.querySelector(".openMenuButton");
const sideMenu = document.querySelector(".sideMenu");
const taskContainer = document.querySelector(".taskContainer");
const openNewItemMenu = document.querySelector("#openNewItemMenu");
const newItemMenu = document.querySelector(".newItemMenu");
const createTask = document.querySelector('#createTask');
const taskMenu = document.querySelector('#newTask');
const openNewTaskMenu = document.querySelector('#openNewTaskMenu');
const closeNewTaskMenu = document.querySelector('#closeNewTaskMenu');
const addChecklistItem = document.querySelector('#addChecklist');
const addEditChecklistItem = document.querySelector('#addEditChecklist');
const pastDue = document.querySelector('#pastDue');
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
const taskTitle = document.querySelector('#title');
const editTaskTitle = document.querySelector('#editTitle');
const projectTitle = document.querySelector('#projectTitle');
const editProjectTitle = document.querySelector('#editProjectTitle');

openMenuButton.addEventListener("click", toggleSideMenu);
openNewItemMenu.addEventListener("click", function () {
    toggleHidden(newItemMenu);
});

document.querySelector('#sideMenuNewTasksMenu').addEventListener('click', function() {
    toggleHidden(taskMenu);
})

createTask.addEventListener("submit", newTask);

createProject.addEventListener("submit", newProject);

document.querySelector('#task').addEventListener('click', (event) => {
    if(taskTitle.validity.valueMissing) {
        taskTitle.setCustomValidity("Each task requires a name")
    }

})
document.querySelector('#editTask').addEventListener('click', (event) => {
    if(editTaskTitle.validity.valueMissing) {
        editTaskTitle.setCustomValidity("Each task requires a name")
    }

})
   
document.querySelector('#projectSubmit').addEventListener('click', (event) => {
    if(projectTitle.validity.valueMissing) {
        projectTitle.setCustomValidity("Each project requires a name")
    }

})

document.querySelector('#editProjectSubmit').addEventListener('click', (event) => {
    if(editProjectTitle.validity.valueMissing) {
        editProjectTitle.setCustomValidity("Each project requires a name")
    }

})

editTask.addEventListener('submit', (event) => {
    
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

pastDue.addEventListener('click', function() {
    listControler.dueDateArrMaker('pastDue');
})

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
        document.querySelector('#dueDateBar').style.gridColumn = "1 / 3";
    } else {
        taskContainer.style.gridColumn = "2 / 3";
        document.querySelector('#dueDateBar').style.gridColumn = "2 / 3";
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

export function dueDateButtonController() {
    const taskArr = [];
        const tempTaskArr = JSON.parse(localStorage.getItem('tasks'));
        const projectsArr = JSON.parse(localStorage.getItem('projects'));
        for(let i = 0; i < projectsArr.length; i++) {
            for(let j = 0; j < projectsArr[i].taskArr.length; j++) {
                tempTaskArr.push(projectsArr[i].taskArr[j]);
            }
        };
        for (let i = 0; i < tempTaskArr.length; i++) {

            let currentTask = tempTaskArr[i];
            if (listControler.sortTasksByDate('pastDue', currentTask.date, currentTask.completed)) {
                const taskId = '#'+currentTask.key;
                taskArr.push(currentTask);
            }
            
        };
        if(taskArr.length > 0) {
            document.querySelector('#pastDue').classList.add('pastDueButton');
        } else {
            document.querySelector('#pastDue').classList.remove('pastDueButton');
            document.querySelector('#pastDue').classList.remove('pastDueButtonClicked');
        }
}

function initialSetup() {
    if(!JSON.parse(localStorage.getItem('tasks'))|| !JSON.parse(localStorage.getItem('projects'))) {
    localStorage.setItem('tasks',JSON.stringify([]));
    localStorage.setItem('projects', JSON.stringify([]));
    localStorage.setItem('projectKey', JSON.stringify([]));
    localStorage.setItem('taskKey', JSON.stringify([]))
    }
}
initialSetup();
cardControler.sideMenuTaskDisplay();
toggleSideMenu(); 
listControler.dueDateArrMaker('all');
projectDisplayController.displayProjects();
taskControler.setLocalStorageTaskKey();
projectController.projectKeyMaker();
dueDateButtonController();