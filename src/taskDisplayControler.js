import { projectController } from "./projectController";
import { projectDisplayController } from "./projectDisplayController";
import { taskControler } from "./taskController";
import { format } from "date-fns";
import { listControler } from "./listController";


export const cardControler = {
    createCard(newCardInfo, taskType) {
        const newCard = document.createElement('div');
        newCard.setAttribute('class', 'taskCard opened');
        newCard.setAttribute('id', newCardInfo.key)
        const newTitle = document.createElement('h3');
        newTitle.classList.add('title');
        newTitle.innerText = newCardInfo.title;
        newCard.appendChild(newTitle);

        const newDueDate = document.createElement('h3');
        newDueDate.classList.add('taskDueDate');
        newDueDate.innerText = format(new Date(newCardInfo.date), 'MMM-d');
        newCard.appendChild(newDueDate);

        const completedCheck = document.createElement('div');
        completedCheck.classList.add('completedCheck');
        const completedLabel = document.createElement('label');
        completedLabel.setAttribute('for', 'completed');
        completedLabel.innerText = 'Completed?';
        completedCheck.appendChild(completedLabel);
        const completedCheckbox = document.createElement('input');
        completedCheckbox.setAttribute('type', 'checkbox');
        completedCheckbox.setAttribute('name', 'Completed');
        completedCheckbox.setAttribute('id', 'completed');
        completedCheckbox.setAttribute('class', 'completed');
        if (newCardInfo.completed) {
            completedCheckbox.checked = true;
            newCard.classList.add('taskCompleted')
        }
        completedCheck.appendChild(completedCheckbox);
        newCard.appendChild(completedCheck);

        const newDescription = document.createElement('p');
        const descriptionText = document.createElement('h4');
        const descriptionDiv = document.createElement('div');
        descriptionDiv.setAttribute('class', 'notes');
        descriptionText.innerText = 'Description:';
        newDescription.classList.add('taskDescription');
        newDescription.innerText = newCardInfo.description;
        descriptionDiv.appendChild(descriptionText);
        descriptionDiv.appendChild(newDescription);
        newCard.appendChild(descriptionDiv);
        if (newCardInfo.checklist) {
            const checklistDiv = document.createElement('div');
            checklistDiv.classList.add('checklist');
            const checklistText = document.createElement('h4');
            checklistText.innerText = 'Checklist:'
            checklistDiv.appendChild(checklistText);
            newCard.appendChild(checklistDiv);

            for (let i = 0; i < newCardInfo.checklist.length; i++) {
                const checkName = 'checklist' + i;
                const checklistItemDiv = document.createElement('div');
                const checklistItem = document.createElement('input');
                checklistItemDiv.classList.add('checklistItem');
                checklistItem.setAttribute('type', 'checkbox');
                checklistItem.setAttribute('name', checkName);
                checklistItem.setAttribute('id', checkName);
                checklistItem.setAttribute('class', 'checklistCheckbox')
                checklistItemDiv.appendChild(checklistItem);

                const checklistLabel = document.createElement('label');
                checklistLabel.setAttribute('for', checkName);
                if (newCardInfo.checklist[i][1]) {
                    checklistItem.checked = true;
                    checklistItemDiv.classList.add('strikethrough');

                }
                checklistLabel.innerText = newCardInfo.checklist[i][0];
                checklistItemDiv.appendChild(checklistLabel);

                checklistDiv.appendChild(checklistItemDiv);
            };
        }

        const editText = document.createElement('p');
        editText.classList.add('edit');
        editText.classList.add('pointer');
        editText.innerText = 'edit';
        newCard.appendChild(editText);

        const deleteText = document.createElement('p');
        deleteText.classList.add('delete');
        deleteText.setAttribute('id', newCardInfo.key);
        if (taskType === 'project') {
            deleteText.classList.add('projectTask');
        };
        deleteText.classList.add('pointer');
        deleteText.innerText = 'delete';
        newCard.appendChild(deleteText);


        const minIcon = document.createElement('img');
        minIcon.setAttribute('class', 'smallIcon minimizeCard pointer');
        minIcon.setAttribute('src', '../src/assets/contract.png');
        minIcon.setAttribute('alt', 'Minimize task');
        newCard.appendChild(minIcon);

        document.querySelector('.taskContainer').appendChild(newCard);
    },
    sideBarTaskCardMaker(newCardInfo) {
        const newTaskCard = document.createElement('div');
        newTaskCard.setAttribute('id', newCardInfo.key);
        newTaskCard.setAttribute('class', 'sideMenuOption pointer sideMenuTaskCard');

        const newTaskTitle = document.createElement('p');
        newTaskTitle.setAttribute('class', 'sideMenuTaskTitle');
        newTaskTitle.innerHTML = newCardInfo.title;
        newTaskCard.appendChild(newTaskTitle);

        const newTaskDate = document.createElement('p');
        newTaskDate.setAttribute('class', 'sideMenuTaskDate');
        newTaskDate.innerText = format(new Date(newCardInfo.date), 'MMM-d');
        newTaskCard.appendChild(newTaskDate);
        document.querySelector('#tasksSideMenuContainer').appendChild(newTaskCard);
    },
    clearTaskDisplay() {
        document.querySelector('.taskContainer').innerText = '';
    },
    displayTasks(taskArr, taskType = 'task', projectKey = 'task') {

        cardControler.clearTaskDisplay();
        for (let i = 0; i < taskArr.length; i++) {
            cardControler.createCard(taskArr[i], taskType);
        }
        cardControler.addEvents(projectKey)

    },

    addEvents(projectKey) {
        document.querySelectorAll('.minimizeCard').forEach(item => {
            item.addEventListener('click', event => {
                toggleCard(item, event.target.id);
            })

        });
        document.querySelectorAll('.delete').forEach(item => {
            item.addEventListener('click', event => {
                this.deleteTask(item, projectKey);
            })
        });
        document.querySelectorAll('.completed').forEach(item => {
            item.addEventListener('click', event => {
                this.completeTask(item, projectKey);

            })
        });
        document.querySelectorAll('.checklistCheckbox').forEach(item => {
            item.addEventListener('click', event => {
                this.completeChecklist(item, projectKey);
            })
        });
        document.querySelectorAll('.edit').forEach(item => {
            item.addEventListener('click', event => {
                taskControler.editMenuMaker(item, projectKey);
            })
        });
        document.querySelectorAll('.sideMenuTaskCard').forEach(item => {
            item.addEventListener('click', event => {
                cardControler.clearTaskDisplay();
                const currentTask = [];
                currentTask.push(taskControler.findCurrentTask(JSON.parse(localStorage.getItem('tasks')), item.id)[0]);
                cardControler.displayTasks(currentTask);
                
            })
        })

    },

    completeTask(button, projectKey) {
        const taskCard = button.parentElement.parentElement;

        if (projectKey === 'task') {                                 //changes regular tasks and saves back to tasks localStorage
            const taskArr = JSON.parse(localStorage.getItem('tasks'));
            const currentTaskArr = taskControler.findCurrentTask(taskArr, taskCard.id)
            if (button.checked) {                                   //toggles completed status
                taskCard.classList.add('taskCompleted');
                currentTaskArr[0].completed = true;
            } else {
                taskCard.classList.remove('taskCompleted');
                taskCard.classList.remove('taskCompleted')
                currentTaskArr[0].completed = false;
            }

            taskArr.splice(currentTaskArr[1], 1, currentTaskArr[0]);
            localStorage.setItem('tasks', JSON.stringify(taskArr));
        } else {                                                    //changes project tasks and saves back to project in localStorage
            const currentProject = projectDisplayController.getProjectFromStorage(projectKey);
            const currentTaskArr = taskControler.findCurrentTask(currentProject.taskArr, taskCard.id)
            if (button.checked) {                                   //toggles completed status
                taskCard.classList.add('taskCompleted');
                currentTaskArr[0].completed = true;
            } else {
                taskCard.classList.remove('taskCompleted');
                currentTaskArr[0].completed = false;
            }
            taskArr.splice(currentTaskArr[1], 1, currentTaskArr[0]);
            projectController.pushCurrentProject(currentProject);
        };
    },
    completeChecklist(button, projectKey) {
        const taskCard = button.parentElement.parentElement.parentElement;
        const checklistDiv = button.parentElement;
        let checklistArrNumber = button.id.replace('checklist', '');
        if (projectKey === 'task') {

            const taskArr = JSON.parse(localStorage.getItem('tasks'));
            const currentTaskArr = taskControler.findCurrentTask(taskArr, taskCard.id);

            if (button.checked) {                                   //toggles completed status
                checklistDiv.classList.add('strikethrough');
                currentTaskArr[0].checklist[checklistArrNumber][1] = true;
            } else {
                checklistDiv.classList.remove('strikethrough');
                currentTaskArr[0].checklist[checklistArrNumber][1] = false;
            }

            taskArr.splice(currentTaskArr[1], 1, currentTaskArr[0]);
            localStorage.setItem('tasks', JSON.stringify(taskArr));

        } else {
            const currentProject = projectDisplayController.getProjectFromStorage(projectKey);
            const currentTaskArr = taskControler.findCurrentTask(currentProject.taskArr, taskCard.id);
            if (button.checked) {                                   //toggles completed status
                checklistDiv.classList.add('strikethrough');
                currentTaskArr[0].checklist[checklistArrNumber][1] = true;
            } else {
                checklistDiv.classList.remove('strikethrough');
                currentTaskArr[0].checklist[checklistArrNumber][1] = false;
            }
            currentProject.taskArr.splice(currentTaskArr[1], 1, currentTaskArr[0]);
            projectController.pushCurrentProject(currentProject);
        }
    },
    sideMenuTaskDisplay() {
        cardControler.ClearSideMenuTasks();
        let taskArr = JSON.parse(localStorage.getItem('tasks'));
        taskArr = listControler.sortList(taskArr);
        for (let i = 0; i < taskArr.length; i++) {
            cardControler.sideBarTaskCardMaker(taskArr[i]);
        };
    },
    ClearSideMenuTasks () {
        document.querySelectorAll('.sideMenuTaskCard').forEach(item => {
            item.remove();
        })
    },
    deleteTask(button, projectKey) {
        const taskCard = button.parentElement;
        if (projectKey === 'task') {
            const taskArr = JSON.parse(localStorage.getItem('tasks'))

            for (let i = 0; i < taskArr.length; i++) {
                if (taskArr[i].key == button.id) {
                    taskArr.splice(i, 1);
                }
            }

            localStorage.setItem('tasks', JSON.stringify(taskArr))
        } else {
            const currentProject = projectDisplayController.getProjectFromStorage(projectKey);
            for (let i = 0; i < currentProject.taskArr.length; i++) {
                if (currentProject.taskArr[i].key == button.id) {
                    currentProject.taskArr.splice(i, 1);
                }
            }
            projectController.pushCurrentProject(currentProject);
        }
        taskCard.remove();
        cardControler.sideMenuTaskDisplay();
    },
    titleChanger(newTitle) {
        const title = document.querySelector('#mainTitle');
        title.innerText = newTitle;
    }
};


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

};