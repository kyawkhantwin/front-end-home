const texts = document.querySelectorAll('.shop');
const photos = document.querySelectorAll('.menu-photo');
const left = document.querySelector('.arrow-left');
const right = document.querySelector('.arrow-right');

let current = 0

const change = function () {
    texts.forEach(text => text.classList.remove('active-text'))
    texts[current].classList.add('active-text')

    photos.forEach(photo => photo.classList.remove('active'))
    photos[current].classList.add('active')

}

left.addEventListener('click',function () {
    current--
    if (current < 0){
        current = texts.length - 1;
    }
    change();
})
right.addEventListener('click',function () {
    current++
    if (current > texts.length -1 ){
        current = 0;
    }
    change();
})