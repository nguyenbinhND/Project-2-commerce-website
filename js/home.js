// c1 bắt sự kiện cho tất cả các mục có cùng tên

const productContainer = [...document.querySelectorAll('.product-container')]
    /* ... là giá trị productContainer nhận tất cả các giá trị truy vấn truyền vào có tên giống nó */

const nxtBtn = [...document.querySelectorAll('.nxt-btn')]
const preBtn = [...document.querySelectorAll('.pre-btn')]

productContainer.forEach((item, i) => {
    let containerDimenstions = item.getBoundingClientRect();
    /* lấy tất cả thông số của Element như width, height, top, bot */
    let containerWidth = containerDimenstions.width;
    /* lấy giá trị chiều dài */
    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })


    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })


})


// // c2  bắt sự kiện scroll cho 1 mục sản phẩm

// const productContainer = document.querySelector('.product-container')
// const nxtBtn = document.querySelector('.nxt-btn')
// const preBtn = document.querySelector('.pre-btn')
// console.log(productContainer);

// let containerDimenstions = productContainer.getBoundingClientRect();
// let containerWidth = containerDimenstions.width;

// nxtBtn.addEventListener('click', () => {
//     productContainer.scrollLeft += containerWidth;
// })

// preBtn.addEventListener('click', () => {
//     productContainer.scrollLeft -= containerWidth;
// })