/**
 * ============================================================
 *  LÓGICA DE LA APP
 * ============================================================
 * Genera los libros escondidos sobre la escena a partir de
 * BOOKS (definido en books-data.js), gestiona el contador de
 * "encontrados" y abre la ficha del libro al hacer clic.
 * ============================================================
 */

(function () {
  const hotspotsEl = document.getElementById("hotspots");
  const foundCountEl = document.getElementById("foundCount");
  const totalCountEl = document.getElementById("totalCount");
  const totalBooksEl = document.getElementById("totalBooks");

  const modal = document.getElementById("bookModal");
  const backdrop = document.getElementById("bookBackdrop");
  const closeBtn = document.getElementById("bookClose");
  const titleEl = document.getElementById("bookTitle");
  const authorEl = document.getElementById("bookAuthor");
  const synopsisEl = document.getElementById("bookSynopsis");
  const starsEl = document.getElementById("bookStars");
  const sealEl = document.getElementById("bookSeal");

  const COVER_COLORS = ["#8a5a3b", "#3b4a3a", "#c96b84", "#5e3b23", "#c98a4b", "#4f6a52", "#a4577a"];

  const found = new Set();
  let lastFocusedSpot = null;

  function bookIconSVG(coverColor) {
    return `
      <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="7" width="27" height="29" rx="2.5" fill="${coverColor}" stroke="#3a2f28" stroke-width="0.6"/>
        <rect x="6" y="7" width="6" height="29" rx="2.5" fill="rgba(0,0,0,.18)"/>
        <rect x="13" y="9.5" width="18.5" height="24" rx="1" fill="#faf3e1"/>
        <line x1="16.5" y1="14" x2="28" y2="14" stroke="#cbb98f" stroke-width="1.1" stroke-linecap="round"/>
        <line x1="16.5" y1="18" x2="28" y2="18" stroke="#cbb98f" stroke-width="1.1" stroke-linecap="round"/>
        <line x1="16.5" y1="22" x2="25" y2="22" stroke="#cbb98f" stroke-width="1.1" stroke-linecap="round"/>
        <rect x="24" y="3" width="4" height="13" fill="#d9748e"/>
        <polygon points="24,16 28,16 26,20" fill="#d9748e"/>
      </svg>
    `;
  }

  function starsHTML(rating) {
    let html = "";
    for (let i = 1; i <= 5; i++) {
      const fill = Math.max(0, Math.min(1, rating - (i - 1))); // 0, 0.5 o 1
      if (fill >= 1) {
        html += `<span class="star star--full">★</span>`;
      } else if (fill > 0) {
        html += `<span class="star star--half"><span class="star--half-fill">★</span>★</span>`;
      } else {
        html += `<span class="star star--empty">★</span>`;
      }
    }
    return html;
  }

  function updateProgress() {
    foundCountEl.textContent = found.size;
  }

  function openBook(book, triggerEl) {
    lastFocusedSpot = triggerEl;

    titleEl.textContent = book.title;
    authorEl.textContent = book.author ? `por ${book.author}` : "";
    authorEl.style.display = book.author ? "block" : "none";
    synopsisEl.textContent = book.synopsis;
    starsEl.innerHTML = starsHTML(book.rating);
    sealEl.textContent = book.rating.toFixed(1);

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    closeBtn.focus();

    if (!found.has(book.id)) {
      found.add(book.id);
      updateProgress();
      triggerEl.classList.add("found");
    }
  }

  function closeBook() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    if (lastFocusedSpot) lastFocusedSpot.focus();
  }

  closeBtn.addEventListener("click", closeBook);
  backdrop.addEventListener("click", closeBook);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) closeBook();
  });

  // Debe coincidir con `object-position` del CSS (.scene__bg-blur)
  const OBJECT_POSITION = { x: 0.5, y: 0.42 };
  // Cuánto se permite "hacer zoom" sobre el ajuste completo (contain) antes
  // de dejar de recortar y mostrar barras rellenas con el fondo borroso.
  // 1 = nunca recorta (siempre se ve la imagen entera). Cuanto más alto,
  // más se parece a pantalla completa a costa de poder recortar libros
  // en pantallas muy distintas a la proporción de la foto.
  const MAX_ZOOM = 1.25;

  const sceneImg = document.getElementById("sceneImg");
  let naturalW = 736;
  let naturalH = 414;

  function computeRect() {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const scaleCover = Math.max(vw / naturalW, vh / naturalH);
    const scaleContain = Math.min(vw / naturalW, vh / naturalH);
    const scale = Math.min(scaleCover, scaleContain * MAX_ZOOM);
    const dispW = naturalW * scale;
    const dispH = naturalH * scale;
    const offsetX = (vw - dispW) * OBJECT_POSITION.x;
    const offsetY = (vh - dispH) * OBJECT_POSITION.y;
    return { dispW, dispH, offsetX, offsetY };
  }

  function positionScene() {
    const rect = computeRect();

    if (sceneImg) {
      sceneImg.style.width = rect.dispW + "px";
      sceneImg.style.height = rect.dispH + "px";
      sceneImg.style.left = rect.offsetX + "px";
      sceneImg.style.top = rect.offsetY + "px";
    }

    hotspotsEl.querySelectorAll(".book-spot").forEach((el) => {
      const bx = parseFloat(el.dataset.x);
      const by = parseFloat(el.dataset.y);
      const px = rect.offsetX + (bx / 100) * rect.dispW;
      const py = rect.offsetY + (by / 100) * rect.dispH;
      el.style.left = px + "px";
      el.style.top = py + "px";
    });
  }

  let resizeRaf = null;
  function schedulePosition() {
    if (resizeRaf) cancelAnimationFrame(resizeRaf);
    resizeRaf = requestAnimationFrame(positionScene);
  }

  function buildHotspots() {
    totalCountEl.textContent = BOOKS.length;
    totalBooksEl.textContent = BOOKS.length;

    BOOKS.forEach((book, i) => {
      const btn = document.createElement("button");
      btn.className = "book-spot";
      btn.type = "button";
      btn.dataset.x = book.x;
      btn.dataset.y = book.y;
      btn.style.setProperty("--w", (book.size || 34) + "px");
      btn.style.setProperty("--h", (book.size || 34) + "px");
      btn.style.setProperty("--delay", (i * 0.35) + "s");
      btn.setAttribute("aria-label", "Libro escondido: " + book.title);

      const color = COVER_COLORS[i % COVER_COLORS.length];
      btn.innerHTML = bookIconSVG(color) + '<span class="book-spot__check">✓</span>';

      btn.addEventListener("click", () => openBook(book, btn));

      hotspotsEl.appendChild(btn);
    });

    positionScene();
  }

  buildHotspots();

  if (sceneImg) {
    if (sceneImg.naturalWidth) {
      naturalW = sceneImg.naturalWidth;
      naturalH = sceneImg.naturalHeight;
      positionScene();
    } else {
      sceneImg.addEventListener("load", () => {
        naturalW = sceneImg.naturalWidth;
        naturalH = sceneImg.naturalHeight;
        positionScene();
      });
    }
  }

  window.addEventListener("resize", schedulePosition);
  window.addEventListener("orientationchange", schedulePosition);
})();
