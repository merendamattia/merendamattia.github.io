function toggleMenu() {
    const menu = document.getElementById('headmenu');
    menu.classList.toggle('active');

    // Toggle mobile menu button animation
    const menuBtn = document.querySelector('.mobile-menu-btn');
    menuBtn.classList.toggle('open');
}
