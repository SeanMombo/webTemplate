
console.log('Fetching items');

async function getDragon(url) {
    try {
        const res = await fetch(url);    
        const myJson = await res.json();
        const itemList = myJson.data;
        console.log(itemList);
    } catch (error) {
        console.log(error);
    }
}

async function getImage(url) {
    try {
        const res = await fetch(url);    
    
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}

//getDragon('http://ddragon.leagueoflegends.com/cdn/9.24.2/data/en_US/item.json');

getImage('http://ddragon.leagueoflegends.com/cdn/9.24.2/img/item/1001.png');

