import './style.css';
import { cardCreator } from './taskCreator';

const openMenuButton = document.querySelector(".openMenuButton");
const sideMenu = document.querySelector(".sideMenu");
const taskContainer = document.querySelector(".taskContainer");
const openNewItemMenu = document.querySelector(".openNewItemMenu");
const newItemMenu = document.querySelector(".newItemMenu");
const createTask = document.querySelector('#createTask');
const taskMenu = document.querySelector('.newTask');
const openNewTaskMenu = document.querySelector('#openNewTaskMenu');
const closeNewTaskMenu = document.querySelector('#closeNewTaskMenu');

openMenuButton.addEventListener("click", toggleSideMenu);
openNewItemMenu.addEventListener("click", function () {
    toggleHidden(newItemMenu);
});

createTask.addEventListener("submit", createNewTask);
openNewTaskMenu.addEventListener("click", function() {
    toggleHidden(newItemMenu);
    toggleHidden(taskMenu);
    
})
closeNewTaskMenu.addEventListener("click", function() {
    toggleHidden(taskMenu);
})

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
}

function toggleCard(button) {
    const taskCard = button.parentElement;

    if (taskCard.classList.contains('closed')) {
        taskCard.querySelector('.minimizeCard').src = "../src/assets/contract.png";
        taskCard.classList.remove('closed');
        taskCard.classList.add('opened');
    } else {
        taskCard.querySelector('.minimizeCard').src = "../src/assets/expand.png";
        taskCard.classList.remove('opened');
        taskCard.classList.add('closed');
    } 

}

class taskInfoHolder {
    constructor(obj) {
        this.title = obj.title;
        this.date = obj.date;
        this.description = obj.description;
        this.priority = obj.priority;
        this.checklist = obj.checklist;
        this.repeat = obj.repeat;
    }
}
    
function createNewTask() {
   let newTask = Array.from(document.querySelectorAll('#createTask input')
   ).reduce((acc, input) => ({ ...acc, [input.id]: input.value}), {});
   console.log(newTask); 
};



let testClassObj = {
    title: 'Sample Task',
    date: '1/29/23',
    description: 'Sample Descriptoin',
    priority: '1',
    checklist: ['subtask 1', 'subtask 2'],
    repeat: 'n',
}

toggleSideMenu();

const testTask = new taskInfoHolder(testClassObj);

cardCreator(testTask);
cardCreator(testTask);
cardCreator(testTask);
cardCreator(testTask);

document.querySelectorAll('.minimizeCard').forEach(item => {
    item.addEventListener('click', event =>{
        toggleCard(item);
    })
});