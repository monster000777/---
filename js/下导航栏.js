//下导航栏
document.addEventListener('DOMContentLoaded', function () {
    //第一模块
    const nav = document.querySelector('div #nav')
    nav.addEventListener('click', function (e) {
        e.preventDefault();
        // console.log(e.target)
        if (e.target.tagName === 'A' && e.target.dataset.id) {
            // console.log(11)
            // 排他思想
            const old = document.querySelector('#nav .text-primary')
            // console.log(old)
            if (old) old.classList.remove('border-b-2', 'text-primary', 'font-bold')
            e.target.classList.add('border-b-2', 'text-primary', 'font-bold')

            // console.log(e.target.dataset.id)
            // console.log(document.querySelector(`#${e.target.dataset.id}`).offsetTop)

            const top = document.querySelector(`#${e.target.dataset.id}`).offsetTop
            const navHeight = nav.offsetTop
            // console.log(top)
            document.documentElement.scrollTop = top - navHeight - 50
        }
    })


    //第二模块
    window.addEventListener('scroll', function () {
        const old = document.querySelector('#nav .text-primary')
        if (old) old.classList.remove('border-b-2', 'text-primary', 'font-bold')

        const one = document.querySelector('#one')
        const two = document.querySelector('#two')
        const three = document.querySelector('#three')
        const four = document.querySelector('#four')
        const five = document.querySelector('#five')
        const six = document.querySelector('#six')
        const seven = document.querySelector('#seven')

        const n = document.documentElement.scrollTop
        const navHeight = nav.offsetTop

        if (n < one.offsetTop - navHeight - 60) {
            document.querySelector('[data-id=a1]').classList.add('border-b-2', 'text-primary', 'font-bold')
        } else if (n >= one.offsetTop - navHeight - 60 && n < two.offsetTop - navHeight - 60) {
            document.querySelector('[data-id=a2]').classList.add('border-b-2', 'text-primary', 'font-bold')
        } else if (n >= two.offsetTop - navHeight - 60 && n < three.offsetTop - navHeight - 60) {
            document.querySelector('[data-id=a3]').classList.add('border-b-2', 'text-primary', 'font-bold')
        } else if (n >= three.offsetTop - navHeight - 60 && n < four.offsetTop - navHeight - 60) {
            document.querySelector('[data-id=a4]').classList.add('border-b-2', 'text-primary', 'font-bold')
        } else if (n >= four.offsetTop - navHeight - 60 && n < five.offsetTop - navHeight - 60) {
            document.querySelector('[data-id=a5]').classList.add('border-b-2', 'text-primary', 'font-bold')
        } else if (n >= five.offsetTop - navHeight - 60 && n < six.offsetTop - navHeight - 60) {
            document.querySelector('[data-id=a6]').classList.add('border-b-2', 'text-primary', 'font-bold')
        } else if (n >= six.offsetTop - navHeight - 60 && n < seven.offsetTop - navHeight - 60) {
            document.querySelector('[data-id=a7]').classList.add('border-b-2', 'text-primary', 'font-bold')
        }
    })


})