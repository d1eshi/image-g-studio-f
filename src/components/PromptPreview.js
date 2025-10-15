import { appState, subscribe } from '../state/appState.js';

export function PromptPreviewComponent(element) {
  const promptTextElement = element.querySelector('#prompt-text');
  const promptJsonElement = element.querySelector('#prompt-json');

  function getDistance() {
    const camPos = appState.camera.position;
    const charPos = appState.character.position;
    const distance = Math.sqrt((camPos.x - charPos.x) ** 2 + (camPos.y - charPos.y) ** 2);

    if (distance < 100) return 'close-up shot';
    if (distance < 300) return 'medium shot';
    return 'wide shot';
  }

  function getAngle() {
    const camPos = appState.camera.position;
    const charPos = appState.character.position;
    const dy = camPos.y - charPos.y;

    if (dy > 50) return 'low angle';
    if (dy < -50) return 'high angle';
    return 'eye-level';
  }

  function render() {
    const distance = getDistance();
    const angle = getAngle();

    const promptData = {
      scene: appState.scene.environment,
      character: {
        type: appState.character.type,
        action: appState.character.action,
        emotion: appState.character.emotion,
      },
      camera: {
        angle: angle,
        lens: appState.camera.lens,
        movement: appState.camera.movement,
        distance: distance,
      },
      timing: {
        duration: appState.camera.duration,
      },
    };

    const text = `A cinematic video of a ${promptData.character.type} ${promptData.character.action} in a ${promptData.scene}. The camera is positioned at ${promptData.camera.angle}, using a ${promptData.camera.lens} lens, with a ${promptData.camera.movement} ${promptData.camera.distance} lasting ${promptData.timing.duration}.`;

    promptTextElement.textContent = text;
    promptJsonElement.textContent = JSON.stringify(promptData, null, 2);
  }

  subscribe(render);
  render(); // Initial render

  console.log('PromptPreviewComponent initialized');
}
