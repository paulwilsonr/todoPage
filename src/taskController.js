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
    newTask() {
        const newTaskArr = Array.from(document.querySelectorAll('#createTask input')
        ).reduce((acc, input) => ({ ...acc, [input.id]: input.value }), {});
        const newTask = new taskInfoHolder(newTaskArr);
        const importantCheck = document.querySelector('#priority');
        newTask.key = localStorage.length;
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

