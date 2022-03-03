const addItem = () => {
    const inputText = document.getElementById('input-value')
    const inputValue = inputText.value
    // display ui 
    displayProduct(inputValue)

    inputText.value = ''

}
const displayProduct = product => {
    const ul = document.getElementById('products')
    const li = document.createElement('li')
    li.innerText = product;
    ul.appendChild(li)
}