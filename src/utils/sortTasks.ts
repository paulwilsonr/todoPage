
type objType = {
    name: string;
    details: string;
    due: string;
    priority: string;
    project: string;
    id: string;
    completed: boolean;

};

function sortTasks(tasksArr: objType[]) {

    const sortedTaskArr = [...tasksArr]
    const completedTaskArr: objType[] = [];
    sortedTaskArr.sort((a, b) => {
        const dateA = new Date(a.due);
        const dateB = new Date(b.due)
        if (dateA < dateB) {
            return -1;
        } else if (dateA > dateB) {
            return 1;
        }
        return 0;
    })
    sortedTaskArr.forEach((task) => {
        if (!task.completed) {
            completedTaskArr.push(task)
        }
    })
    sortedTaskArr.forEach((task) => {
        if (task.completed) {
            completedTaskArr.push(task)
        }
    })


    return completedTaskArr;
}

export default sortTasks;