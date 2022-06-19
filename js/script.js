var swiper = new Swiper(".catalog__swipper", {
    loop: true,
    slidesPerView: 1,
    autoplay: { 
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    mousewheel: true,
    keyboard: true,

});

let frontCard=document.querySelectorAll('.front-card');
let backCard=document.querySelectorAll('.back-card');
let frontCardBotton=document.querySelectorAll('.front-card__botton');
let backCardBotton=document.querySelectorAll('.back-card__botton');
let cardCatalogTop=document.querySelectorAll('.card-catalog__top');



// frontCardBotton.onclick= ()=> {
//     frontCard.classList.add('active');
//     backCard.classList.add('active');
// }

// backCardBotton.onclick= ()=> {
//     frontCard.classList.remove('active');
//     backCard.classList.remove('active');
// }

cardCatalogTop.forEach(() => {
    console.log(cardCatalogTop.this.frontCardBotton);
    // cardCatalogTop.frontCardBotton.onclick= ()=> {
    //     cardCatalogTop.frontCard.classList.add('active');
    //     cardCatalogTop.backCard.classList.add('active');
    // }
    
    // cardCatalogTop.backCardBotton.onclick= ()=> {
    //     cardCatalogTop.frontCard.classList.remove('active');
    //     cardCatalogTop.backCard.classList.remove('active');
    // }
})


// cardCatalogTop.forEach((e) => {
//     console.log(cardCatalogTop);
    // this.frontCardBotton.onclick= ()=> {
    //     this.frontCard.classList.add('active');
    //     this.backCard.classList.add('active');
    // }
// })



// CardNew.forEach((element) => {
//     element.classList.toggle('active');
// })