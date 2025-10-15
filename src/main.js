import "./styles/input.css";
import { initializeCanvas } from "./components/SceneCanvas.js";
import { initializePropertiesPanel } from "./components/PropertiesPanel.js";
import { initializeModals, showModal, hideModal, addClipToUI } from "./ui/components.js";
import { generateImage } from "./api/gemini.js";

document.addEventListener("DOMContentLoaded", () => {
  // Initialize all UI components
  initializeCanvas();
  initializePropertiesPanel();
  initializeModals();

  // Main "Generate Video" button logic
  const generateVideoBtn = document.getElementById("generateVideoBtn");
  const aiPromptTextarea = document.getElementById("aiPrompt");
  const sceneNameInput = document.getElementById("sceneName");

  generateVideoBtn.addEventListener("click", async () => {
    const sceneName = sceneNameInput.value.trim();
    const prompt = aiPromptTextarea.value.trim();

    if (!prompt) {
      showModal("Error", false, "El prompt de la IA no puede estar vacío. Por favor, genera un prompt primero.");
      return;
    }

    generateVideoBtn.disabled = true;
    showModal(`Generando: "${sceneName}"`);

    try {
      const imageUrl = await generateImage(prompt);
      addClipToUI(imageUrl, sceneName);
      hideModal();
    } catch (error) {
      console.error("Error generating video:", error);
      showModal("Error de Generación", false, "No se pudo generar el video. Intenta de nuevo más tarde.");
    } finally {
      generateVideoBtn.disabled = false;
    }
  });
});