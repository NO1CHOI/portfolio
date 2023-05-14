let slide = new Swiper('.swiper-container',{
    direction:'horizontal',
    loop:true,
    autoplay:{delay:3000,disableOnInteraction:false,},
    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev'
        },
    slidesPerView:1,
    spaceBetween:100,
    centeredSlides:true
    })
// const swiper = new Swiper('.wrap1', {
//     direction: 'horizontal',
//     loop: true,
//     slidesPerView: 3,
//     spaceBetween:60,
//     centeredSlides: true,//중심 슬라이드 인식
//     loop: true,
//     on: {
//         slideChange: function () {
//             const activeIndex = this.activeIndex;
//             const slides = this.slides;

//             slides.forEach((slide, index) => {
//                 if (index === activeIndex) {
//                 slide.classList.add('center');
//                 } else {
//                 slide.classList.remove('center');
//                 }
//             });
//         },
//     },
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
// });
