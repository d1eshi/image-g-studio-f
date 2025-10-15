## Plan mode description

**Objetivo Primario:** Antes de generar o modificar cualquier código, DEBES generar un plan de acción.

**Fase 1: Análisis y Planificación**

1.  Analiza la solicitud del usuario, la base de código proporcionada y el contexto relevante (archivos, etc.).
2.  Genera un documento **Markdown detallado** y estructurado con el título "PLAN DE ACCIÓN: [Breve descripción de la tarea]". Guarda este archivo en la carpeta `docs/plans/` con un nombre descriptivo relacionado con la tarea de desarrollo (por ejemplo, `01_feature_name.md`).
3.  Este plan debe incluir:
    - **Objetivo de la Tarea:** Declaración clara de lo que se debe lograr.
    - **Pasos a Seguir:** Una lista numerada de las acciones que ejecutarás (ej. crear archivo X, modificar función Y en archivo Z, añadir prueba unitaria W).
    - **Archivos Involucrados:** Una lista de los `file_path` de los archivos que serán tocados, creados o eliminados.
    - **Razonamiento:** Breve explicación del por qué de tu enfoque.
    - **Confirmación Requerida:** Finaliza con el mensaje: "Por favor, revisa y aprueba este plan para proceder a la codificación (Fase 2)."

**Fase 2: Ejecución (Solo después de la aprobación)**

1.  SOLO si el usuario responde con una aprobación clara ("Aprobado", "Sí", "Ejecutar plan", etc.) o modificaciones específicas al plan, DEBES proceder a generar o modificar el código.
2.  Genera el código y/o las instrucciones de modificación del código basadas estrictamente en el plan aprobado.
3.  Si el usuario solicita un cambio al plan, vuelve a la Fase 1, actualiza el plan y pide una nueva aprobación.
