let cart = document.querySelector('.cart_toogle');
let cartCart = document.querySelector('.cart_toogle .cart');
let cartText = document.querySelector('.cart_toogle .text');
let cartButton = document.getElementById('cart');
let plus = document.getElementById('plus');
let mins = document.getElementById('mins');
let number = document.getElementById('number');

let mainImage = document.getElementById('img1');
let otherImage = document.querySelectorAll('.main_section .left_images .other_images img');
let images = Array.from(otherImage);


let addToCart = document.getElementById('add_to_cart');




images.map( (ele) =>{
    ele.addEventListener('click',() =>{
        mainImage.src = ele.src;
    })
})



cartButton.addEventListener('click' , (e) =>{
    e.stopPropagation();
    cart.classList.toggle('toggle');
});

let num = +number.innerHTML;
plus.addEventListener("click" , () =>{
    num += +1;
    number.innerHTML = num;
})

mins.addEventListener("click" , () =>{
    
    if(num > 0){
        num += +(-1);
        number.innerHTML = num;
    }else{
        number.innerHTML = 0;

    }
})


// cartCart.onClick = (e) =>{
//     e.stopPropagation();
// }

// cartText.onClick = (e) =>{
//     e.stopPropagation();
// }

// document.addEventListener('click' , (e) =>{
//     if (e.target != cartButton && e.target != cart && e.target != cartCart &&e.target != cartText ){
//         if(cart.classList.contains('toggle')){
//             return ;
//         }else{
//             cart.classList.add('toggle');
//         }
//     }
// })





let text = document.querySelector('.cart_toogle .text');
let actualPrice = document.querySelector('.main_section .right_content .price .price_discount .actual_price');


let element = ` <div class="cart_content">
                <div class="sneaker">
                    <img src="./images/image-product-1.jpg" alt="img" class="cart_img">
                    <p>limited edition of sneakers <br> ${actualPrice.innerHTML} * ${+num} <span> 0 </span></p>
                    <img src="./images/icon-delete.svg" alt="delete" id="delete">
                </div>
                <button>Check out</button>
                </div>`

addToCart.addEventListener('click' , () =>{
    text.style.display = 'none'
    cart.innerHTML += element;
})                



