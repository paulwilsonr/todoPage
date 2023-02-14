import { taskInfoHolder } from "./taskInfoHolder";
//import { cardControler } from "./taskDisplayControler";
import { listControler } from "./listController";
import { projectDisplayController } from "./projectDisplayController";
import { projectController } from "./projectController";

export const taskControler = {
    saveToStorage(task) {  
        console.log(task.projectId)
        if(!task.projectId){           //if task.projectId is false, it's a regular task. Otherwise it's saved in a project
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
        if(!localStorage.tasks) {
            localStorage.setItem('tasks', JSON.stringify([]));
        } else return;
    },
    checklistMaker(task) {
        const checklistClassArr = document.querySelectorAll('.checklistInput');
        const checklistValueArr = [];
        checklistClassArr.forEach(item => {
            if(item.value){
            checklistValueArr.push([item.value, false]);            //checklist[1] is false for completed. changed to true when checked later.
            } 
        })

        task.checklist = checklistValueArr;
        console.log(task.checklist)
    },
    taskKeyMaker () {
        if(!localStorage.taskKey || JSON.parse(localStorage.getItem('tasks')).length == 0) {
            localStorage.setItem('taskKey', JSON.stringify('0'))
            return '0';
        } else {
            let newTaskKey = Number(JSON.parse(localStorage.getItem('taskKey')))+1;
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
            return [currentTask, taskArrMarker];
        }
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
    resetNewTaskMenu () {
        document.querySelector('.menuHeaderText').innerHTML = 'Create New Task';
        document.querySelector('.submitButton').setAttribute('id', 'task');
    },
    newTask() {
        taskControler.setLocalStorageTaskKey();
        const projectId = document.querySelector('.submitButton').id;
        const newTaskArr = Array.from(document.querySelectorAll('#createTask input')   //get all inputs from task menu and save them to newTask
        ).reduce((acc, input) => ({ ...acc, [input.id]: input.value }), {});
        const newTask = new taskInfoHolder(newTaskArr);
        const importantCheck = document.querySelector('#priority');
        newTask.key = taskControler.taskKeyMaker();
        if (importantCheck.checked){
            newTask.priority = 'true';
        } else {
            newTask.priority = 'false';
        }
        if (newTask.checklist) {
            taskControler.checklistMaker(newTask);
        };
        if (!newTask.date) {
            newTask.date = listControler.getCurrentDate();
        };
    
        if(projectId !== 'task') {
            newTask.projectId = projectId;
        };
        taskControler.saveToStorage(newTask);
        //listControler.dueDateArrMaker('all');
        taskControler.resetNewTaskMenu();
    },


};

