import { state, models } from "./state.js";
import { generateEnhancedPrompt } from "./api/providers/gemini.js";
import { createModelSelector, addVideoToGallery } from "./ui/components.js";

document.addEventListener("DOMContentLoaded", () => {
  // --- DOM Elements ---
  const ideaTextarea = document.getElementById("idea");
  const styleOptions = document.querySelectorAll(".option");
  const generatePromptBtn = document.getElementById("generatePrompt");
  const promptPreviewSection = document.getElementById("promptPreview");
  const promptText = document.querySelector(".prompt-text");
  const editPromptBtn = document.getElementById("editPrompt");
  const generateVideoBtn = document.getElementById("generateVideo");
  const galleryGrid = document.querySelector("#gallery .grid");
  const modelSelectorContainer = document.getElementById(
    "modelSelectorContainer",
  );

  // --- Initial Setup ---
  state.selectedModel = createModelSelector(modelSelectorContainer);

  // --- Event Listeners ---

  styleOptions.forEach((option) => {
    option.addEventListener("click", () => {
      styleOptions.forEach((opt) => opt.classList.remove("selected"));
      option.classList.add("selected");
      state.selectedStyle = option.dataset.style;
    });
  });

  generatePromptBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    const idea = ideaTextarea.value.trim();

    if (!idea || !state.selectedStyle || !state.selectedModel) {
      alert("Please enter your idea, select a style, and choose a model.");
      return;
    }

    // Show loading state
    generatePromptBtn.textContent = "Generating...";
    generatePromptBtn.disabled = true;

    try {
      const enhancedPrompt = await generateEnhancedPrompt(
        idea,
        state.selectedStyle,
        state.selectedModel,
      );
      promptText.textContent = enhancedPrompt;
      promptPreviewSection.style.display = "block";
    } catch (error) {
      console.error("Error generating prompt:", error);
      alert("There was an error generating the prompt. Please try again.");
    } finally {
      // Restore button state
      generatePromptBtn.textContent = "Generate prompt";
      generatePromptBtn.disabled = false;
    }
  });

  editPromptBtn.addEventListener("click", () => {
    promptText.contentEditable = true;
    promptText.focus();
  });

  generateVideoBtn.addEventListener("click", () => {
    const prompt = promptText.textContent;
    addVideoToGallery(galleryGrid, {
      title: prompt.substring(0, 30) + "...",
      previewUrl: "https://via.placeholder.com/300x200.png?text=Generating...",
      url: "#",
      createdAt: new Date(),
    });
  });

  // --- Dynamic Event Listeners for Model Selector ---

  // Using event delegation on the container
  modelSelectorContainer.addEventListener("click", (e) => {
    const dropdown = document.getElementById("modelSelectorDropdown");
    const modelBtn = document.getElementById("modelSelectorBtn");

    // Toggle dropdown
    if (e.target === modelBtn || e.target.parentElement === modelBtn) {
      dropdown.style.display =
        dropdown.style.display === "block" ? "none" : "block";
    }

    // Handle option selection
    const option = e.target.closest(".model-selector-option");
    if (option) {
      state.selectedModel = option.dataset.modelId;
      const selectedModelData = models.find((m) => m.id === state.selectedModel);
      document.querySelector("#modelSelectorBtn span").textContent =
        selectedModelData.name;
      dropdown.style.display = "none";
    }
  });

  // Close dropdown if clicking outside
  document.addEventListener("click", (e) => {
    const dropdown = document.getElementById("modelSelectorDropdown");
    if (dropdown && !e.target.closest(".model-selector")) {
      dropdown.style.display = "none";
    }
  });
});