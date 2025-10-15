# PLAN DE ACCIÓN: Adaptar prototipo MVP a la estructura del proyecto

**Objetivo de la Tarea:** Refactorizar el prototipo de un solo archivo `docs/development/02_mvp_generated.html` a la estructura de proyecto modular existente, separando el contenido HTML, los estilos CSS y la lógica de JavaScript en sus respectivos archivos.

**Pasos a Seguir:**

1.  **Extraer Contenido HTML:**
    *   Tomar la estructura del `<body>` del archivo `02_mvp_generated.html`.
    *   Limpiar el `src/index.html` actual y reemplazar su contenido con la nueva estructura HTML.
    *   Asegurar que los scripts y hojas de estilo se eliminen del HTML para ser manejados por Vite.

2.  **Extraer y Mover Estilos CSS:**
    *   Copiar las reglas de CSS personalizadas y las variables CSS de la etiqueta `<style>` en `02_mvp_generated.html`.
    *   Pegar estos estilos en `src/styles/input.css`, que es el archivo de estilos principal del proyecto.

3.  **Crear Módulo de API para Gemini:**
    *   Crear un nuevo archivo en `src/api/gemini.js`.
    *   Mover las dos funciones `fetch` que interactúan con la API de Google (`gemini-2.5-flash-preview-05-20` y `imagen-3.0-generate-002`) a este nuevo módulo.
    *   Exportar dos funciones: `generateDetailedPrompt(userQuery)` y `generateImage(prompt)`. Estas funciones encapsularán la lógica de la API.

4.  **Refactorizar Lógica de la Interfaz de Usuario (UI):**
    *   **`src/ui/components.js`**: Mover la lógica para manejar los modales (mostrar/ocultar modal de carga y reproductor de video) y la función para añadir nuevos "clips" a la galería (`addClipToUI`).
    *   **`src/components/SceneCanvas.js`**: Mover toda la lógica relacionada con el canvas HTML5: el dibujado de la cámara y el personaje, las líneas de conexión, las etiquetas y el manejo de eventos de arrastrar y soltar (`drag-and-drop`). Se exportará una función `initializeCanvas`.
    *   **`src/components/PropertiesPanel.js`**: Mover la lógica del panel izquierdo, incluyendo los manejadores de eventos para los `selects` y el botón "Sugerir Prompt Detallado". Esta función importará `generateDetailedPrompt` desde el módulo de API. Se exportará una función `initializePropertiesPanel`.

5.  **Orquestar la Aplicación en `main.js`:**
    *   Modificar `src/main.js` para que actúe como el punto de entrada principal.
    *   Importar e invocar las funciones de inicialización de `SceneCanvas.js`, `PropertiesPanel.js` y `components.js`.
    *   Implementar el manejador de eventos para el botón principal "Generate Video", que llamará a `generateImage` de la API y utilizará las funciones de UI para mostrar el estado y el resultado.

**Archivos Involucrados:**

*   `docs/development/02_mvp_generated.html` (Lectura)
*   `src/index.html` (Modificación)
*   `src/styles/input.css` (Modificación)
*   `src/api/gemini.js` (Creación)
*   `src/main.js` (Modificación)
*   `src/ui/components.js` (Modificación)
*   `src/components/SceneCanvas.js` (Modificación)
*   `src/components/PropertiesPanel.js` (Modificación)

**Razonamiento:**

Este plan descompone la aplicación monolítica del prototipo en módulos cohesivos y reutilizables, alineándose con las mejores prácticas de desarrollo web moderno y la estructura existente del proyecto Vite. La separación de responsabilidades (UI, lógica de estado, llamadas a API) facilitará el mantenimiento, la depuración y la futura expansión de la aplicación.

**Confirmación Requerida:**

Por favor, revisa y aprueba este plan para proceder a la codificación (Fase 2).
