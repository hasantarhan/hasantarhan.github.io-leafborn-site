(function () {
  'use strict';

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = window.matchMedia('(pointer: fine)');
  if (reducedMotion.matches || !finePointer.matches) return;

  const colors = ['#75b022', '#8bcf4a', '#4fae76', '#d8b552'];
  document.documentElement.classList.add('leaf-cursor-enabled');
  const trail = document.createElement('div');
  trail.className = 'leaf-cursor-trail';
  trail.setAttribute('aria-hidden', 'true');
  document.body.appendChild(trail);

  let lastPoint = null;
  let activeLeaves = 0;
  const maxLeaves = 32;

  function randomBetween(min, max) {
    return min + Math.random() * (max - min);
  }

  function spawnLeaf(x, y, movementX, movementY) {
    if (activeLeaves >= maxLeaves) return;

    const speed = Math.hypot(movementX, movementY);
    const directionX = speed ? movementX / speed : 0;
    const directionY = speed ? movementY / speed : 0;
    const side = randomBetween(-10, 10);
    const size = randomBetween(9, 18);
    const driftStrength = randomBetween(20, 42);
    const leaf = document.createElement('span');

    leaf.className = 'cursor-leaf';
    leaf.style.left = (x - directionY * side) + 'px';
    leaf.style.top = (y + directionX * side) + 'px';
    leaf.style.setProperty('--leaf-size', size + 'px');
    leaf.style.setProperty('--leaf-color', colors[Math.floor(Math.random() * colors.length)]);
    leaf.style.setProperty('--leaf-opacity', randomBetween(.48, .82).toFixed(2));
    leaf.style.setProperty('--leaf-duration', randomBetween(720, 1080) + 'ms');
    leaf.style.setProperty('--leaf-start-rotation', randomBetween(0, 360) + 'deg');
    leaf.style.setProperty('--leaf-end-rotation', randomBetween(260, 620) + 'deg');
    leaf.style.setProperty('--leaf-drift-x', (-directionX * driftStrength + randomBetween(-15, 15)) + 'px');
    leaf.style.setProperty('--leaf-drift-y', (-directionY * driftStrength + randomBetween(18, 42)) + 'px');

    activeLeaves += 1;
    trail.appendChild(leaf);
    leaf.addEventListener('animationend', function () {
      leaf.remove();
      activeLeaves -= 1;
    }, { once: true });
  }

  window.addEventListener('pointermove', function (event) {
    if (event.pointerType && event.pointerType !== 'mouse') return;

    const point = { x: event.clientX, y: event.clientY };
    if (!lastPoint) {
      lastPoint = point;
      return;
    }

    const movementX = point.x - lastPoint.x;
    const movementY = point.y - lastPoint.y;
    const distance = Math.hypot(movementX, movementY);

    if (distance > 180) {
      lastPoint = point;
      return;
    }

    const spacing = 15;
    const leafCount = Math.min(4, Math.floor(distance / spacing));
    for (let index = 1; index <= leafCount; index += 1) {
      const progress = index / leafCount;
      spawnLeaf(
        lastPoint.x + movementX * progress,
        lastPoint.y + movementY * progress,
        movementX,
        movementY
      );
    }

    if (distance >= spacing) lastPoint = point;
  }, { passive: true });

  window.addEventListener('blur', function () {
    lastPoint = null;
  });
}());
