const openBtn = document.getElementById("openBtn");
const intro = document.getElementById("intro");

const musicBtn = document.getElementById("musicBtn");
const music = document.getElementById("music");

const secretBtn = document.getElementById("secretBtn");
const secretMessage = document.getElementById("secretMessage");

const replayBtn = document.getElementById("replayBtn");

// =========================
// OPEN WEBSITE
// =========================

openBtn.addEventListener("click", () => {

intro.classList.add("opened");

window.scrollTo({
top: window.innerHeight,
behavior: "smooth"
});

});

// =========================
// MUSIC
// =========================

musicBtn.addEventListener("click", async () => {

try {

if (music.paused) {

  await music.play();

  musicBtn.textContent = "❚❚";

} else {

  music.pause();

  musicBtn.textContent = "♪";

}

} catch (error) {

alert("Please put teachers-day.mp3 inside the music folder.");

}

});

// =========================
// SECRET MESSAGE
// =========================

secretBtn.addEventListener("click", () => {

secretMessage.classList.toggle("show");

if (secretMessage.classList.contains("show")) {

secretBtn.textContent =
  "You found the last message ❤️";

} else {

secretBtn.textContent =
  "One last thing...";

}

});

// =========================
// REPLAY
// =========================

replayBtn.addEventListener("click", () => {

window.scrollTo({
top: 0,
behavior: "smooth"
});

});

// =========================
// SCROLL REVEAL
// =========================

const observer = new IntersectionObserver(
(entries) => {

entries.forEach((entry) => {

  if (entry.isIntersecting) {

    entry.target.classList.add("visible");

  }

});

},
{
threshold: 0.12
}
);

document.querySelectorAll(".reveal").forEach((element) => {

observer.observe(element);

});

// =========================
// LIGHTBOX
// =========================

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeLightbox = document.getElementById("closeLightbox");

document.querySelectorAll(".gallery-item img").forEach((img) => {

img.addEventListener("click", () => {

if (img.classList.contains("missing")) {
  return;
}

lightboxImg.src = img.src;
lightboxImg.alt = img.alt;

lightbox.classList.add("show");

lightbox.setAttribute(
  "aria-hidden",
  "false"
);

document.body.classList.add("locked");

});

});

function closeBox() {

lightbox.classList.remove("show");

lightbox.setAttribute(
"aria-hidden",
"true"
);

document.body.classList.remove("locked");

lightboxImg.src = "";

}

closeLightbox.addEventListener(
"click",
closeBox
);

lightbox.addEventListener("click", (event) => {

if (event.target === lightbox) {

closeBox();

}

});

// =========================
// ESC KEY
// =========================

document.addEventListener("keydown", (event) => {

if (event.key === "Escape") {

closeBox();

}

});

// =========================
// IMAGE ERROR HANDLING
// =========================

document.querySelectorAll("img").forEach((img) => {

img.addEventListener("error", () => {

img.classList.add("missing");

});

});