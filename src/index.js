import './styles.css';
import { mainUI } from './mainDOM.js';
import { appendMultip } from './fn.js';

(function addToDOM () {
    const content = document.querySelector('#content');

    appendMultip(content, mainUI.header, mainUI.lists, mainUI.newList);
});