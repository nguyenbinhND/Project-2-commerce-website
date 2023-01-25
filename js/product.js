const productImage = document.querySelectorAll('.product-images img')
const productSlide = document.querySelector(".image-slider")

let activeImageSlide = 0;

productImage.forEach((item, i) => {
    item.addEventListener('click', () => {
        productImage[activeImageSlide].classList.remove('active');
        item.classList.add('active')
        productSlide.style.backgroundImage = `url('${item.src}')`;
        activeImageSlide = i;
    })
})