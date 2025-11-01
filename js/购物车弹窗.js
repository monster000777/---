//购物车弹窗

function showPopup() {
    document.getElementById('popup-mask').style.display = 'flex';
}
function hidePopup() {
    document.getElementById('popup-mask').style.display = 'none';
}
function goToCart() {
    // DONE 等购物车界面做好将#替换
    window.open('#');
}
// 允许按下 ESC 键关闭弹窗
document.addEventListener('keydown', function(e) {
    if (e.key === "Escape") hidePopup();
});


function fn(i) {
    const btn = document.querySelectorAll(`#${i} button`)
    for (let i = 0; i < btn.length; i++) {
        // console.log(btn[i])
        btn[i].addEventListener('click', showPopup);
    }
}

fn('model1')
fn('model2')
fn('one')
fn('two')
fn('three')
fn('four')
fn('five')
fn('six')