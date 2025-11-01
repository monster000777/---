// 轮播图功能
(function ($) {
    $(function () {
        const $carousel = $('.carousel-container');
        const $carouselItems = $('.carousel-item');
        const $indicators = $('.carousel-indicator');
        const $prevBtn = $('.carousel-prev');
        const $nextBtn = $('.carousel-next');
        let currentIndex = 0;
        let interval = null;
        const totalSlides = $carouselItems.length;
        const $indicatorWrapper = $indicators.parent();

        function showSlide(index) {
            $carouselItems.css({opacity: 0, zIndex: 0});
            $indicators.removeClass('active bg-white').addClass('bg-white/70');
            $carouselItems.eq(index).css({opacity: 1, zIndex: 1});
            $indicators.eq(index).addClass('active bg-white').removeClass('bg-white/70');
            currentIndex = index;
        }

        function startInterval() {
            clearInterval(interval);
            interval = setInterval(function () {
                const nextIndex = (currentIndex + 1) % totalSlides;
                showSlide(nextIndex);
            }, 3000);
        }

        function stopInterval() {
            clearInterval(interval);
        }

        function showControls() {
            $indicatorWrapper.css('display', 'flex');
            $prevBtn.css('display', 'flex');
            $nextBtn.css('display', 'flex');
        }

        function hideControls() {
            $indicatorWrapper.css('display', 'none');
            $prevBtn.css('display', 'none');
            $nextBtn.css('display', 'none');
        }

        function setupEventListeners() {
            $carousel.on('mouseenter', function () {
                showControls();
                stopInterval();
            });
            $carousel.on('mouseleave', function () {
                hideControls();
                startInterval();
            });

            $indicators.each(function (idx) {
                $(this).data('index', idx).on('click', function (e) {
                    e.stopPropagation();
                    showSlide(idx);
                    stopInterval();
                });
            });

            $prevBtn.on('click', function (e) {
                e.stopPropagation();
                const prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
                showSlide(prevIndex);
                stopInterval();
            });

            $nextBtn.on('click', function (e) {
                e.stopPropagation();
                const nextIndex = (currentIndex + 1) % totalSlides;
                showSlide(nextIndex);
                stopInterval();
            });

            $carousel.on('click', function (e) {
                if (!$(e.target).closest('.carousel-prev, .carousel-next, .carousel-indicator').length) {
                    const nextIndex = (currentIndex + 1) % totalSlides;
                    showSlide(nextIndex);
                    stopInterval();
                }
            });
        }

        function initCarousel() {
            showSlide(currentIndex);
            startInterval();
            setupEventListeners();
            hideControls();
        }

        initCarousel();
    });
})(jQuery);



// 滚动时导航栏效果
$(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
        $('header').addClass('shadow-md').removeClass('shadow-sm');
    } else {
        $('header').removeClass('shadow-md').addClass('shadow-sm');
    }
});



// 返回顶部按钮
const $backToTopBtn = $('.fa-arrow-up').parent();
$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        $backToTopBtn.css({opacity: '1', pointerEvents: 'auto'});
    } else {
        $backToTopBtn.css({opacity: '0', pointerEvents: 'none'});
    }
});

$backToTopBtn.click(() => {
    $('html, body').animate({scrollTop: 0}, 'smooth');
});



// 侧边栏分类悬停效果
$('.category-item').hover(
    function () {
        $(this).find('.sub-category').show();
    },
    function () {
        $(this).find('.sub-category').hide();
    }
);



//解决了导航栏和搜索框同时出现时的冲突，添加了互斥逻辑
let isMobileNavOpen = false;
let isSearchOpen = false;

$('#click').click(function () {
    if (!isMobileNavOpen) {
        // 打开导航时强制关闭搜索
        $('#search').addClass("hidden");
        isSearchOpen = false;
    }
    $('#mobile-nav').toggleClass("hidden");
    isMobileNavOpen = !isMobileNavOpen;
});

$('#click2').click(function () {
    if (!isSearchOpen) {
        // 打开搜索时强制关闭导航
        $('#mobile-nav').addClass("hidden");
        isMobileNavOpen = false;
    }
    $('#search').toggleClass("hidden");
    isSearchOpen = !isSearchOpen;
});



//购物车右上角计数小红点配置（纯手搓）
let cartCount = 0;

function fn(i) {
    const $span = $('#shopping');
    const $buttons = $(`#${i} button`);

    $buttons.on('click', function () {
        cartCount++;
        updateCartCount();
    });

    function updateCartCount() {
        $span.text(cartCount);
        $span.css('display', cartCount > 0 ? 'flex' : 'none');
    }
}

// 初始化各模块按钮
fn('model1');
fn('model2');
fn('one');
fn('two');
fn('three');
fn('four');
fn('five');
fn('six');
