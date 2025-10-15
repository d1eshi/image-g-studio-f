# PLAN DE ACCIÓN: Implementar nueva UI para el MVP

**Objetivo de la Tarea:** Actualizar la interfaz de usuario de la aplicación para que coincida con las nuevas directrices de diseño, mejorando la estética y la experiencia del usuario.

**TODO List:**

*   [ ] Crear nueva rama `03_new_ui_mpv`.
*   [ ] Actualizar `tailwind.config.js` con la nueva paleta de colores y tipografía.
*   [ ] Modificar `src/index.html` para reflejar la nueva estructura y clases de Tailwind.
*   [ ] Actualizar `src/styles/input.css` con los estilos de los nuevos componentes.
*   [ ] Verificar que la aplicación siga siendo funcional después de los cambios.

**Pasos a Seguir:**

1.  **Crear nueva rama:** Ejecutar `git checkout -b 03_new_ui_mpv` (Ya completado).
2.  **Actualizar `tailwind.config.js`:**
    *   Reemplazar los colores en `theme.extend.colors` con la nueva paleta.
    *   Añadir la fuente `Inter` a la configuración de `fontFamily`.
3.  **Actualizar `src/index.html`:**
    *   Revisar y aplicar las clases de Tailwind CSS según la nueva guía de diseño para el layout principal, paneles, inputs y botones.
    *   Asegurar que la estructura HTML siga siendo semántica y accesible.
4.  **Actualizar `src/styles/input.css`:**
    *   Ajustar los estilos personalizados (como el canvas grid) para que coincidan con la nueva paleta de colores.
    *   Asegurar que los estilos no entren en conflicto con las clases de Tailwind.

**Archivos Involucrados:**

*   `tailwind.config.js` (Modificación)
*   `src/index.html` (Modificación)
*   `src/styles/input.css` (Modificación)

**Sugerencias:**

*   **Componentes de Svelte/React:** Para una mejor manenibilidad, se podría considerar migrar los componentes de UI a un framework como Svelte o React. Esto permitiría encapsular la lógica y el marcado de cada componente en archivos separados.
*   **Iconos SVG:** Para los indicadores de la cámara y otros elementos, se podrían usar iconos SVG en lugar de dibujarlos con el canvas, para una mayor calidad visual y facilidad de mantenimiento.
*   **Modo Oscuro:** Se podría añadir un modo oscuro a la aplicación, lo que es común en herramientas creativas.

**Confirmación Requerida:**

Por favor, revisa y aprueba este plan para proceder a la codificación (Fase 2).
