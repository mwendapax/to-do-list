import { addListToDOM } from "./addToDom";
// mkElem function simplifies the creation of elements;

function mkElem (elem) {
    return document.createElement(elem);
};


// mkElemC function simplifies creation for elements with classes;

function mkElemC (elem, className) {

    let newElem = document.createElement(elem);
    newElem.classList.add(className);

    return newElem;
};


// mkElemD function simplifies creation of elements with Id's;

function mkElemD (elem, idName) {
    let newElem = document.createElement(elem);
    newElem.setAttribute('id', idName);

    return newElem;
}

//appendMultip function appends multiple nodes on an element;

// eslint-disable-next-line no-unused-vars
function appendMultip (node, ...args) {
    let nodes = [...arguments];

    for (let i = 1; i < nodes.length; i++) {
        node.appendChild(nodes[i]);
    }
return node;
}


// listenClick function listens for click event and invokes external function 

function listenClick (elem) {
    elem.addEventListener('click', () => {
        addListToDOM(elem);
    })
}

//mkProject function dynamically creates option values for select;

function mkProject (name) {
    let newProject = mkElem('option');
    newProject.setAttribute('value', name);
    newProject.textContent = name;

    return newProject;
}

// mkProjectAppend takes an element and appends properties of an array to it;

function mkProjectAppend(elem, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i != arr.length -1) {
            elem.appendChild(mkProject(arr[i]));
        }
    };
}

//mkDivElem function creates a div from an item of array;

function mkDivElem (arrItem) {
    let newDiv = mkElem('div');
    newDiv.textContent = arrItem;
    listenClick(newDiv);

    return newDiv;
};

// mkDivElemAppend takes a node element and appends item of an array to it;
function mkDivElemAppend(elem, arr) {

    for (let i = 0; i < arr.length; i++) {
        elem.appendChild(mkDivElem(arr[i]));
    }
};

export {mkElem, mkElemC, mkElemD, appendMultip, mkProjectAppend, mkDivElemAppend};