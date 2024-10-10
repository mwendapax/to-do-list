import { list } from "./list";

let getStoredLists = JSON.parse(localStorage.getItem('lists'));

let lists;

if(getStoredLists === null) {
    lists = [];
}else {
    lists = getStoredLists;
};


export {lists};