import parseISO from "date-fns/parseISO";
import isToday from "date-fns/isToday";
import format from "date-fns/format";
import isTomorrow from "date-fns/isTomorrow";
import isThisWeek from "date-fns/isThisWeek";
import isBefore from "date-fns/isBefore";
import { cardControler } from "./taskDisplayControler";

export const listControler = {
    getCurrentDate() {
        const date = format(new Date(), 'yyyy-LL-dd');
        return date;
    },
    sortTasksByDate(endDate, taskDate) {
        taskDate = parseISO(taskDate);
        switch (endDate) {
            case 'today':
                cardControler.titleChanger('Due Today');
                return isToday(taskDate);
            case 'tomorrow':
                cardControler.titleChanger('Due Tomorrow');
                return isTomorrow(taskDate);
            case 'week':
                cardControler.titleChanger('Due This Week');
                return isThisWeek(taskDate);
            case 'all':
                cardControler.titleChanger('All Tasks');
                return true;
        }
    },
    dueDateArrMaker(dueDate) {
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
            if (listControler.sortTasksByDate(dueDate, currentTask.date)) {
                taskArr.push(currentTask);
            }
            
        };
            cardControler.displayTasks(listControler.sortList(taskArr));
            
    },
    sortList (taskArr) {
        const importantArr = [];
        const regularArr = [];
        for(let i = 0; i < taskArr.length; i++) {
            if(taskArr[i].priority === 'true') {
                importantArr.push(taskArr[i]);
            } else {
                regularArr.push(taskArr[i]);
            }
        };
        listControler.orderByDate(importantArr);
        listControler.orderByDate(regularArr);
        
         return importantArr.concat(regularArr);
    },

    orderByDate(taskArr) {
        taskArr.sort((a, b) => {
            let dateA = parseISO(a.date);
            let dateB = parseISO(b.date);
        
            if (isBefore(dateA, dateB)) {
                return -1;
            }
            if (isBefore(dateB, dateA)) {
                return 1;
            }
            return 0;
        })
    },
}
