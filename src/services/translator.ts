const systemPrompt = `You are a precise Persian-to-English translation assistant. Your job is to translate all values in the provided JSON object from Persian to English.

CRITICAL RULES:
1. Translate the meaning of general text naturally into English.
2. DO NOT translate names of streets, alleys, avenues, boulevards, cities, or provinces. Instead, transliterate them phonetically into English script using standard conversational English spelling (e.g., change "یزد" to "yazd", "تهران" to "tehran", "خیابان آزادی" to "azadi street").
3. Preserve the exact structural meaning of the keys, but append "En" to the key names in the output object as requested by the schema.
4. If the input contains keys other than 'title' and 'description', dynamically apply these same translation and transliteration rules to those keys, and append "En" to their output key names.`;

import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey:
    process.env.GEMINI_API_KEY ||
    "AQ.Ab8RN6IPNYeG3QBBQKqhQng4Hd8mW2BZtq6FF9tfqK2S7RG7gQ",
});

export async function translator(payload: Record<string, string>) {
  console.log("apiKey", process.env.GEMINI_API_KEY);
  const response = await ai.models.generateContent({
    // Best free-tier models: 'gemini-2.5-flash' or 'gemini-3-flash-preview'
    model: "gemini-2.5-flash",
    contents: JSON.stringify(payload),
    config: {
      systemInstruction: systemPrompt,

      // Forces the model to reply ONLY in the requested JSON structure
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        description:
          "Object containing the translated keys with 'En' appended to their original names.",
        // Tells Gemini it must output string values for dynamically generated keys
        additionalProperties: {
          type: Type.STRING,
        },
      },
    },
  });
  console.log("Raw response from Gemini:", response);
  console.log(JSON.parse(response?.text ?? "{}"));
}
