import {category} from './mklist.js';

const categories = (function () {
    localStorage.setItem('category',category.projects);

    let items = localStorage.getItem('category');

    return {items};

})();

export {categories};