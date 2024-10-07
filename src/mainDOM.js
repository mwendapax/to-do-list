import { mkElem, mkElemC, mkElemD } from "./fn.js";

const mainUI = (function (){

    const header = mkElem('header');
    const nav = mkElem('nav');

    const logo = mkElemC('div', 'logo');
    logo.textContent = 'To do list';

    const projects = mkElemC('div', 'projects');
    const projectDiv = mkElem('div');

    projects.appendChild(projectDiv);

    nav.appendChild(logo);
    nav.appendChild(projects);
    header.appendChild(nav);


    const lists = mkElemD('div', 'lists');

    const newList = mkElemC('div', 'new-list');
    newList.setAttribute('title','Add a new todo');
    newList.textContent = "+";

    return {header, lists, newList};

})();


export {mainUI};