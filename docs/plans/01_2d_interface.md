**PLAN DE ACCIÓN: Implementar Interfaz 2D para Compositor de Escenas**

**Objetivo de la Tarea:**
Desarrollar una interfaz 2D que permita a los usuarios componer una escena visualmente arrastrando un personaje y una cámara, ajustar sus propiedades y generar automáticamente un prompt de texto y un objeto JSON que describan la composición para la API de Sora.

**Pasos a Seguir:**
1.  **Modificar `index.html`:**
    *   Añadir un elemento `<canvas>` para la interfaz 2D.
    *   Crear la estructura del panel de propiedades para el personaje y la cámara.
    *   Añadir áreas para mostrar el "Prompt Preview" en texto y en formato JSON.

2.  **Modificar `style.css`:**
    *   Añadir estilos para el layout general, el canvas, y los paneles de propiedades y previsualización, siguiendo un diseño limpio y minimalista.

3.  **Modificar `script.js`:**
    *   Implementar la lógica para dibujar el personaje y la cámara en el canvas.
    *   Añadir la funcionalidad de arrastrar y soltar para el personaje y la cámara.
    *   Implementar la lógica para actualizar las propiedades de la escena (distancia, ángulo) basadas en la posición de los elementos en el canvas.
    *   Conectar los inputs del panel de propiedades al estado de la aplicación.
    *   Implementar la función que genera el prompt en texto y el objeto JSON a partir del estado de la aplicación.
    *   Asegurar que el prompt y el JSON se actualicen automáticamente con cada cambio.

4.  **Modificar `state.js`:**
    *   Definir y gestionar el estado de la aplicación, incluyendo la posición del personaje y la cámara, y todas las propiedades editables.

**Archivos Involucrados:**
*   `src/index.html`
*   `src/style.css`
*   `src/script.js`
*   `src/state.js`

**Razonamiento:**
Este enfoque divide la implementación en las capas clásicas de una aplicación web (HTML para estructura, CSS para estilo, y JavaScript para lógica y estado), lo que facilita un desarrollo modular y ordenado. Empezar por la estructura HTML, luego el estilo y finalmente la lógica de la aplicación es un flujo de trabajo estándar y eficiente. Separar el estado en `state.js` es crucial para mantener el código limpio y escalable, como se pide en la descripción del desarrollo.

**Confirmación Requerida:**
Por favor, revisa y aprueba este plan para proceder a la codificación (Fase 2).