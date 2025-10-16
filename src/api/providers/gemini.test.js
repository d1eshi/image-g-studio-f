import { generateEnhancedPrompt } from './gemini.js';
import assert from 'assert';

async function testGenerateEnhancedPrompt() {
  const idea = 'a cat wearing a hat';
  const style = 'cinematic';
  const model = 'gemini-1.5-flash';

  // This will fail if VITE_GEMINI_API_KEY is not set in the environment
  const result = await generateEnhancedPrompt(idea, style, model);

  console.log('Generated prompt:', result);

  assert.ok(result, 'The generated prompt should not be empty.');
  assert.strictEqual(typeof result, 'string', 'The generated prompt should be a string.');
}

testGenerateEnhancedPrompt().catch(console.error);
