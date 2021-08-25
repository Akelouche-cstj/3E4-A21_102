const theName = 'Yannick';
let age = 33;

console.log(theName);
age++;
console.log(age);

const test = true + 1;
const test2 = 125 + '9'; 
console.log(test2);

console.log(('b' + 'a' + + 'a' + 'a'));

function displayUser(name, age) {
    console.log(`Bonjour mon nom est ${name}, j'ai ${age} ans`);
}

displayUser('Rosalie',12);

//collection, tableau, liste

const fruits = ['kiwi','fraise','Melon d\'eau','Pamplemousse','Mangue'];

console.log(fruits);

for(let fruit of fruits){
    console.log(fruit);
}

fruits.forEach(f => console.log(f));

//en parenthese si ya 2 parametres
//(a,b) => { a + b };

const sum = (a, b) => a+b;
const result= sum(2,5);
console.log(result);

const someFruits = fruits.filter(f => f.length > 5);
console.log(someFruits);

const number = [10,20,30,40];
const MULTIPLIER = 3;

const products = number.map(n => n*MULTIPLIER).filter(n => n>75).map(n=>n+9);
console.log(products);
console.log(number);

number.push(50)
console.log(number);

const avenger = {
    alterEgo:'Peter Parker',
    hero:'SpiderMan',
    movies:[{title:'123'},{title:'1234'},{title:'12345'}]
    // on peut faire une fonction dans un objet
    /*function: () => {

    }*/
}

console.log(avenger.alterEgo);
console.log(avenger.movies.forEach(m => console.log(m.title)));

/*if(1 !== '1'){

}
*/
