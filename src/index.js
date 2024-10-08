import './styles.css';
import { addCategory } from './localStorage.js';
import { appendMultip} from './fn.js';
import { mainUI } from './mainDOM.js';
import {task} from './newTask.js';



(function addToDOM () {
    const content = document.querySelector('#content');
    addCategory();

    mainUI.newList.addEventListener('click', () => {
        content.appendChild(task.newTask);
        content.removeChild(mainUI.newList);

    });

    appendMultip(content, mainUI.header, mainUI.lists, mainUI.newList);
})();

