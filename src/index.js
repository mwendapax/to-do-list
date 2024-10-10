import './styles.css';
import { addCategory } from './localStorage.js';
import { appendMultip} from './fn.js';
import { mainUI } from './mainDOM.js';
import {task} from './newTask.js';
import { list } from './list.js';
import { lists } from './addList.js';
import { addListToDOM } from './addToDom.js';



(function addToDOM () {
    const content = document.querySelector('#content');
    addCategory();

    mainUI.newList.addEventListener('click', () => {
        task.title.value = '';
        task.textArea.value = '';
        task.dateSectionInput.value = '';
        content.appendChild(task.newTask);
        content.removeChild(mainUI.newList);

    });


    appendMultip(content, mainUI.header, mainUI.lists, mainUI.newList);
})();


(function addTask () {
    addListToDOM();
    task.addTask.addEventListener('click',() => {
      
        if(task.title.value.length !== 0 && task.select.value.length !== 0 && task.dateSectionInput.value.length !== 0) {
            let newList  = new list.NewList(task.title.value, task.textArea.value, task.dateSectionInput.value, task.prioritySectionInput.value,task.select.value);
            lists.push(newList);
            console.log(lists);
            content.removeChild(task.newTask);
            content.appendChild(mainUI.newList);
            localStorage.setItem('lists', JSON.stringify(lists));
            console.log(lists);
            location.reload();
        }
    
    })
    })();