import { appState } from './state/appState.js';
import { SceneCanvasComponent } from './components/SceneCanvas.js';
import { PropertiesPanelComponent } from './components/PropertiesPanel.js';
import { PromptPreviewComponent } from './components/PromptPreview.js';

document.addEventListener('DOMContentLoaded', () => {
  // --- DOM Elements ---
  const canvasContainer = document.getElementById('canvas-container');
  const propertiesPanel = document.getElementById('properties-panel');
  const promptPreview = document.getElementById('prompt-preview');

  // --- Initial Setup ---
  SceneCanvasComponent(canvasContainer);
  PropertiesPanelComponent(propertiesPanel);
  PromptPreviewComponent(promptPreview);

  console.log('Sora Studio 2D Scene Composer initialized');
  console.log('Initial state:', appState);
});
