// --- Галерея ---
let currentIndex = 0;
const images = document.querySelectorAll(".gallery-img");

function showImage(index) {
  images.forEach((img, i) => {
    img.style.display = (i === index) ? "block" : "none";
  });
}

function prevImage() {
  currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
  showImage(currentIndex);
}

function nextImage() {
  currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
  showImage(currentIndex);
}

// Поддержка свайпов на мобильных для галереи
let touchStartX = 0;
let touchEndX = 0;
const galleryContainer = document.querySelector('.gallery-container');

galleryContainer.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
});
galleryContainer.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  if (touchEndX < touchStartX - 30) { // свайп влево
    nextImage();
  }
  if (touchEndX > touchStartX + 30) { // свайп вправо
    prevImage();
  }
});

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  // Добавляем сердечко в контейнер заднего фона
  document.getElementById("heart-container").appendChild(heart);

  const size = Math.random() * 30 + 30 + "px"; // Размер от 30px до 60px
  heart.style.fontSize = size;
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 2 + "s"; // от 2 до 5 секунд

  // Удаляем сердечко через 5 секунд
  setTimeout(() => {
    heart.remove();
  }, 5000);
}

// Запускаем создание сердечек каждые 200 мс
setInterval(createHeart, 200);

// --- Фоновая музыка ---
const toggleMusicBtn = document.getElementById("toggleMusic");
const bgMusic = document.getElementById("bgMusic");

toggleMusicBtn.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.play();
    toggleMusicBtn.textContent = "Выключить музыку";
  } else {
    bgMusic.pause();
    toggleMusicBtn.textContent = "Включить музыку";
  }
});


document.getElementById("triggerConfetti").addEventListener("click", launchConfetti);

// --- Интерактивное пожелание ---
const messageForm = document.getElementById("messageForm");
const messagesContainer = document.getElementById("messagesContainer");

messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const msgText = document.getElementById("userMessage").value;
  if (msgText.trim() !== "") {
    const msgDiv = document.createElement("div");
    msgDiv.classList.add("user-message");
    msgDiv.textContent = msgText;
    messagesContainer.appendChild(msgDiv);
    document.getElementById("userMessage").value = "";
  }
});

// --- Секретное сообщение (пасхалка) ---
// При клике на заголовок появляется секретное сообщение
document.getElementById("secretTrigger").addEventListener("click", () => {
  const secret = document.getElementById("secretMessage");
  secret.style.display = (secret.style.display === "none" || secret.style.display === "") ? "block" : "none";
});
