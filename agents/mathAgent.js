import { callGemini } from '../utils/gemini.js';
import { calculate } from '../tools/calculator.js';

export async function mathAgent(input) {
    if (input.includes("add") || input.includes("multiply")) {
        return "Calculated: " + calculate(input);  // Tool used
    }
    return await callGemini(`You are a math tutor. Solve: ${input}`);
}
