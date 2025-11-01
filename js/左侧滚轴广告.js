const images = document.querySelector('.ad-image img');

setInterval(() => {
    images.classList.remove('active');
    images.classList.add('active');
}, 3000);


(function () {
    const ad = document.querySelector('#ad');
    const ad1 = document.querySelector('#ad1');
    window.addEventListener('scroll', function () {

        // document.documentElement.scrollTop = ad1.offsetTop;
        if (document.documentElement.scrollTop >= ad1.offsetTop - 650) {
            ad.style.opacity = 0;
        } else {
            ad.style.opacity = 1;
        }

    })
})()
