const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalContent = document.getElementById("modalContent");
const modalText = document.getElementById("modalText");
const modalActions = document.getElementById("modalActions");
const closeModalBtn = document.getElementById("closeModalBtn");

const videoPlayerModal = document.getElementById("videoPlayerModal");
const videoPlayerTitle = document.getElementById("videoPlayerTitle");
const videoPlayerImage = document.getElementById("videoPlayerImage");
const closeVideoPlayerBtn = document.getElementById("closeVideoPlayerBtn");

const clipsContainer = document.getElementById("clipsContainer");

export function initializeModals() {
  closeModalBtn.addEventListener("click", () => modal.classList.add("hidden"));
  closeVideoPlayerBtn.addEventListener("click", () => videoPlayerModal.classList.add("hidden"));
  videoPlayerModal.addEventListener("click", (e) => {
    if (e.target === videoPlayerModal) {
      videoPlayerModal.classList.add("hidden");
    }
  });
}

export function showModal(title, isLoading = true, message = "Tu video se está procesando...") {
  modalTitle.textContent = title;
  if (isLoading) {
    modalContent.innerHTML = `<div class="loader"></div>`;
    modalText.textContent = message;
    modalText.classList.remove("text-red-500");
    modalActions.classList.add("hidden");
  } else {
    modalContent.innerHTML = ``;
    modalText.textContent = message;
    modalText.classList.add("text-red-500");
    modalActions.classList.remove("hidden");
  }
  modal.classList.remove("hidden");
}

export function hideModal() {
  modal.classList.add("hidden");
}

function showVideoPlayerModal(imageUrl, sceneName) {
  videoPlayerTitle.textContent = sceneName;
  videoPlayerImage.src = imageUrl;
  videoPlayerModal.classList.remove("hidden");
}

export function addClipToUI(imageData, sceneName) {
  const clipEl = document.createElement("div");
  clipEl.className = "bg-surface border border-border rounded-lg overflow-hidden group clip-card";
  clipEl.innerHTML = `
    <div class="aspect-video bg-gray-200 flex items-center justify-center pointer-events-none">
        <img src="${imageData}" alt="${sceneName}" class="w-full h-full object-cover"/>
    </div>
    <div class="p-3 pointer-events-none">
      <p class="text-sm font-medium text-text-primary truncate">${sceneName}</p>
      <p class="text-xs text-text-secondary">Justo ahora - AI Generated</p>
    </div>
  `;
  clipEl.addEventListener("click", () => {
    showVideoPlayerModal(imageData, sceneName);
  });
  clipsContainer.prepend(clipEl);
}