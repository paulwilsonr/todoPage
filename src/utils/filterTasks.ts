type objType = {
  name: string;
  details: string;
  due: string;
  priority: string;
  project: string;
  id: string;
};

function filterTasks(taskArr: objType[], range: string[]) {
  const today = new Date();
  switch (range[0]) {
    case 'all':
      return taskArr;
      break;
    case 'today':
      return taskArr.filter(task => {
        const taskDate = new Date(task.due.replace(/-/g, '/'));
        return (
          today.getFullYear() === taskDate.getFullYear() &&
          today.getMonth() === taskDate.getMonth() &&
          today.getDate() === taskDate.getDate()
        );
      });
      break;
    case 'tomorrow':
      return taskArr.filter(task => {
        const taskDate = new Date(task.due.replace(/-/g, '/'));
        return (
          today.getFullYear() === taskDate.getFullYear() &&
          today.getMonth() === taskDate.getMonth() &&
          today.getDate() + 1 === taskDate.getDate()
        );
      });
      break;
    case 'week':
      return taskArr.filter(task => {
        const taskDate = new Date(task.due.replace(/-/g, '/'));
        console.log(taskDate.getDate());
        console.log(today.getDate() + 7);
        return (
          today.getFullYear() === taskDate.getFullYear() &&
          today.getMonth() === taskDate.getMonth() &&
          today.getDate() <= taskDate.getDate() &&
          today.getDate() + 7 >= taskDate.getDate()
        );
      });
      break;
    case 'project':
      return taskArr.filter(task => {
        return task.project === range[1];
      });
      break;
    default:
      return taskArr;
      break;
  }
  return taskArr;
}

export default filterTasks;
