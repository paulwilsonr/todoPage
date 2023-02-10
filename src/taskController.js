import { taskInfoHolder } from "./taskInfoHolder";
//import { cardControler } from "./taskDisplayControler";
import { listControler } from "./listController";

export const taskControler = {
    saveToStorage(task) {
        const existingTasks = JSON.parse(localStorage.getItem('tasks'));

        existingTasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(existingTasks));

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
            checklistValueArr.push(item.value);
        })

        task.checklist = checklistValueArr;
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
    newTask() {
        taskControler.setLocalStorageTaskKey();
        const newTaskArr = Array.from(document.querySelectorAll('#createTask input')
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
        taskControler.saveToStorage(newTask);
        listControler.dueDateArrMaker('all');
    },


};

