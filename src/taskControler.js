import { taskInfoHolder } from "./taskInfoHolder";
import { cardControler } from "./taskDisplayControler";

export const taskControler = { 
    saveToStorage(task) {
        let key = JSON.stringify(window.localStorage.length);
        console.log(key);
        window.localStorage.setItem( key, JSON.stringify(task));

    },
    newTask(event) {
    let newTaskArr = Array.from(document.querySelectorAll('#createTask input')
    ).reduce((acc, input) => ({ ...acc, [input.id]: input.value }), {});
    const newTask = new taskInfoHolder(newTaskArr);
    newTask.key = localStorage.length;
    console.log(newTask);
    taskControler.saveToStorage(newTask);
    cardControler.displayAllTasks();
    },
   

};

