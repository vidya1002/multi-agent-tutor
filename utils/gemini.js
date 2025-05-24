import axios from 'axios';

export async function callGemini(prompt) {
    try {
        const response = await axios.post(
            'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=' + process.env.GEMINI_API_KEY,
            {
                contents: [{ parts: [{ text: prompt }] }]
            }
        );

        // Return the text response from Gemini
        return response.data.candidates[0]?.content.parts[0]?.text || "No response.";

    } catch (error) {
        console.error("Gemini API call failed:", error.message);
        return "Error: Unable to get response from Gemini API.";
    }
}
