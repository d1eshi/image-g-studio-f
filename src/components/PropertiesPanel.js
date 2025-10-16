import { generateEnhancedPrompt } from "../api/providers/gemini.js";

const generatePromptBtn = document.getElementById("generatePromptBtn");
const aiPromptTextarea = document.getElementById("aiPrompt");

async function handleGeneratePrompt() {
  const sceneName = document.getElementById("sceneName").value;
  const sceneStyle = document.getElementById("sceneStyle").value;
  const charModel = document.getElementById("charModel").value;
  const charEmotion = document.getElementById("charEmotion").value;
  const charAction = document.getElementById("charAction").value;
  const cameraShot = document.getElementById("cameraShot").value;
  const cameraMovement = document.getElementById("cameraMovement").value;

  const userQuery = `Generate a detailed video prompt based on these elements:\n- Scene Name: ${sceneName}\n- Visual Style: ${sceneStyle}\n- Character: ${charModel}\n- Character's Emotion: ${charEmotion}\n- Character's Action: ${charAction}\n- Camera Shot: ${cameraShot}\n- Camera Movement: ${cameraMovement}`;

  generatePromptBtn.disabled = true;
  generatePromptBtn.textContent = "Generando...";
  aiPromptTextarea.value = "Contactando a la IA...";

  const prompt = await generateEnhancedPrompt(
    userQuery,
    sceneStyle,
    "gemini-1.5-flash",
  );
  aiPromptTextarea.value = prompt;

  generatePromptBtn.disabled = false;
  generatePromptBtn.innerHTML = "✨ Sugerir Prompt Detallado";
}

export function initializePropertiesPanel() {
  generatePromptBtn.addEventListener("click", handleGeneratePrompt);
}