const addBtn = document.getElementById("add-btn");
// addBtn.className = 'btn-primary'
// addBtn.classList.add('btn-primary')
addBtn.setAttribute('class', ('btn-primary'))

//2
let str = ""
console.log(!!str);

//3 
const marks = 60;
const resubmit = -5;
console.log(!(marks > 0 || resubmit > 0));

//4 
const person = {
    name: "hero",
    id: 101,
    address: "BD",
    postalCode: 40321
};
console.log(Object.keys(person).length);

//5 
const animals = ['cat', 'dog', 'rat'];
console.log(animals.includes('Cat'));

//6 
const unique = array => array.indexOf("21")
array = [2, 3, 4, 5, 2]
console.log(unique(array));

//7 
const add = (para1, para2) => para2 + para1
console.log(add("2", 3));

//8
// const b = 6, b = 6
// console.log(b);

//10 
const colors = { mango: 'green', grapes: 'black', organe: 'yellow' };
console.log(colors[grapes])

