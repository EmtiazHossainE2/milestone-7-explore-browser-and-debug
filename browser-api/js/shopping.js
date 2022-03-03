const addItem = () => {
    const inputText = document.getElementById('input-value')
    const inputValue = inputText.value
    if (!inputValue) {
        return
    }
    // display ui 
    displayProduct(inputValue)
    addProductToCart(inputValue)

    inputText.value = ''

}
const displayProduct = product => {
    const ul = document.getElementById('products')
    const li = document.createElement('li')
    li.innerText = product;
    ul.appendChild(li)
}

const getCart = () => {
    const cart = localStorage.getItem('cart')
    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart)
    }
    else {
        cartObj = {}
    }
    return cartObj;
}
const addProductToCart = (product) => {
    const cart = getCart()
    if (cart[product]) {
        cart[product] = cart[product] + 1;
    }
    else {
        cart[product] = 1;
    }
    // console.log(cart);
    const cartStringify = JSON.stringify(cart)
    localStorage.setItem('cart', cartStringify)
}

const displayLocalStorageCart = () => {
    const cart = getCart()
    for (const product in cart) {
        displayProduct(product)
    }
}
displayLocalStorageCart()

const placeOrder = () => {
    document.getElementById('products').textContent = ''
    localStorage.removeItem('cart')
}