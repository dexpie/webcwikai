// Smooth scroll untuk navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Menambahkan efek fade-in saat elemen muncul
document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.fade-in-up');
    elements.forEach(element => {
        element.classList.add('aos-animate');
    });
});
