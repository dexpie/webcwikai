document.addEventListener('DOMContentLoaded', function () {
    const loadingScreen = document.getElementById('loading-screen');
    console.log(loadingScreen); // Cek apakah elemen ditemukan

    if (loadingScreen) {
        loadingScreen.style.display = 'none'; // Tersembunyi jika ditemukan
    }
});
