// let slide = new Swiper('.swiper-container',{
//     direction:'horizontal',
//     autoplay:{delay:1000,},
//     navigation:{
//         nextEl:'.swiper-button-next',
//         prevEl:'.swiper-button-prev'
//         },
//     slidesPerView:3,
//     spaceBetween:100,
//     })

let slide = new Swiper('.swiper-container',{
    direction:'horizontal',
    loop:true,
    loopAdditionalSlides : 1,
    autoplay:{delay:2000,disableOnInteraction:false,},
    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev'
        },
    slidesPerView:3,
    spaceBetween:100,
    centeredSlides:true
    })