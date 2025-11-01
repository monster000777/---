// 暗色模式切换脚本，自动保存用户偏好
(function () {
    // 1. 自动检测系统偏好
    function getSystemDark() {
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    // 2. 应用主题
    function applyTheme(isDark) {
        if (isDark) {
            document.documentElement.classList.add('dark');
            document.body.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            document.body.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }

    // 3. 初始化主题
    function initTheme() {
        let theme = localStorage.getItem('theme');
        if (!theme) {
            theme = getSystemDark() ? 'dark' : 'light';
        }
        applyTheme(theme === 'dark');
    }

    // 4. 切换按钮事件
    function toggleTheme() {
        const isCurrentlyDark = document.documentElement.classList.contains('dark');
        applyTheme(!isCurrentlyDark);
    }

    // 5. 自动切换按钮图标
    function updateButtonIcon() {
        const btn = document.getElementById('dark-mode-toggle');
        if (!btn) return;
        if (document.documentElement.classList.contains('dark')) {
            btn.innerHTML = '<i class="fa fa-sun"></i>';
            btn.setAttribute('aria-label', '切换亮色模式');
        } else {
            btn.innerHTML = '<i class="fa fa-moon"></i>';
            btn.setAttribute('aria-label', '切换暗色模式');
        }
    }

    // 6. 事件绑定
    document.addEventListener('DOMContentLoaded', function () {
        initTheme();
        updateButtonIcon();

        // 切换按钮
        const btn = document.getElementById('dark-mode-toggle');
        if (btn) {
            btn.addEventListener('click', function () {
                toggleTheme();
                updateButtonIcon();
            });
        }

        // 监听系统变更
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            if (!localStorage.getItem('theme')) { // 仅在未自定义时跟随系统
                applyTheme(e.matches);
                updateButtonIcon();
            }
        });
    });
})();