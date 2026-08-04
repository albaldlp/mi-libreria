/**
 * ============================================================
 *  PÉTALOS FLOTANTES
 * ============================================================
 * Animación en <canvas> de pétalos de sakura cayendo muy despacio,
 * con un balanceo suave (como motas de luz flotando), inspirada
 * en el movimiento lento y calmado de las referencias "cozy".
 *
 * Se puede ajustar la cantidad y velocidad cambiando PETAL_COUNT
 * y los rangos de "speed" / "sway" más abajo.
 * ============================================================
 */

(function () {
  const canvas = document.getElementById("petalCanvas");
  if (!canvas) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) return;

  const ctx = canvas.getContext("2d");
  let width = 0;
  let height = 0;
  let dpr = Math.min(window.devicePixelRatio || 1, 2);

  const PETAL_COUNT = 400;
  const petals = [];

  function resize() {
    const rect = canvas.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function rand(min, max) {
    return Math.random() * (max - min) + min;
  }

  function makePetal(initial) {
    return {
      x: rand(0, width),
      y: initial ? rand(0, height) : -rand(10, 40),
      size: rand(5, 10),
      speed: rand(6, 14), // px por segundo, caída lenta
      sway: rand(14, 34), // amplitud del balanceo lateral
      swaySpeed: rand(0.4, 0.9), // velocidad del balanceo
      swayOffset: rand(0, Math.PI * 2),
      rotation: rand(0, Math.PI * 2),
      rotationSpeed: rand(-0.4, 0.4),
      hue: rand(-8, 8), // variación de tono rosado
      opacity: rand(0.55, 0.9),
    };
  }

  function initPetals() {
    petals.length = 0;
    for (let i = 0; i < PETAL_COUNT; i++) {
      petals.push(makePetal(true));
    }
  }

  function drawPetal(p) {
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rotation);
    ctx.globalAlpha = p.opacity;

    const grad = ctx.createLinearGradient(-p.size, -p.size, p.size, p.size);
    grad.addColorStop(0, `hsl(${340 + p.hue}, 70%, 88%)`);
    grad.addColorStop(1, `hsl(${335 + p.hue}, 65%, 74%)`);
    ctx.fillStyle = grad;

    ctx.beginPath();
    // Pétalo: forma de gota asimétrica
    ctx.moveTo(0, -p.size);
    ctx.quadraticCurveTo(p.size, -p.size * 0.4, 0, p.size);
    ctx.quadraticCurveTo(-p.size, -p.size * 0.4, 0, -p.size);
    ctx.fill();

    ctx.restore();
  }

  let lastTime = performance.now();

  function tick(now) {
    const dt = Math.min((now - lastTime) / 1000, 0.05);
    lastTime = now;

    ctx.clearRect(0, 0, width, height);

    for (const p of petals) {
      p.y += p.speed * dt;
      p.swayOffset += p.swaySpeed * dt;
      p.x += Math.sin(p.swayOffset) * p.sway * dt * 0.6;
      p.rotation += p.rotationSpeed * dt;

      if (p.y - p.size > height) {
        Object.assign(p, makePetal(false));
      }
      if (p.x < -20) p.x = width + 20;
      if (p.x > width + 20) p.x = -20;

      drawPetal(p);
    }

    requestAnimationFrame(tick);
  }

  const ro = new ResizeObserver(() => {
    resize();
  });
  ro.observe(canvas);

  resize();
  initPetals();
  requestAnimationFrame(tick);
})();
