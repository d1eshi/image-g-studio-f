🎨 Sora Studio — Tailwind Design Guideline (Light Mode)
Mood: Artística, creativa, limpia.

Foco visual: El espacio de trabajo (editor) debe sentirse como un canvas donde se crean ideas, no como un panel de control técnico.

Referencias: Runway ML (light UI), Midjourney web, Notion minimal UI.

1. Paleta de Colores Base
   El color principal es el blanco cálido (#F9F9F9), con contraste suave y uso moderado del azul como color de acción.

:root {
--background: #F9F9F9;
--surface: #FFFFFF;
--border: #E5E5E5;
--text-primary: #1E1E1E;
--text-secondary: #6B6B6B;
--accent: #3B82F6; /_ azul suave _/
--accent-light: #EFF6FF;
--muted: #F2F2F2;
--highlight: #FDFDFD;
}

2. Tipografía
   Fuente: Inter o Satoshi

Pesos (weights) usados: 400 (regular), 500 (medium), 600 (semibold)

Escala Tipográfica
Elemento

Tamaño

Clase Tailwind

h1

1.875rem

text-3xl font-semibold

h2

1.25rem

text-xl font-medium

label

0.875rem

text-sm text-gray-600

body

1rem

text-base text-gray-800

3. Sistema de Layout
   La grilla principal del editor-like se distribuye de la siguiente manera, dando prioridad visual al canvas.

┌───────────────────────────────┐
│ Top Bar │
├─────────────┬─────────────────┤
│ Left Panel │ Canvas/Editor │
│ (props, ...)│ (main content) │
└─────────────┴─────────────────┘

Clases Base (Ejemplo de Estructura)

<div class="min-h-screen bg-background text-text-primary font-inter flex flex-col">
  <header class="border-b border-border bg-surface px-6 py-3 flex items-center justify-between">
    <h1 class="text-xl font-semibold">Sora Studio</h1>
    <button class="px-3 py-1.5 bg-accent text-white rounded-md text-sm">Generate</button>
  </header>
  <div class="flex flex-1">
    <aside class="w-72 border-r border-border bg-surface p-4 overflow-y-auto">
      <!-- Propiedades del personaje, cámara, etc -->
    </aside>
    <main class="flex-1 bg-muted p-6">
      <!-- Canvas / escena -->
    </main>
  </div>
</div>

4. Componentes Reutilizables
Panel Container
<div class="bg-surface border border-border rounded-lg p-4 space-y-2">
  <h2 class="text-sm font-medium text-gray-700 uppercase tracking-wide">Character</h2>
  <!-- Contenido -->
</div>

Input Group

<div class="space-y-1">
  <label class="text-sm text-gray-600">Emotion</label>
  <select class="w-full border border-border rounded-md px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-accent">
    <option>Happy</option>
  </select>
</div>

Button
<button class="px-3 py-1.5 bg-accent text-white rounded-md text-sm hover:bg-blue-600 transition-colors">
Generate prompt
</button>

Section Title

<h2 class="text-sm font-semibold text-gray-700 uppercase tracking-wide border-b border-border pb-1">
  Camera
</h2>

5. Editor Canvas (Visual 2D)
   El canvas debe ser plano y minimalista. El fondo del canvas es bg-[#F3F3F3] con una grilla sutil.

<canvas class="w-full h-full bg-[#F3F3F3] rounded-md border border-border"></canvas>

Indicadores Visuales
Personaje: Círculo sólido (fill: #3B82F6) con su nombre debajo.

Cámara: Triángulo o icono minimalista (stroke: #1E1E1E).

Línea de conexión: Línea gris (stroke: #C4C4C4).

6. Cards de Videos Generados
<div class="grid grid-cols-2 gap-4 mt-4">
  <div class="bg-surface border border-border rounded-lg overflow-hidden">
    <div class="aspect-video bg-gray-200"></div>
    <div class="p-2">
      <p class="text-sm font-medium text-gray-800">Sunset Meditation</p>
      <p class="text-xs text-gray-500">10s - Cinematic</p>
    </div>
  </div>
</div>

7. Espaciado y Ritmo
   Padding interno de secciones: p-4

Margen entre secciones: mb-6

Espacio entre inputs: space-y-3

Border radius general: rounded-md

Líneas divisorias: border-border

8. Sin Animaciones, Solo Feedback Visual
   Usar únicamente:

transition-colors duration-150 ease-in-out

focus:ring-1 focus:ring-accent

Se debe evitar cualquier tipo de motion, movimiento al pasar el cursor o blur dinámico.

9. Tonalidad General
   Debe sentirse como un espacio para crear, no para configurar. Los paneles deben ser claros, aireados, sin recargar con bordes ni sombras. Usa el color solo para las acciones principales y los elementos activos (botones, selección de cámara, personaje activo). El canvas siempre debe dominar visualmente.

10. Evolución (Futuro Editor Real)
    Este layout permite luego agregar:

Tabs superiores (Scene / Prompt / Output)

Panel flotante para la cámara (tipo inspector)

Editor 3D con three.js manteniendo la misma estructura visual.
