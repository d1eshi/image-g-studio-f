**PLAN DE ACCIÓN: Implementar Interfaz 2D para Compositor de Escenas**

**Objetivo de la Tarea:**
Desarrollar una interfaz 2D que permita a los usuarios componer una escena visualmente arrastrando un personaje y una cámara, ajustar sus propiedades y generar automáticamente un prompt de texto y un objeto JSON que describan la composición para la API de Sora, utilizando una arquitectura de componentes con Tailwind CSS.

**Arquitectura:**
*   **Patrón de Componentes:** La UI se divide en componentes (`SceneCanvas`, `PropertiesPanel`, `PromptPreview`).
*   **CSS:** Se utiliza Tailwind CSS para el estilizado.
*   **Gestión de Estado:** Un objeto `appState` centralizado con un sistema de publicación/suscripción.

**Archivos Involucrados:**
*   `src/index.html`
*   `src/main.js`
*   `src/state/appState.js`
*   `src/components/SceneCanvas.js`
*   `src/components/PropertiesPanel.js`
*   `src/components/PromptPreview.js`
*   `tailwind.config.js`
*   `package.json`

--- 

### Detalles de Implementación

#### Gestión de Estado (Pub/Sub)
Para comunicar los cambios de estado entre componentes de forma desacoplada, se implementará un sistema de publicación/suscripción en `appState.js`.

1.  **`subscribers`**: Un array para almacenar las funciones (callbacks) de los componentes que necesitan reaccionar a los cambios.
2.  **`subscribe(callback)`**: Un método que permite a un componente registrar una función para ser llamada cuando el estado cambie.
3.  **`publish()`**: Un método que itera sobre todos los `subscribers` y ejecuta sus callbacks.
4.  **`Proxy` de Estado**: El objeto `appState` será envuelto en un `Proxy` de JavaScript. Este `Proxy` interceptará cualquier modificación al estado (usando el handler `set`), aplicará el cambio y luego llamará a `publish()` automáticamente para notificar a todos los componentes suscritos.

---

### **TO-DO List de Implementación**

#### 1. `SceneCanvasComponent`
-   [x] Lógica de dibujado para personaje y cámara.
-   [x] Funcionalidad de arrastrar y soltar (Drag and Drop).
-   [x] Notificación de actualización de estado (implementar Pub/Sub).

#### 2. `PropertiesPanelComponent`
-   [x] Escuchar cambios en los inputs del formulario.
-   [x] Actualizar `appState` cuando un valor cambia.
-   [x] Suscribirse a cambios del estado para actualizar el panel si es necesario.

#### 3. `PromptPreviewComponent`
-   [x] Generar el texto del prompt y el JSON a partir de `appState`.
-   [x] Suscribirse a cambios del estado para actualizar la vista previa automáticamente.

#### 4. Gestión de Estado (`appState.js`)
-   [x] Implementar un sistema simple de Publicación/Suscripción (Pub/Sub) para que los componentes puedan reaccionar a los cambios de estado.

#### 5. Integración Final
-   [ ] Asegurar que todos los componentes se comunican y funcionan correctamente.
-   [ ] Ejecutar el build de Tailwind CSS para producción.
-   [ ] Realizar una prueba completa del flujo de usuario.

---

