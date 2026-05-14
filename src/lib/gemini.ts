import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export const getGeminiModel = (modelName = "gemini-1.5-flash") => {
  return genAI.getGenerativeModel({ model: modelName });
};

export async function generateFanPersona(traits: string[]) {
  const model = getGeminiModel();
  const prompt = `Generate a futuristic sports fan archetype based on these traits: ${traits.join(", ")}. 
  Return a JSON object with: name, description, auraColor (hex), and a catchphrase.`;
  
  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
}
