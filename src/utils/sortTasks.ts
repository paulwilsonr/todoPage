
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

    return sortedTaskArr;
}

export default sortTasks;