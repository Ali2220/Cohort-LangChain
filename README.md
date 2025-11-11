# Topics Covered

## 1. LangChain + Gemini Integration
- Used the `ChatGoogleGenerativeAI` class to connect and interact with Gemini.

## 2. Prompt Engineering (via PromptTemplate)
- `PromptTemplate` is a **dynamic prompt generator**.
- `{topic}` acts as a **placeholder variable** that gets replaced at runtime.

## 3. Chains (Piping / Composition)
- `pipe()` is used to connect components — making the **prompt’s output** automatically become the **model’s input**.
- This forms a **LangChain chain**.

## 4. invoke() Method (Execution Layer)
- `invoke()` runs (executes) the chain or model.
- It’s a **universal runner function** that works with any model, chain, or pipeline in LangChain.
