import { appState } from '../state/appState.js';

export function PropertiesPanelComponent(element) {
  const inputs = {
    character: {
      name: element.querySelector('#char-name'),
      type: element.querySelector('#char-type'),
      action: element.querySelector('#char-action'),
      emotion: element.querySelector('#char-emotion'),
    },
    camera: {
      lens: element.querySelector('#cam-lens'),
      movement: element.querySelector('#cam-movement'),
      duration: element.querySelector('#cam-duration'),
    },
    scene: {
      environment: element.querySelector('#scene-environment'),
    },
  };

  function bindInputs() {
    for (const category in inputs) {
      for (const prop in inputs[category]) {
        const inputElement = inputs[category][prop];
        inputElement.addEventListener('change', () => {
          appState[category][prop] = inputElement.value;
        });
      }
    }
  }

  bindInputs();
  console.log('PropertiesPanelComponent initialized');
}
