const view = document.querySelector('.project_view')
const bnr = document.querySelectorAll('.bnr a')
let imgT = document.createElement('img')

const contents = document.querySelector('.contents_img')

console.log(view,bnr)
view.style.display = 'none'

bnr.forEach((t,i)=>{
    t.addEventListener('click',(e)=>{
        e.preventDefault()// href 막기
        imgT.src=`./images/example${i+1}.png`
        console.log(imgT)
        view.style.display = 'block'
        contents.appendChild(imgT)
    })
    view.addEventListener('click',()=>{
        view.style.display = 'none'
    })
})