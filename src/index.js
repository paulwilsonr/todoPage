import './style.css';

const openMenuButton = document.querySelector(".openMenuButton");
const sideMenu = document.querySelector(".sideMenu");
const taskContainer = document.querySelector(".taskContainer");
const openNewItemMenu = document.querySelector(".openNewItemMenu");
const newItemMenu = document.querySelector(".newItemMenu");
const minimizeCard = document.querySelector(".minimizeCard");
const taskCard = document.querySelector(".taskCard");
const createTask = document.querySelector('#createTask');
const taskMenu = document.querySelector('.newTask');
const openNewTaskMenu = document.querySelector('#openNewTaskMenu');
const closeNewTaskMenu = document.querySelector('#closeNewTaskMenu');

openMenuButton.addEventListener("click", toggleSideMenu);
openNewItemMenu.addEventListener("click", function () {
    toggleHidden(newItemMenu);
});
minimizeCard.addEventListener("click", toggleCard);
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

function toggleCard() {
    if (taskCard.classList.contains('closed')) {
        minimizeCard.src = "../src/assets/contract.png";
        taskCard.classList.remove('closed');
        taskCard.classList.add('opened');
    } else {
        minimizeCard.src = "../src/assets/expand.png";
        taskCard.classList.remove('opened');
        taskCard.classList.add('closed');
    }
}
    
function createNewTask() {
   let newTask = Array.from(document.querySelectorAll('#createTask input')
   ).reduce((acc, input) => ({ ...acc, [input.id]: input.value}), {});
   console.log(newTask);
}


toggleSideMenu();