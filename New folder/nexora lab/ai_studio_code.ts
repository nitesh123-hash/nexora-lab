import express from "express";
import path from "path";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";

const app = express();
const PORT = 3000;

app.use(express.json());

const NEXORA_SYSTEM_INSTRUCTION = `You are "Nexora Intelligence", the official AI Assistant for Nexora Labs.
Founder & Tech Architect: Nitesh Kumar (Email: niteshkumer376@gmail.com, WhatsApp/Call: +91 9024732763, Instagram: @web_with_nitesh).
Tagline: "Idea to Impact. We Build. You Grow. All-in-One Digital Solutions to Grow Your Business 10X Faster."

Key Capabilities:
- Full-Stack AI Engineer, 3D WebGL (Three.js), React 18, Tailwind, Node.js, Python, Firebase, PostgreSQL.
- 7 Core Services: Website Development, App Development, AI & Voice Agents, Digital Marketing, UI/UX Design, Business Automation, Digital Products Store.
- Digital Products Marketplace: Instant UPI QR Code payments for prompt packs, 3D code kits, Notion OS, and automation workflows.
- "AI Sikh Sakte Ho": Live 1-on-1 mentorship & masterclasses.

Your goal: Provide friendly, highly knowledgeable, polite, and persuasive responses in Hinglish, Hindi, or English based on user preference. Encourage visitors to book a call on WhatsApp (+91 9024732763) or request a quote.`;

app.post("/api/chat", async (req, res) => {
  try {
    const { message, conversationHistory = [] } = req.body;
    if (!message) return res.status(400).json({ error: "Message is required" });

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.json({
        reply: `Namaste! I am Nexora Intelligence. Nitesh Kumar is ready to bring your digital vision to life with AI, 3D Web, and high-impact software. For instant inquiries, reach out directly on WhatsApp at +91 9024732763 or email niteshkumer376@gmail.com.`
      });
    }

    const ai = new GoogleGenAI({ apiKey });
    const formattedContents = [
      ...conversationHistory.map((msg: any) => ({
        role: msg.sender === "user" ? "user" : "model",
        parts: [{ text: msg.text }]
      })),
      { role: "user", parts: [{ text: message }] }
    ];

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: formattedContents,
      config: {
        systemInstruction: NEXORA_SYSTEM_INSTRUCTION,
        temperature: 0.7,
        maxOutputTokens: 600
      }
    });

    res.json({ reply: response.text || "Hello! How can Nexora Labs assist your business today?" });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    res.json({
      reply: "Namaste! I am Nexora Intelligence. Feel free to connect directly with Nitesh Kumar on WhatsApp at +91 9024732763!"
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Nexora Labs running on http://0.0.0.0:${PORT}`);
  });
}

startServer();