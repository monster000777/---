//弹窗界面
const pop = document.querySelector('#popup')
const closeBtn = document.querySelector('.login-bottom-bar-right-closeBtn')
const wrapper = document.querySelector('.login-bottom-bar-wrapper')
const content = document.querySelector('.login-bottom-bar-content')

document.addEventListener('DOMContentLoaded', function () {
    pop.classList.toggle('hidden')
})
closeBtn.addEventListener('click', function () {
    pop.classList.toggle('hidden')
})


//思路：开始时先给一个scrollTimer赋值为空，放进滚动事件里做判断，如果页面处于滚动状态scrollTimer的值就会持续增加，那么if就会为true，就会停止计时器，opacity = '0'
//当滚动事件停止，scrollTimer的值就会被定时器覆盖，500ms后执行回调函数，也就是让opacity = '1'
let scrollTimer = null

window.addEventListener('scroll', function () {
    wrapper.style.opacity = '0'
    if (scrollTimer) {
        clearTimeout(scrollTimer)
    }
    scrollTimer = setTimeout(function () {
        wrapper.style.opacity = '1'
    }, 500)
})


//随机切换内容图片
const data = [{url: 'images/商城弹窗.png'}, {url: 'images/商城弹窗2.png'}]
let random = Math.floor(Math.random() * data.length)
// console.log(data[random].url)
content.style.backgroundImage = `url(${data[random].url})`
