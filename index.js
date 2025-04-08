import 'dotenv/config'; 
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function run() {
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: "Você é um assistente útil.",
      },
      {
        role: "user",
        content: "Qual a capital da França?",
      }
    ]
  });

  console.log(completion.choices[0].message.content);
}

run();
