const addBtn = () => {
    const inputValue = document.getElementById('input-value')
    const items = inputValue.value;

    //display items 
    displayItems(items)
    inputValue.value = ''
}
const displayItems = items => {
    const ul = document.getElementById('addProducts')
    const li = document.createElement('li')
    li.innerText = items;
    ul.appendChild(li)
}