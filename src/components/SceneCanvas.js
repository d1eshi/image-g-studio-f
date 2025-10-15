import { appState } from '../state/appState.js';

export function SceneCanvasComponent(element) {
  const canvas = element.querySelector('#scene-canvas');
  const ctx = canvas.getContext('2d');

  let dragging = null;

  function resizeCanvas() {
    canvas.width = element.clientWidth;
    canvas.height = element.clientHeight;
    render();
  }

  function drawCharacter() {
    const { position, name } = appState.character;
    ctx.fillStyle = '#4A90E2';
    ctx.beginPath();
    ctx.arc(position.x, position.y, 20, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#000';
    ctx.textAlign = 'center';
    ctx.fillText(name, position.x, position.y + 30);
  }

  function drawCamera() {
    const { position } = appState.camera;
    const charPosition = appState.character.position;

    ctx.save();
    ctx.translate(position.x, position.y);

    const angle = Math.atan2(charPosition.y - position.y, charPosition.x - position.x);
    ctx.rotate(angle);

    ctx.fillStyle = '#E24A4A';
    ctx.beginPath();
    ctx.moveTo(-15, -15);
    ctx.lineTo(20, 0);
    ctx.lineTo(-15, 15);
    ctx.closePath();
    ctx.fill();

    ctx.restore();
  }

  function drawLine() {
    const { position: camPos } = appState.camera;
    const { position: charPos } = appState.character;

    ctx.strokeStyle = '#999';
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(camPos.x, camPos.y);
    ctx.lineTo(charPos.x, charPos.y);
    ctx.stroke();
    ctx.setLineDash([]);
  }

  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawLine();
    drawCharacter();
    drawCamera();
  }

  function getMousePos(evt) {
    const rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top,
    };
  }

  function isInside(pos, obj) {
    return Math.sqrt((pos.x - obj.position.x) ** 2 + (pos.y - obj.position.y) ** 2) < 20;
  }

  canvas.addEventListener('mousedown', (e) => {
    const mousePos = getMousePos(e);
    if (isInside(mousePos, appState.character)) {
      dragging = 'character';
    } else if (isInside(mousePos, appState.camera)) {
      dragging = 'camera';
    }
  });

  canvas.addEventListener('mousemove', (e) => {
    if (dragging) {
      const mousePos = getMousePos(e);
      appState[dragging].position.x = mousePos.x;
      appState[dragging].position.y = mousePos.y;
      render();
    }
  });

  canvas.addEventListener('mouseup', () => {
    dragging = null;
  });

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  console.log('SceneCanvasComponent initialized');
}
