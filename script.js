document.addEventListener('DOMContentLoaded', function () {
    const infoButtons = document.querySelectorAll('.info-button');
    
    infoButtons.forEach(button => {
        button.addEventListener('click', function () {
            const link = this.getAttribute('data-link');
            window.location.href = link; // 跳转到相应的详细信息页面
        });
    });
});
