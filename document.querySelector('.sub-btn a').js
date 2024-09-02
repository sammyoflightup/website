document.querySelector('.sub-btn a').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default action
    const button = this;
    button.classList.add('active');
    setTimeout(() => {
        button.classList.remove('active');
    }, 5000);
});
