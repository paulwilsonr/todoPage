import parseISO from "date-fns/parseISO";
import isToday from "date-fns/isToday";
import format from "date-fns/format";
import isTomorrow from "date-fns/isTomorrow";
import isThisWeek from "date-fns/isThisWeek";
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
                return isToday(taskDate);
            case 'tomorrow':
                return isTomorrow(taskDate);
            case 'week':
                return isThisWeek(taskDate);
            case 'all':
                return true;
        }
    },
    dueDateArrMaker(dueDate) {
        const taskArr = [];
        const tempTaskArr = Object.values(localStorage);
        for (let i = 0; i < tempTaskArr.length; i++) {

            let currentTask = JSON.parse(tempTaskArr[i]);
            if (listControler.sortTasksByDate(dueDate, currentTask.date)) {
                taskArr.push(currentTask);
            }
            cardControler.displayTasks(taskArr);
        };
    },
}
