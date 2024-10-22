import { mainUI } from "./mainDOM.js";
import { listCard } from "./listCard.js";
import {mkElem,mkElemC,appendMultip} from './fn.js'

function listListenClick(obj) {
const fullList = mkElemC('div','full-list');

const fullTitles = mkElemC('div', 'full-titles');

const fullTitlesTitle = mkElem('div');
fullTitlesTitle.textContent = 'Title';
const fullTitlesContent = mkElemC('div','full-titles-content');
fullTitlesContent.textContent = obj.title;

appendMultip(fullTitles,fullTitlesTitle,fullTitlesContent);

const fullDes = mkElemC('div','full-des');

const fullDesTitle = mkElemC('div','full-des-title');
fullDesTitle.textContent = 'Description';
const fullDesContent = mkElemC('div','full-des-content');
fullDesContent.textContent = obj.description;

appendMultip(fullDes, fullDesTitle,fullDesContent);

const fullExtras = mkElemC('div','full-extras');

const fullDate = mkElemC('div','full-date');

const fullDateTitle = mkElem('div');
fullDateTitle.textContent = 'Due date';

const fullDateContent = mkElemC('div', 'full-date-content');
fullDateContent.textContent = obj.dueDate;

appendMultip(fullDate,fullDateTitle,fullDateContent);

const fullPriority = mkElemC('div','full-priority');

const fullPriorityTitle = mkElem('div');
fullPriorityTitle.textContent = 'Priority';

const fullPriorityContent = mkElemC('div', 'full-priority-content');

if(obj.priority <= 3) {
    fullPriorityContent.textContent = obj.priority +'/10 | low';
}else if(obj.priority >3 && obj.priority <= 6) {
    fullPriorityContent.textContent = obj.priority +'/10 | medium';
}else {
    fullPriorityContent.textContent = obj.priority +'/10 | urgent';
}


appendMultip(fullPriority,fullPriorityTitle,fullPriorityContent);

const fullProject = mkElemC('div','full-project');

const fullProjectTitle = mkElem('div');
fullProjectTitle.textContent = 'Category';

const fullProjectContent = mkElemC('div','full-project-content');
fullProjectContent.textContent = obj.project;

appendMultip(fullProject,fullProjectTitle,fullProjectContent);

appendMultip(fullExtras,fullDate, fullPriority, fullProject);

const cancelBtn = mkElemC('div','cancel-btn');
cancelBtn.textContent = 'x';

appendMultip(fullList,fullTitles,fullDes,fullExtras,cancelBtn);
return {fullList,cancelBtn};
};




function addListToDOM (category) {
    let newItem = JSON.parse(localStorage.getItem('lists'));

    if (category === undefined) {
        if(newItem != null) {
            mainUI.lists.innerHTML = '';
            for (let item of newItem){
                let newCard = listCard(item);
                let listDiv = newCard.querySelector('.list-div');
                let listCheckBox = newCard.querySelector('#status');
                listCheckBox.addEventListener('click', () => {
                    mainUI.lists.removeChild(newCard);
                    newItem.splice(newItem.indexOf(item),1,);
                    localStorage.setItem('lists',JSON.stringify(newItem));
                    location.reload();
                })
        
                listDiv.addEventListener('click', () => {
                    let fullListDetails = listListenClick(item);
                    let mainContent = document.querySelector('#content');
                    mainContent.appendChild(fullListDetails.fullList);
                    fullListDetails.cancelBtn.addEventListener('click', () => {
                        mainContent.removeChild(fullListDetails.fullList);
                    })
                });

                mainUI.lists.appendChild(newCard);

            };
        }    
    }else {
        if (newItem != null) {
            mainUI.lists.innerHTML = '';

            for (let item of newItem) {
                if (item.project.toLowerCase() == category.innerText.toLowerCase()) {
                    let newCard = listCard(item);
                    let listDiv = newCard.querySelector('.list-div');
                    let listCheckBox = newCard.querySelector('#status');
                    listCheckBox.addEventListener('click', () => {
                        mainUI.lists.removeChild(newCard);
                        newItem.splice(newItem.indexOf(item),1,);
                        localStorage.setItem('lists',JSON.stringify(newItem));
                        location.reload();
                    })

                    listDiv.addEventListener('click', () => {
                        let fullListDetails = listListenClick(item);
                        let mainContent = document.querySelector('#content');
                        mainContent.appendChild(fullListDetails.fullList);
                        fullListDetails.cancelBtn.addEventListener('click', () => {
                            mainContent.removeChild(fullListDetails.fullList);
                        })
                    });

                    mainUI.lists.appendChild(newCard);

                }
            }
        }
    }
  
};

export {addListToDOM};