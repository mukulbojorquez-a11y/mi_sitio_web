// Función para alternar el menú móvil
function toggleMenu() {
  document.querySelector(".nav-list").classList.toggle("show");
  const toggleButton = document.querySelector(".nav-toggle");
  toggleButton.textContent = toggleButton.textContent === "☰" ? "✕" : "☰";
}

// Función para alternar entre modo claro y oscuro
function toggleTheme() {
  document.body.classList.toggle("light");
  localStorage.setItem("theme", document.body.classList.contains("light") ? "light" : "dark");
}

// Carga el tema guardado al recargar la página
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
}

// Funciones para abrir y cerrar modales de personajes
function openModal(id) {
  document.getElementById(`${id}-modal`).style.display = "block";
}

function closeModal(id) {
  document.getElementById(`${id}-modal`).style.display = "none";
}

// Funciones para abrir y cerrar el lightbox de imágenes
function openLightbox(src) {
  document.getElementById("lightbox-img").src = src;
  document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

// Funciones para abrir y cerrar modales de noticias
function openNewsModal(id) {
  document.getElementById(`${id}-modal`).style.display = "block";
}

function closeNewsModal(id) {
  document.getElementById(`${id}-modal`).style.display = "none";
}

// Función para controlar la música de fondo
function toggleMusic() {
  const music = document.getElementById("bg-music");
  const button = document.querySelector(".btn[onclick='toggleMusic()']");
  if (music.paused) {
    music.play();
    button.textContent = "🔇 Pausar";
  } else {
    music.pause();
    button.textContent = "🎵 Música";
  }
}

// Función para validar el formulario de contacto
function validateForm(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (!name || !email || !message) {
    alert("Todos los campos son obligatorios.");
    return;
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    alert("Por favor, ingresa un correo electrónico válido.");
    return;
  }

  alert("¡Mensaje enviado con éxito!");
  event.target.reset();
}

// Establece el año actual en el pie de página
document.getElementById("year").textContent = new Date().getFullYear();

