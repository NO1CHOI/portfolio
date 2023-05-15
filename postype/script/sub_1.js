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


//Nav 색깔 바꾸기
const nav = document.querySelectorAll('.contents ul li a')
const active = document.querySelector('.active')

console.log(nav[0],active)

for(let i of nav){
    i.addEventListener('click',(e)=>{
        e.preventDefault()
        for(let j of nav){
            j.classList.remove('active')
        }
        i.classList.add('active')
    })
}

//프로필 보이게하기
const user = document.querySelector('.profile')
const close = document.querySelector('.profile .home .top a img')
const btn = document.querySelectorAll('.member')

//chang 버튼
// const change = document.querySelector('.profile .home .top .a img')

console.log(user,close,btn)

//프로필 안보이게 설정
user.style.display='none'

for(let i of btn){
    i.addEventListener('click',()=>{
        user.style.display = 'block'
    })
    close.addEventListener('click',()=>{
        user.style.display = 'none'
    })
}