//만들어야할것
//1.SNS 클릭시 화면 커지게 하기

const view = document.querySelector('.project_view')
const sns = document.querySelectorAll('.contents .sns_bnr a')
let imgT = document.createElement('img')

const contents = document.querySelector('.contents_img')

console.log(view,sns,imgT)
view.style.display = 'none'

sns.forEach((t,i)=>{
    t.addEventListener('click',(e)=>{
        e.preventDefault()// href 막기
        imgT.src = `./images/sns/sns${i+1}.jpg`
        console.log(imgT)
        view.style.display='block'
        contents.appendChild(imgT)
    })
    view.addEventListener('click',()=>{
        view.style.display = 'none'
    })
})

//2.상세페이지 클릭시 화면 커지게하기