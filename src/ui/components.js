import { models } from "../state.js";

/**
 * Creates and injects the model selector into the DOM.
 * @param {HTMLElement} container The element to inject the selector into.
 * @returns {string} The ID of the default selected model.
 */
export function createModelSelector(container) {
  const selectorHtml = `
          <div class="model-selector">
              <button type="button" class="model-selector-btn" id="modelSelectorBtn">
                  <span>Elige tu modelo</span>
              </button>
              <div class="model-selector-dropdown" id="modelSelectorDropdown">
                  ${models
                    .map(
                      (model) => `
                      <div class="model-selector-option" data-model-id="${model.id}">
                          <h4>${model.name}</h4>
                          <p>${model.description}</p>
                      </div>
                  `,
                    )
                    .join("")}
              </div>
          </div>
      `;
  container.innerHTML = selectorHtml;

  // Set default model
  const defaultModel = models[0];
  document.querySelector("#modelSelectorBtn span").textContent = defaultModel.name;
  return defaultModel.id;
}

/**
 * Adds a video card to the gallery grid.
 * @param {HTMLElement} grid The gallery grid element.
 * @param {object} video The video object to add.
 */
export function addVideoToGallery(grid, video) {
  const videoCard = document.createElement("div");
  videoCard.classList.add("video-card");
  videoCard.innerHTML = `
          <a href="${video.url}" target="_blank">
              <img src="${video.previewUrl}" alt="${video.title}">
              <h3>${video.title}</h3>
              <p>${video.createdAt.toLocaleDateString()}</p>
          </a>
      `;
  grid.appendChild(videoCard);
}
