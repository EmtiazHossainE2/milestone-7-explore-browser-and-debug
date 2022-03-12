const images = [
    'images/doraemon.png',
    'images/images.jpg',
    'images/images.png',
]
let imageIndex = 0
const slider = document.getElementById('image-slider')
setInterval(() => {
    if (imageIndex >= images.length) {
        imageIndex = 0
    }
    const imageUrl = images[imageIndex]
    slider.innerHTML = `<img class=" w-100 mx-auto" src="${imageUrl}" alt="">`
    imageIndex++

}, 1000)