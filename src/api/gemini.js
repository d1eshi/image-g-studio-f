const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

/**
 * Generates a detailed prompt using the Gemini API.
 * @param {string} userQuery - The user's query to generate the prompt from.
 * @returns {Promise<string>} The generated prompt text.
 */
export async function generateDetailedPrompt(userQuery) {
  const systemPrompt =
    "You are an expert creative director and scriptwriter. Your task is to take a set of simple scene elements and expand them into a rich, detailed, and evocative prompt suitable for an AI video generation model. The prompt should describe the visuals, atmosphere, lighting, and character actions in a cinematic style. Be creative and descriptive.";

  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${API_KEY}`;
  const payload = {
    contents: [{ parts: [{ text: userQuery }] }],
    systemInstruction: { parts: [{ text: systemPrompt }] },
  };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`);
    }

    const result = await response.json();
    const text = result.candidates?.[0]?.content?.parts?.[0]?.text;
    return text || "No se pudo generar un prompt. La respuesta de la IA estaba vacía.";
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "Error al generar el prompt. Por favor, revisa la consola para más detalles.";
  }
}

/**
 * Generates an image using the Imagen API.
 * @param {string} prompt - The prompt to generate the image from.
 * @returns {Promise<string>} The base64 encoded image data.
 */
export async function generateImage(prompt) {
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/imagen-3.0-generate-002:predict?key=${API_KEY}`;
  const payload = {
    instances: [{ prompt: prompt }],
    parameters: { sampleCount: 1 },
  };

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`API error: ${response.statusText}. Body: ${errorBody}`);
  }

  const result = await response.json();
  if (
    result.predictions &&
    result.predictions.length > 0 &&
    result.predictions[0].bytesBase64Encoded
  ) {
    return `data:image/png;base64,${result.predictions[0].bytesBase64Encoded}`;
  } else {
    throw new Error("La respuesta de la API no contenía una imagen válida.");
  }
}
