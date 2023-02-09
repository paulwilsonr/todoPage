import { taskInfoHolder } from "./taskInfoHolder";
import { cardControler } from "./taskDisplayControler";
import { listControler } from "./listController";

export const taskControler = {
    saveToStorage(task) {
        let key = JSON.stringify(window.localStorage.length);
        window.localStorage.setItem(key, JSON.stringify(task));

    },
    checklistMaker(task) {
        const checklistClassArr = document.querySelectorAll('.checklistInput');
        const checklistValueArr = [];
        checklistClassArr.forEach(item => {
            checklistValueArr.push(item.value);
            console.log(item.value)
        })

        task.checklist = checklistValueArr;
    },
    newTask(event) {
        //event.preventDefault();
        const newTaskArr = Array.from(document.querySelectorAll('#createTask input')
        ).reduce((acc, input) => ({ ...acc, [input.id]: input.value }), {});
        const newTask = new taskInfoHolder(newTaskArr);
        newTask.key = localStorage.length;
        if (newTask.checklist) {
            taskControler.checklistMaker(newTask);
        };
        if (!newTask.date) {
            newTask.date = listControler.getCurrentDate();
        }
        taskControler.saveToStorage(newTask);
        console.log(newTask);
        cardControler.displayTasks();
    },


};

