Sora Studio — Artifact

1. Pitch corto

Sora Studio: Una web simple que convierte una idea en texto a un prompt optimizado para Sora 2 y genera el video automáticamente (mock o real). One-feature product: no necesitas saber prompt engineering.

2. Público objetivo

Creadores de contenido (YouTubers, Tiktokers, marketers).

Agencias pequeñas que quieren prototipar spots.

Early adopters de AI video (creadores experimentales).

3. Core feature

Input natural → Prompt optimizado → (Sora API) → Video
El usuario escribe “Un comercial de 10s para una app de meditación, atardecer, música suave”, la app genera un prompt, lo muestra editable, y lanza la generación.

4. Tech stack (mínimo viable)

Frontend: HTML + CSS + Vanilla JS (single file / static).

Storage: Supabase (optional) o localStorage para inicio.

Automation: n8n (orquestador low-code para conectar GPT → Sora → storage).

Backend ligero (opcional): Python FastAPI serverless para proxys / webhooks (si hay keys secretas).

Hosting: Vercel / Netlify / GitHub Pages (frontend); n8n en Railway/Render or n8n cloud.

Auth (opcional early): Magic.link o Netlify Identity.

7. n8n flow outline (export)

Trigger: HTTP Webhook /generate

Node A: Call GPT (generate refined prompt + shot breakdown)

Node B: (If Sora API available) Call Sora → receive video URL

Node C: Save metadata to Supabase / bucket

Node D: Reply webhook with video URL

8. To-do (MVP) — checklist mínimo

Crear repo + index.html con layout simple (input, botones, preview, gallery).

Implementar buildPrompt() con 6–8 templates y reglas (aspect, duration, shots, audio).

Preview editable del prompt.

Mock video generator: carpeta assets/demo_videos/ y lógica para "simular" generación.

n8n: crear flow con webhook + GPT node (puede estar en modo mock si GPT/Sora keys no disponibles).

Integración storage: guardar resultados (localStorage o Supabase).

Landing básica + CTA (Join waitlist).

Página “How it works” con 3 screenshots + example videos.

Script para exportar flow n8n (n8n/flow.json) y README con instrucciones de deploy.

Documentar proceso de build y posts para redes (3 tweets + 1 demo video).

9. Criterios de aceptación — ¿Cuándo consideramos el MVP completo?

Marca el MVP como complete cuando TODAS estas condiciones se cumplan:

Core UX funciona end-to-end (mock or real):

Usuario ingresa idea → obtiene prompt optimizado editable.

Usuario puede iniciar "Generate video" y recibe un video (real o mock).

Persistencia mínima:

Los resultados se guardan y se ven en la galería (localStorage o Supabase).

Automatización conectable:

n8n webhook + flow exportado y documentado (aunque Sora no esté público, el flow debe estar probado con mock).

Landing + CTA en producción:

Página pública con value prop y formulario (waitlist).

Feedback loop habilitado:

Métricas mínimas recogidas: número de prompts generados, número de signups, clicks “generate”.

Documentación breve para early users:

README con cómo usar, cómo desplegar n8n, cómo conectar keys.

Pack de contenido listo para lanzamiento:

1 demo video, 3-5 screenshots, hilo de Twitter preparado.

Si cualquier punto falla, no consideres el MVP completo.

10. Métricas a seguir desde día 0

Nº de prompts generados (tracción).

Nº de emails en waitlist / suscripciones.

CTR de landing → generate.

Conversión: visitantes → signups.

Feedback cualitativo (comentarios de 10 early users).

11. Ideas rápidas de monetización inicial

Waitlist early access pago (USD $5 early access).

Créditos por generación (cuando Sora tenga costo real).

Plantillas premium (packs: ads, cinematic, product demos).
