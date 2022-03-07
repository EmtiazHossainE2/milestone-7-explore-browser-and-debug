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

