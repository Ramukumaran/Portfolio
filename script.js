// 1) Light / dark toggle (remembers the choice)
const root = document.documentElement;
const themeBtn = document.getElementById("theme-btn");
try {
  const saved = localStorage.getItem("theme");
  if (saved) root.setAttribute("data-theme", saved);
} catch (e) {}
themeBtn.addEventListener("click", () => {
  const isDark =
    root.getAttribute("data-theme") === "dark" ||
    (!root.getAttribute("data-theme") && matchMedia("(prefers-color-scheme: dark)").matches);
  const next = isDark ? "light" : "dark";
  root.setAttribute("data-theme", next);
  try { localStorage.setItem("theme", next); } catch (e) {}
});

// 2) Mobile menu
const nav = document.getElementById("nav");
document.getElementById("menu-btn").addEventListener("click", () => nav.classList.toggle("open"));
nav.addEventListener("click", (e) => { if (e.target.tagName === "A") nav.classList.remove("open"); });

// 3) Click any image inside ".shots" to zoom it
const box = document.getElementById("lightbox");
const boxImg = box.querySelector("img");
document.querySelectorAll(".shots img").forEach((img) => {
  img.addEventListener("click", () => { boxImg.src = img.src; boxImg.alt = img.alt; box.classList.add("open"); });
});
box.addEventListener("click", () => box.classList.remove("open"));
document.addEventListener("keydown", (e) => { if (e.key === "Escape") box.classList.remove("open"); });

// 4) Footer year
document.getElementById("year").textContent = new Date().getFullYear();
