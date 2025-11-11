import { config } from "dotenv";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { PromptTemplate } from "@langchain/core/prompts";

config();

const model = new ChatGoogleGenerativeAI({
  model: "gemini-2.0-flash",
  apiKey: process.env.GEMINI_API_KEY,
});

// Ye ek fill-in-the-blank template hai. Yahan {topic} ek placeholder hai — jisme hum later koi bhi topic daal sakte hain, jaise "space", "AI", "gravity", etc.

// Prompt templates se dynamic prompts create kar sakte hain:

const promptTemplate = PromptTemplate.fromTemplate(`
    explain {topic} in very simple way like ELI5,
    make sure to include the core conepts and avoid unnecessary jargons. make the answer as concise as possible.
    `);

// LangChain mai invoke() ek universal method hai jo kisi bhi model ya chain ko run (execute) karta hai.

// this pattern is also called chain. (aik ka output, dosra ka input hoga. Mtlb promptTemplate ka output model ka input hoga.)

// pipe() ka matlab hai: “PromptTemplate ka output → Model ka input”

const chain = promptTemplate.pipe(model);

// Chain ko run karna (invoke)
chain.invoke({ topic: "space" }).then((response) => {
  console.log(response.content);
});



