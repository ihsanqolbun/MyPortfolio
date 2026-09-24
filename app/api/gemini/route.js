import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(request) {
    console.log("KEY LOADED:", process.env.GEMINI_API_KEY ? "YES" : "NO");
  const { prompt } = await request.json();
  const model = genAI.getGenerativeModel({ model: "gemini-3.6-flash" });
  const result = await model.generateContent(prompt);
  return Response.json({ text: result.response.text() });
}