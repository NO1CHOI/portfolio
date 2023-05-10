let slide = new Swiper('.swiper-container',{
    direction:'horizontal',
    autoplay:{delay:3000,},
    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev'
        },
    slidesPerView:1,
    spaceBetween:100,
    })