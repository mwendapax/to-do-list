import { mkElem, mkElemC, mkElemD, mkDivElemAppend, appendMultip } from "./fn.js";
import { addListToDOM } from "./addToDom.js";
import logoImg from './assets/history.svg'
const mainUI = (function (){

    const header = mkElem('header');
    const nav = mkElem('nav');

    const logo = mkElemC('div', 'logo');
    const logoImage = mkElem('div');
    const logoImgContainer = mkElem('img');

    logoImgContainer.setAttribute('src',logoImg);

    logoImage.appendChild(logoImgContainer);

    const logoTextContainer = mkElem('div');
    logoTextContainer.textContent = 'Minimal list';

    appendMultip(logo,logoImage,logoTextContainer);


    const projects = mkElemC('div', 'projects');
    const projectDiv = mkElem('div');
    projectDiv.textContent = 'All';


    projectDiv.addEventListener('click', () => {
        addListToDOM();
    });

    projects.appendChild(projectDiv);

    
    let items = JSON.parse(localStorage.getItem('category'));

    mkDivElemAppend(projects, items);


    nav.appendChild(logo);
    nav.appendChild(projects);
    header.appendChild(nav);


    const lists = mkElemD('div', 'lists');

    const newList = mkElemC('div', 'new-list');
    newList.setAttribute('title','Add a new todo');
    newList.textContent = "+";

    return {header, lists, newList,projects,projectDiv};

})();


export {mainUI};