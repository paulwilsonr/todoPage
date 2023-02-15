import { taskInfoHolder } from "./taskInfoHolder";
//import { cardControler } from "./taskDisplayControler";
import { listControler } from "./listController";
import { projectDisplayController } from "./projectDisplayController";
import { projectController } from "./projectController";
import { toggleHidden } from ".";
import { checklistController } from ".";

export const taskControler = {
    saveToStorage(task) {
        if (!task.projectId) {           //if task.projectId is false, it's a regular task. Otherwise it's saved in a project
            const existingTasks = JSON.parse(localStorage.getItem('tasks'));

            existingTasks.push(task);
            localStorage.setItem('tasks', JSON.stringify(existingTasks));
        } else {
            const currentProject = projectDisplayController.getProjectFromStorage(task.projectId);
            currentProject.taskArr.push(task);
            projectController.pushCurrentProject(currentProject);
        }
    },
    setLocalStorageTaskKey() {
        if (!localStorage.tasks) {
            localStorage.setItem('tasks', JSON.stringify([]));
        } else return;
    },
    checklistMaker(task) {
        const checklistClassArr = document.querySelectorAll('.checklistInput');
        const checklistValueArr = [];
        checklistClassArr.forEach(item => {
            if (item.value) {
                checklistValueArr.push([item.value, false]);            //checklist[1] is false for completed. changed to true when checked later.
            }
        })

        task.checklist = checklistValueArr;
    },
    taskKeyMaker() {
        if (!localStorage.taskKey || JSON.parse(localStorage.getItem('tasks')).length == 0) {
            localStorage.setItem('taskKey', JSON.stringify('0'))
            return '0';
        } else {
            let newTaskKey = Number(JSON.parse(localStorage.getItem('taskKey'))) + 1;
            localStorage.setItem('taskKey', JSON.stringify(newTaskKey));
            return newTaskKey;
        }
    },
    findCurrentTask(taskArr, taskId) {          //returns current task and array location inside array
        let currentTask;
        let taskArrMarker;          //save where task is in task array

        for (let i = 0; i < taskArr.length; i++) {
            if (taskArr[i].key == taskId) {
                currentTask = taskArr[i];
                taskArrMarker = i;
            }

        }
        return [currentTask, taskArrMarker];
    },
    toggle(button) {
        if (button.checked) {                                   //toggles completed status
            taskCard.classList.add('taskCompleted');
            currentTask.completed = true;
        } else {
            taskCard.classList.remove('taskCompleted');
            currentTask.completed = false;
        }
    },
    editMenuMaker(button, projectKey) {
        const taskCard = button.parentElement;
        let taskArr;
        if (projectKey == 'task') {
            taskArr = JSON.parse(localStorage.getItem('tasks'));


        } else {
            const currentProject = projectDisplayController.getProjectFromStorage(projectKey);
            taskArr = currentProject.taskArr;
        }
        
        const currentTaskArr = taskControler.findCurrentTask(taskArr, taskCard.id); 
        const currentTask = currentTaskArr[0];
        console.log(taskCard)
        toggleHidden(document.querySelector('#editTask'));
        document.querySelector('.menuHeaderTextEdit').innerHTML = `Edit Task:<br>${currentTask.title}`;
        document.querySelector('#editTitle').value = currentTask.title;
        document.querySelector('#editDate').value = currentTask.date;
        document.querySelector('#editDescription').value = currentTask.description;
        if (currentTask.priority) {
            document.querySelector('#editPriority').checked = true;
        };
        for (let i = 0; i < currentTask.checklist.length; i++) {
            let checklistNodes = document.querySelectorAll('.editChecklistInput');
            checklistNodes[i].value = currentTask.checklist[i][0];
            if (i + 1 < currentTask.checklist.length) {
                checklistController('edit');
            }
        };

        localStorage.setItem('tempTaskEditArrMarker', JSON.stringify(currentTaskArr[1]));
    },
    editTask() {
        //const editedTask = taskControler.getFormInput('#editTask input');
        const taskArr = JSON.parse(localStorage.getItem('tasks'));
        const taskArrMarker = JSON.parse(localStorage.getItem('tempTaskEditArrMarker'));
        const taskBeingEdited = this.findCurrentTask(taskArr, taskArrMarker);
        const newTaskArr = Array.from(document.querySelectorAll('#editTask input')   //get all inputs from task menu and save them to newTask
        ).reduce((acc, input) => ({ ...acc, [input.id]: input.value }), {});
        
        const newTask = {};
        newTask.title = newTaskArr.editTitle;
        newTask.date = newTaskArr.editDate;
        newTask.description = newTaskArr.editDescription;
        newTask.priority = newTaskArr.editPriority;
        newTask.checklist = newTaskArr.editChecklist;
        newTask.completed = taskBeingEdited.completed;
        newTask.projectId = taskBeingEdited.projectId;
        newTask.key = taskControler.taskKeyMaker();

        if(newTask.checklist) {
            taskControler.checklistMaker(newTask);
        };
        if (!newTask.date) {
            newTask.date = listControler.getCurrentDate();
        };
        
        console.log('blamo')
        console.log(newTask)
        
        
        taskArr.splice(taskArrMarker, 1, newTask);
        localStorage.setItem('tasks', JSON.stringify(taskArr));
        localStorage.removeItem('tempTaskEditArrMarker')
    },
    getFormInput(formId) {
        const fullFormId = formId;
        const newTaskArr = Array.from(document.querySelectorAll(formId)   //get all inputs from task menu and save them to newTask
        ).reduce((acc, input) => ({ ...acc, [input.id]: input.value }), {});
        const newTask = new taskInfoHolder(newTaskArr);
        
        newTask.key = taskControler.taskKeyMaker();
        
        if (newTask.checklist) {
            taskControler.checklistMaker(newTask);
        };
        if (!newTask.date) {
            newTask.date = listControler.getCurrentDate();
        };
        console.log(newTask)
        return newTask;
    },
    resetNewTaskMenu() {
        document.querySelector('.menuHeaderText').innerHTML = 'Create New Task';
        document.querySelector('.submitButton').setAttribute('id', 'task');
        document.querySelectorAll('#createTask input').forEach(item => {
            item.value = '';
        });
        document.querySelector('#titleLabel').innerText = 'New Task Name:'
        const submit = document.querySelector('.submitButton');
        submit.value = 'create';
        submit.id = 'task';
        document.querySelector('#newTask').classList.remove('editTask');
    },
    newTask() {
        taskControler.setLocalStorageTaskKey();
        const projectId = document.querySelector('.submitButton').id;
        const newTask = taskControler.getFormInput('#newTask input');
        const importantCheck = document.querySelector('#priority');
        if (projectId !== 'task') {
            newTask.projectId = projectId;
        };
        if (importantCheck.checked) {
            newTask.priority = true;
        } else {
            newTask.priority = false;
        }
        taskControler.saveToStorage(newTask);
        //listControler.dueDateArrMaker('all');
        taskControler.resetNewTaskMenu();
    },


};

