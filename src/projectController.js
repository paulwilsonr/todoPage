import { listControler } from "./listController";
import { projectInfoHolder } from "./projectInfoHolder";
import { projectDisplayController } from "./projectDisplayController";

export const projectController = {
    setLocalStorageProjectKey () {
        if(!localStorage.projects) {
            localStorage.setItem('projects', JSON.stringify([]))
        } else return;
    },
    saveToStorage(project) {
        const existingProjects = JSON.parse(localStorage.getItem('projects'));
        existingProjects.push(project);
        localStorage.setItem('projects', JSON.stringify(existingProjects));
    },
    projectKeyMaker () {
        if(!localStorage.projectKey || JSON.parse(localStorage.getItem('projects')).length == 0) {
            localStorage.setItem('projectKey', JSON.stringify('0'))
            return '0';
        } else {
            let newProjectKey = Number(JSON.parse(localStorage.getItem('projectKey')))+1;
            localStorage.setItem('projectKey', JSON.stringify(newProjectKey));
            return newProjectKey;
        }
    },

    pushCurrentProject(editedProject) {
        const projectArr = JSON.parse(localStorage.getItem('projects'));
        for(let i = 0; i < projectArr.length; i++){
            if(projectArr[i].key == editedProject.key) {
                projectArr.splice(i, 1, editedProject);
            }
        }
        localStorage.setItem('projects', JSON.stringify(projectArr));
    },
    
    newProject() {
        projectController.setLocalStorageProjectKey();
        const newProjectArr = Array.from(document.querySelectorAll('#newProject input')
        ).reduce((acc, input) => ({ ...acc, [input.id]: input.value }), {});
        const newProject = new projectInfoHolder(newProjectArr);
        newProject.key = projectController.projectKeyMaker();
        if (!newProject.date) {
            newProject.date = listControler.getCurrentDate();
        };
        newProject.taskArr = [];
        projectController.saveToStorage(newProject);
        projectDisplayController.displayProjects();
    }
}