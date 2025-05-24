import { mathAgent } from './mathAgent.js';
import { physicsAgent } from './physicsAgent.js';

export async function tutorAgent(input) {
    if (input.includes("integral") || input.includes("solve")) {
        return await mathAgent(input);
    } else if (input.includes("force") || input.includes("gravity")) {
        return await physicsAgent(input);
    } else {
        return "I couldn't determine the subject. Please ask a math or physics question.";
    }
}
