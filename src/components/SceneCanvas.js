const canvas = document.getElementById("editorCanvas");
const ctx = canvas.getContext("2d");

const character = {
  x: 200,
  y: 250,
  radius: 20,
  color: "var(--accent)",
  label: "Character",
};
const camera = {
  x: 450,
  y: 250,
  size: 30,
  color: "var(--text-primary)",
  label: "Camera",
};
let dragging = null;
let dragOffsetX, dragOffsetY;

function resizeCanvas() {
  const parent = canvas.parentElement;
  canvas.width = parent.clientWidth;
  canvas.height = parent.clientHeight;
  draw();
}

function drawCamera(x, y, size) {
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(x, y - size / 2);
  ctx.lineTo(x - size, y + size / 2);
  ctx.lineTo(x + size, y + size / 2);
  ctx.closePath();
  ctx.strokeStyle = camera.color;
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.restore();
}

function drawCharacter(x, y, radius) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = character.color;
  ctx.fill();
}

function drawConnectionLine() {
  ctx.beginPath();
  ctx.moveTo(character.x, character.y);
  ctx.lineTo(camera.x, camera.y);
  ctx.strokeStyle = "var(--connection-line)";
  ctx.lineWidth = 2;
  ctx.stroke();
}

function drawLabels() {
  ctx.fillStyle = "var(--text-secondary)";
  ctx.font = "12px Inter";
  ctx.textAlign = "center";
  ctx.fillText(character.label, character.x, character.y + character.radius + 15);
  ctx.fillText(camera.label, camera.x, camera.y + camera.size / 2 + 15);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawConnectionLine();
  drawCamera(camera.x, camera.y, camera.size);
  drawCharacter(character.x, character.y, character.radius);
  drawLabels();
}

function getMousePos(evt) {
  const rect = canvas.getBoundingClientRect();
  return { x: evt.clientX - rect.left, y: evt.clientY - rect.top };
}

function isMouseOverCharacter(pos) {
  const dx = pos.x - character.x;
  const dy = pos.y - character.y;
  return dx * dx + dy * dy < character.radius * character.radius;
}

function isMouseOverCamera(pos) {
  const halfSize = camera.size;
  return (
    pos.x > camera.x - halfSize &&
    pos.x < camera.x + halfSize &&
    pos.y > camera.y - camera.size / 2 &&
    pos.y < camera.y + camera.size / 2
  );
}

function onMouseDown(e) {
  const pos = getMousePos(e);
  if (isMouseOverCharacter(pos)) {
    dragging = character;
  } else if (isMouseOverCamera(pos)) {
    dragging = camera;
  }
  if (dragging) {
    dragOffsetX = pos.x - dragging.x;
    dragOffsetY = pos.y - dragging.y;
  }
}

function onMouseMove(e) {
  const pos = getMousePos(e);
  if (dragging) {
    dragging.x = pos.x - dragOffsetX;
    dragging.y = pos.y - dragOffsetY;
    draw();
  }
  canvas.style.cursor = isMouseOverCharacter(pos) || isMouseOverCamera(pos) ? "grab" : "default";
}

function onMouseUp() {
  dragging = null;
  canvas.style.cursor = "default";
}

export function initializeCanvas() {
  canvas.addEventListener("mousedown", onMouseDown);
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mouseup", onMouseUp);
  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();
}