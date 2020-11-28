/**
 * Isrikiuoti sarase eancius zmoniu objektus, pagal ju amziu nuo jauniausio link vyriausio
 * @param {Object[]} people Sarasas zmoniu, kurie pateikti kaip objektai
 * @param {string} people[].name Asmens vardas
 * @param {number} people[].age Asmens amzius
 * @returns {Array<Object>} Sarasas zmoniu, kurie pateikti kaip objektai, kurie yra isrikiuoti pagal amziu
 */
function peopleByAge(people) {
    return people.sort((p1, p2) => p1.age - p2.age);
}


const peopleList = [
    {
        name: 'Petras',
        age: 87
    },
    {
        name: 'Maryte',
        age: 85
    },
    {
        name: 'Petriukas',
        age: 46
    },
    {
        name: 'Onute',
        age: 50
    },
];

const sortedPeople = peopleByAge(peopleList);
const reverseSort = [...sortedPeople].reverse();

console.log(peopleList);
console.log(sortedPeople);
console.log(reverseSort);


const a = [8, 7, 5];

const b = JSON.parse(JSON.stringify(a));




let val = [4, 7];
console.log(val);

let val2 = [...val];
console.log(val2);

val[0] = 99;

console.log(val);
console.log(val2);

val2.push(45);
console.log(val2);
val2.push(45);
console.log(val2);

val2.unshift(1);
console.log(val2);

val2 = [-6, ...val2];
console.log(val2);



let person = {
    name: 'Vardenis',
    age: 99
}
console.log(person);

person.location = 'LTU';
console.log(person);

person = { driving: true, ...person }
console.log(person);

console.clear();

function sum(...num) {
    let totalSum = 0;

    console.log(num);

    return totalSum;
}

const total = sum(2, 2, 8, 4, 7);