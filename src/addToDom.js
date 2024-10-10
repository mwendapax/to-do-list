import { mainUI } from "./mainDOM.js";
import { listCard } from "./listCard.js";

function addListToDOM () {
    let newItem = JSON.parse(localStorage.getItem('lists'));

    if(newItem != null) {
        mainUI.lists.innerHTML = '';
        console.log(newItem);
        for (let item of newItem){
            let newCard = listCard(item);
            mainUI.lists.appendChild(newCard);
    
            newCard.addEventListener('click', (e) => {
                // mainUI.lists.removeChild(newCard);
            });
        };
    }

  
};

export {addListToDOM};