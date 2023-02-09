

export const cardControler = {
    createCard(newCardInfo) {
        const newCard = document.createElement('div');
        newCard.setAttribute('class', 'taskCard opened');
        const newTitle = document.createElement('h3');
        newTitle.classList.add('title');
        newTitle.innerText = newCardInfo.title;
        newCard.appendChild(newTitle);

        const newDueDate = document.createElement('h3');
        newDueDate.classList.add('taskDueDate');
        newDueDate.innerText = newCardInfo.date;
        newCard.appendChild(newDueDate);

        const completedCheck = document.createElement('div');
        completedCheck.classList.add('completedCheck');
        const completedLabel = document.createElement('label');
        completedLabel.setAttribute('for', 'completed');
        completedLabel.innerText = 'Completed?';
        completedCheck.appendChild(completedLabel);
        const completedCheckbox = document.createElement('input');
        completedCheckbox.setAttribute('type', 'checkbox');
        completedCheckbox.setAttribute('name', 'Completed');
        completedCheckbox.setAttribute('id', 'completed');
        completedCheck.appendChild(completedCheckbox);
        newCard.appendChild(completedCheck);

        const newDescription = document.createElement('p');
        const descriptionText = document.createElement('h4');
        const descriptionDiv = document.createElement('div');
        descriptionDiv.setAttribute('class', 'notes');
        descriptionText.innerText = 'Description:';
        newDescription.classList.add('taskDueDate');
        newDescription.innerText = newCardInfo.description;
        descriptionDiv.appendChild(descriptionText);
        descriptionDiv.appendChild(newDescription);
        newCard.appendChild(descriptionDiv);
        if (newCardInfo.checklist){
        const checklistDiv = document.createElement('div');
        checklistDiv.classList.add('checklist');
        const checklistText = document.createElement('h4');
        checklistText.innerText = 'Checklist:'
        checklistDiv.appendChild(checklistText);
        newCard.appendChild(checklistDiv);

        for (let i = 0; i < newCardInfo.checklist.length; i++) {
            const checkName = checklist + i;
            const checklistItemDiv = document.createElement('div');
            const checklistItem = document.createElement('input');
            checklistItemDiv.classList.add('checklistItem');
            checklistItem.setAttribute('type', 'checkbox');
            checklistItem.setAttribute('name', checkName);
            checklistItem.setAttribute('id', checkName);
            checklistItemDiv.appendChild(checklistItem);

            const checklistLabel = document.createElement('label');
            checklistLabel.setAttribute('for', checkName);
            checklistLabel.innerText = newCardInfo.checklist[i];
            checklistItemDiv.appendChild(checklistLabel);
        
            checklistDiv.appendChild(checklistItemDiv);
        };
    }

        const editText = document.createElement('p');
        editText.classList.add('edit');
        editText.innerText = 'edit';
        newCard.appendChild(editText);

        const deleteText = document.createElement('p');
        deleteText.classList.add('delete');
        deleteText.setAttribute('id', newCardInfo.key);
        deleteText.classList.add('pointer');
        deleteText.innerText = 'delete';
        newCard.appendChild(deleteText);


        const minIcon = document.createElement('img');
        minIcon.setAttribute('class', 'smallIcon minimizeCard pointer');
        minIcon.setAttribute('src', '../src/assets/contract.png');
        minIcon.setAttribute('alt', 'Minimize task');
        newCard.appendChild(minIcon);

        document.querySelector('.taskContainer').appendChild(newCard);
    },
    clearTaskDisplay() {
        document.querySelector('.taskContainer').innerText = '';
    },
    displayTasks(taskArr) {
        cardControler.clearTaskDisplay();
        for (let i = 0; i < taskArr.length; i++) {
            cardControler.createCard(taskArr[i]);
        }
        document.querySelectorAll('.minimizeCard').forEach(item => {
            item.addEventListener('click', event => {
                toggleCard(item, event.target.id);
            })
            
        });
        document.querySelectorAll('.delete').forEach(item => {
            item.addEventListener('click', event => {
                this.deleteTask(item);
            })
        });
    },
    deleteTask(button) {
        const taskCard = button.parentElement;
        localStorage.removeItem(button.id);
        taskCard.remove();

    },
    titleChanger(newTitle) {
        const title = document.querySelector('#mainTitle');
        title.innerText = newTitle;
    }
};


function toggleCard(button) {
    const taskCard = button.parentElement;

    if (taskCard.classList.contains('closed')) {
        taskCard.querySelector('.minimizeCard').src = "../src/assets/contract.png";
        taskCard.classList.remove('closed');
        taskCard.classList.add('opened');
    } else {
        taskCard.querySelector('.minimizeCard').src = "../src/assets/expand.png";
        taskCard.classList.remove('opened');
        taskCard.classList.add('closed');
    }

};