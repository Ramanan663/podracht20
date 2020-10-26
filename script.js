const superheroes = [
    { name: "Batman", alter_ego: "Bruce Wayne" },
    { name: "Superman", alter_ego: "Clark Kent" },
    { name: "Spiderman", alter_ego: "Peter Parker" },
];
/*
// Hier komt jouw functie
const findSpiderMan = function(superheroes) {
    return superheroes.find(function(spider) {
        return spider.name === "Spiderman";
    });
};

console.log(findSpiderMan(superheroes));
// Find Spiderman
// result should be: {name: "Spiderman", alter_ego: "Peter Parker"}

const res = superheroes.find(findSpiderMan);

function findSpiderMan(person) {
    return person.name === "Spiderman";
}
console.log(res);

//B
const singelArray = [1, 2, 3];
const dubbelArray = singelArray.map(dubbele);

function dubbele(value, index, arr) {
    return value * 2;
}

console.log(dubbelArray);


//c
const bigerThan10 = (currwntvalue) => currwntvalue < 10;
const array1 = [1, 4, 3, 6, 9, 7, 11];
console.log(array1.some(bigerThan10));

//d
const isItalyInTheGreat7 = [
    "Canada",
    "France",
    "Germany",
    "Italy",
    "Japan",
    "United Kingdom",
    "United States",
];
const includeItaly = isItalyInTheGreat7.includes("Italy");
console.log(includeItaly);

//e

const tenfold = function(array) {
    let Array = [];
    array.forEach((item) => {
        Array.push(item * 10);
    });
    return Array;
};

console.log(tenfold([1, 4, 3, 6, 9, 7, 11]));

const x = [1, 4, 3, 6, 9, 7, 11];
const tenf = x.map(tentime);

function tentime(value, index, arr) {
    return value * 10;
}
console.log("10 x array= ", tenf);

//f
const isBelow100 = (currentValue) => currentValue < 100; {
    const array2 = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 11, 77, 84, 98];
    console.log(array2.every(isBelow100));
}
//m2

function isBelow100(array) {
    return array.every((number) => {
        return number < 100;
    });
}
console.log(
    isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98])
);
console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 77, 84, 98]));
*/

//g
const array1 = [1, 81, 4, 53, 3, 6, 11, 77, 84, 98, 101, 206, 234];

const bigSum = function(e) {
    return e.reduce((value, index) => {
        return value + index;
    });
};

console.log(bigSum(array1));