import { elements } from './base';

console.log('Fetching items');



async function getDragon() {
    const url = "http://ddragon.leagueoflegends.com/cdn/9.24.2/data/en_US/item.json";
    const itemKeyList = new Array();
    try {
        const res = await fetch(url);    
        const myJson = await res.json();
        const itemList = myJson.data;
        for (var key in itemList) {
            if (itemList.hasOwnProperty(key)) {
                itemKeyList.push(key);
            }
        }
    } catch (error) {
        console.log(error);
    }

    return itemKeyList;
}

function addImage(id) {
    const url = `../../img/item/${id}.png`;
    const markup = `
        <li class="image__item">
            <img src="${url}">
        </li>
    `;
    elements.itemImages.insertAdjacentHTML('beforeend', markup);
}

const add1000Images = (array) => {
    for (let i = 0; i < array.length; i ++) {
        addImage(i);
    }
}

const array = getDragon();
console.log(array);
add1000Images(array);


