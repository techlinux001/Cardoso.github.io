// script.js

let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const caption = document.getElementById('caption');

// Função para mostrar imagem atual
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
    });

    slides[index].classList.add('active');
    caption.textContent = slides[index].getAttribute('data-caption');
}

// Função próxima imagem
function nextImage() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

// Função imagem anterior
function prevImage() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

// Mostrar primeira imagem
showSlide(currentIndex);

// Trocar foto automaticamente a cada 5 segundos
setInterval(nextImage, 5000); // 5 segundos


// Contador de tempo desde 18/12/2024
function updateTimer() {
    const startDate = new Date("2024-12-18T00:00:00");
    const now = new Date();
    const diff = now - startDate;

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    document.getElementById('timer').innerText =
        `Eu te amo há: ${days} dias, ${hours % 24} horas e ${minutes % 60} minutos`;
}

setInterval(updateTimer, 1000);
updateTimer();


// Tocar música com clique
document.getElementById('playButton').addEventListener('click', function () {
    const audio = document.getElementById('backgroundMusic');
    audio.play().catch(() => alert("Por favor, ative o som clicando novamente."));
});