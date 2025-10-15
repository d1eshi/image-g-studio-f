# Prompt — Sora Studio 2D Scene Composer

El objetivo es desarrollar una interfaz 2D simple que permita al usuario posicionar visualmente un personaje y una cámara dentro de una escena, para luego generar un prompt estructurado en texto que describa esa composición. El sistema no necesita renderizar gráficos avanzados ni animaciones, solo representar relaciones espaciales básicas (distancia, ángulo y plano visual) y convertirlas en lenguaje descriptivo para el generador de video (Sora).

La aplicación debe contener un canvas central en el que el usuario pueda arrastrar dos elementos: el personaje y la cámara. El personaje se representa con un ícono o figura simple (por ejemplo, un círculo con un nombre debajo). La cámara se representa con un triángulo o icono de cámara que apunta hacia el personaje. La línea entre ambos elementos define la dirección y el tipo de plano. La distancia entre ellos determina el tipo de encuadre (close-up, medium shot, wide shot). El ángulo relativo define la altura del plano (low angle, high angle, eye-level).

A la derecha del canvas debe haber un panel de propiedades. Cuando el usuario selecciona el personaje, puede editar nombre o tipo (human, robot, animal), acción (running, talking, sitting), emoción (happy, sad, neutral), y entorno (beach, city, forest, interior). Cuando selecciona la cámara, puede ajustar lente (24mm, 35mm, 85mm), movimiento (static, pan, dolly), y duración del plano (5s, 10s, 20s). Todas las propiedades se almacenan en un objeto JSON.

Cada vez que el usuario cambia una propiedad o mueve un elemento en el canvas, se actualiza automáticamente una vista de “Prompt Preview” en texto y una versión estructurada en JSON. El texto describe la escena en lenguaje cinematográfico. Ejemplo: “A cinematic video of a woman sitting on a chair in a cozy room. The camera is positioned at eye level, using a 35mm lens, with a static shot lasting 10 seconds.” El JSON resultante sigue esta estructura:

```json
{
  "scene": "cozy room",
  "character": {
    "type": "female",
    "action": "sitting",
    "emotion": "relaxed"
  },
  "camera": {
    "angle": "eye-level",
    "lens": "35mm",
    "movement": "static",
    "distance": "medium shot"
  },
  "timing": {
    "duration": "10s"
  }
}

El flujo principal es: el usuario ingresa → crea una escena arrastrando cámara y personaje → ajusta propiedades → genera automáticamente el prompt y lo copia al clipboard o lo envía al backend (n8n o FastAPI). No se necesita autenticación ni persistencia inicial. El objetivo es validar la usabilidad de la composición visual y la generación coherente de prompts a partir de posiciones 2D.

El diseño debe ser limpio, minimalista y funcional. Colores neutros, tipografía sans-serif, sin distracciones. El canvas ocupa el centro de la pantalla, los paneles laterales son compactos. Debe poder implementarse con HTML, CSS y JavaScript puro, usando <canvas> para la parte visual y objetos JS para el estado. Se prioriza claridad de código y estructura modular para evolucionar fácilmente a una versión 3D posterior.
```
