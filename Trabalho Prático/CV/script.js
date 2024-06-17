document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.mobile-menu-icon');
    const sidebar = document.querySelector('.sidebar');
    const closeBtn = document.querySelector('.close-btn');

    menuIcon.addEventListener('click', function () {
        sidebar.classList.toggle('show');
    });

    closeBtn.addEventListener('click', function () {
        sidebar.classList.remove('show');
    });
});
