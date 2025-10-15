const subscribers = [];

const state = {
  character: {
    name: 'human',
    type: 'human',
    action: 'sitting',
    emotion: 'neutral',
    position: { x: 250, y: 250 },
  },
  camera: {
    lens: '35mm',
    movement: 'static',
    duration: '10s',
    position: { x: 550, y: 250 },
  },
  scene: {
    environment: 'interior',
  },
};

const handler = {
  set(target, property, value) {
    target[property] = value;
    publish();
    return true;
  },
  get(target, property) {
    if (typeof target[property] === 'object' && target[property] !== null) {
      return new Proxy(target[property], handler);
    }
    return target[property];
  },
};

function publish() {
  subscribers.forEach((callback) => callback());
}

export const appState = new Proxy(state, handler);

export function subscribe(callback) {
  subscribers.push(callback);
}
