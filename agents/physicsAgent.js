import { callGemini } from '../utils/gemini.js';

export async function physicsAgent(input) {
    return await callGemini(`You are a physics tutor. Answer: ${input}`);
}
