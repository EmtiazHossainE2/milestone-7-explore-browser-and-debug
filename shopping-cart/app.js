const addBtn = () => {
    const inputValue = document.getElementById('input-value')
    const items = inputValue.value;
    if (!items) {
        return
    }

    //display items 
    displayItems(items)
    //add product to cart 
    addProductToCart(items)

    inputValue.value = ''
}
const displayItems = items => {
    const ul = document.getElementById('addProducts')
    const li = document.createElement('li')
    li.innerText = items;
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
    return cartObj
}

const addProductToCart = items => {
    const cart = getCart()
    cart[items] = 1
    // console.log(cart);
    const cartStringified = JSON.stringify(cart)
    localStorage.setItem('cart', cartStringified)

}
const displayLocatStorageCart = () => {
    const cart = getCart()
    for (const items in cart) {
        displayItems(items)
    }
}
displayLocatStorageCart()