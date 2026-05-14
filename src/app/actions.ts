"use server"

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export const getGeminiModel = (modelName = "gemini-1.5-flash-latest") => {
  return genAI.getGenerativeModel({ model: modelName });
};

export async function generateInsight(context: string) {
  try {
    const model = getGeminiModel("gemini-1.5-flash-latest");
    const prompt = `You are the FanOS AI, a futuristic sports analyst. 
    Context: ${context}
    Generate a short, cinematic, 1-2 sentence tactical insight for a sports fan. 
    Use a mix of technical jargon and hype. 
    Example: "Neural patterns detected: The defense is pivoting to a high-low lock. Prepare for a kinetic overflow in the paint."`;
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini Error:", error);
    return "AI Uplink interrupted. Tactical telemetry recalibrating...";
  }
}

export async function evolveIdentity(currentRank: string) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });
    const prompt = `Current Fan Rank: ${currentRank}. 
    Generate a new, cooler sounding futuristic rank name and a 1-sentence evolution message.
    Return as JSON: { "rank": "...", "message": "..." }`;
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return JSON.parse(response.text().replace(/```json|```/g, "").trim());
  } catch (error) {
    return { rank: currentRank, message: "Aura stabilization failed. Maintain current frequency." };
  }
}
