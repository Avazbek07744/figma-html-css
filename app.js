document.getElementById('toggleButton').addEventListener('click', function () {
    let navbar = document.getElementById('navbar');
    if (navbar.style.display === 'block') {
        navbar.style.display = 'none';
    } else {
        navbar.style.display = 'block';
    }
});

function ToggleBtn() {
    let body = document.body;
    let btn = document.getElementById('ab')
    body.classList.toggle("dark-mode")

    if (btn.textContent == 'Dark') {
        btn.textContent = 'Light'
    } else {
        btn.textContent = 'Light'
    }
}