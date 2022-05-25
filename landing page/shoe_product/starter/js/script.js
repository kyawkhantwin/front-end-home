const imgMain = document.querySelectorAll('.features__images-main');
const imgSmall = document.querySelectorAll('.features__images-small');
const popupImg = document.querySelectorAll('.images__main');
const imgMainContainer = document.querySelector('.features__image-container');
const popup = document.querySelector('.popup');
const overlay = document.querySelector('.overlay');
const closePopup = document.querySelector('.popup__icon-close');
const nextImg = document.querySelector('.popup__icon-next');
const preImg =document.querySelector('.popup__icon-previous');

const cartIcon = document.querySelector('.click');
const cartBtn =document.querySelector('.features__about-cart');
const cartContainer =document.querySelector('.cart__container');
const cart =document.querySelector('.cart');
let listDelete;

const plus = document.querySelector('.features__about-click--plus');
const minus = document.querySelector('.features__about-click--minus');
const quantity = document.querySelector('.quantity');

const phoneNext = document.querySelector('.phone--next');
const phonePrevious = document.querySelector('.phone--previous');

let currentQuantity = 0

///popup
let current = 0;



imgMainContainer.addEventListener('click',()=> {
    popup.classList.toggle('popup--active');
})

overlay.addEventListener('click',()=> {
    popup.classList.toggle('popup--active');
})

closePopup.addEventListener('click',()=> {
    popup.classList.toggle('popup--active');
})



imgSmall.forEach((img,index) => img.addEventListener('click',function () {
    popup.classList.toggle('popup--active');
    current = index;
    changeImg()
}))

const changeImg = function () {

    imgMain.forEach(img  => img.classList.remove('active'));
    imgMain[current].classList.add('active')

    popupImg.forEach(img  => img.classList.remove('active'));
    popupImg[current].classList.add('active')

    imgSmall.forEach(img => img.classList.remove('active--small'));
    imgSmall[current].classList.add('active--small')
}

nextImg.addEventListener('click', ()=> {
    current++

    if (current > imgMain.length -1){
        current = 0
    }
    changeImg()
})

preImg.addEventListener('click', ()=> {
    current--

    if (current < 0){
        current = imgMain.length - 1;
    }
    changeImg()
})

phoneNext.addEventListener('click',function () {
    current ++;
    if (current > imgMain.length -1) return current = 0;
    changeImg()
})

phonePrevious.addEventListener('click', ()=> {
    current--

    if (current < 0){
        current = 0
    }
    changeImg()
})

//show cart
cartIcon.addEventListener('click',function () {
    cart.classList.toggle('hidden')
})

//add to cart


    
cartBtn.addEventListener('click',function () {
    const html = `<div class="list">
                 <div class="list__container">
                <img src="images/image-product-1-thumbnail.jpg" alt="" class="list__photo">
                <div class="list__product">
                    <h3 class="list__name">Fallen Limited Edition Sneaker </h3>
                    <div class="list__price">$125.00 x ${currentQuantity}
                        <span>$${125.00 * currentQuantity}</span>
                    </div>      
                <img class="list__delete" src="images/icon-delete.svg#icon" alt="">
    
                </div>
                </div>
                <button class="checkout--button">Checkout</button>
                </div>
    `;

    if (currentQuantity === 0) return alert('input value 0');
    cartContainer.innerHTML = '';
    cartContainer.insertAdjacentHTML("beforeend", html);

    cart.classList.remove('hidden')

    let listDelete = document.querySelector('.list__delete')


/////////////////////////delete list
    listDelete.addEventListener('click',function (e) {
        const html = ` <p>Your cart is empty</p>`;
        const list =  e.target.offsetParent.parentElement

        list.innerHTML = '';
        if (cartContainer.hasChildNodes()) return cartContainer.insertAdjacentHTML('beforeend', html);
    })
})



/////////////////

plus.addEventListener('click',function (){
    currentQuantity++
    quantity.innerHTML = currentQuantity;
    console.log(currentQuantity)
})
minus.addEventListener('click',function (){
    if (currentQuantity < 1)return currentQuantity = 0;
     currentQuantity--;
    quantity.innerHTML = currentQuantity;
    console.log(currentQuantity)
})









