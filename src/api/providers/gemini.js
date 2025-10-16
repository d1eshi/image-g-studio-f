import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

/**
 * Generates content using a specified Gemini model.
 * @param {string} modelName - The name of the model to use (e.g., "gemini-1.5-flash").
 * @param {string} prompt - The prompt to send to the model.
 * @returns {Promise<string>} The generated text.
 */
async function generateContent(modelName, prompt) {
  try {
    const model = genAI.getGenerativeModel({ model: modelName });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text;
  } catch (error) {
    console.error(`Error generating content with ${modelName}:`, error);
    return `Error generating content. Please check the console for details.`;
  }
}

/**
 * Enhances the user's prompt using a Gemini model.
 * @param {string} idea The user's initial idea.
 * @param {string} style The selected video style.
 * @param {string} model The selected AI model.
 * @returns {Promise<string>} A promise that resolves to the enhanced prompt.
 */
export async function generateEnhancedPrompt(idea, style, model) {
  console.log(
    `Generating with: Idea='${idea}', Style='${style}', Model='${model}'`,
  );

  const metaPrompt = `
          You are an expert prompt engineer for a text-to-video AI model like Sora.
          Your task is to take a user's simple idea and a desired style and expand it into a detailed, cinematic prompt.
          The prompt should be a single paragraph describing the scene, camera work, lighting, and mood.

          User Idea: "${idea}"
          Video Style: "${style}"

          Generate the detailed prompt now.
      `;

  return await generateContent(model, metaPrompt);
}