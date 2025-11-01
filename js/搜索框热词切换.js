// 热词列表
const hotwords = [
    "闪迪存储卡",
    "格兰仕 微波炉",
    "美度手表",
    "机械键盘",
    "壁挂式空调",
    "美孚1号",
    "电脑主机台式",
    "扫描仪",
    "海尔冰箱",
    "bb霜"
];

const hotwordsList = document.querySelector('#hotwordsList');
const hotwordsWrapper = document.querySelector('#hotwordsWrapper');
const searchInput = document.querySelector('#search-input');
let currentIndex = 0;
let timer = null;

// 初始化热词DOM
function renderHotwords() {
    let html = '';
    // 末尾补第一个，形成无缝滚动
    for (let i = 0; i < hotwords.length; i++) {
        html += `<div class="hotword-item">${hotwords[i]}</div>`;
    }
    html += `<div class="hotword-item">${hotwords[0]}</div>`;
    hotwordsList.innerHTML = html;
}

// 滚动动画
function scrollHotwords() {
    currentIndex++;
    hotwordsList.style.transform = `translateY(-${currentIndex * 20}px)`;
    // 最后一个（补充的第一个）过渡到第一个，瞬间归0
    if (currentIndex === hotwords.length) {
        setTimeout(() => {
            hotwordsList.style.transition = 'none';
            hotwordsList.style.transform = 'translateY(0)';
            currentIndex = 0;
            // 强制重绘后再恢复过渡
            void hotwordsList.offsetWidth;
            hotwordsList.style.transition = 'transform 0.5s cubic-bezier(.68,-0.55,.27,1.55)';
        }, 500);
    }
}

// 开始自动滚动
function startScroll() {
    timer = setInterval(scrollHotwords, 3000);
}

function stopScroll() {
    clearInterval(timer);
}

// 聚焦时热词变淡
searchInput.addEventListener('focus', () => {
    hotwordsWrapper.classList.add('faded');
    stopScroll();
});
// 失焦时恢复热词
searchInput.addEventListener('blur', () => {
    if (!searchInput.value) {
        hotwordsWrapper.classList.remove('faded');
        startScroll();
    }
});

// 输入时隐藏热词
searchInput.addEventListener('input', () => {
    if (searchInput.value) {
        hotwordsWrapper.style.display = 'none';
        stopScroll();
    } else {
        hotwordsWrapper.style.display = '';
        startScroll();
    }
});

// 初始化
renderHotwords();
startScroll();
