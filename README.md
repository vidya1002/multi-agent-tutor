
```markdown
# 🧠 Multi-Agent Tutor

A Node.js-based backend system that uses specialized agents (Math, Physics, etc.) to answer educational queries. This is a modular, scalable architecture designed to serve as the backend for an intelligent tutoring system.

---

## 📁 Project Structure

```

multi-agent-tutor/
├── agents/
│   ├── mathAgent.js
│   ├── physicsAgent.js
│   ├── tutorAgent.js
│   └── server.js         # Main server file (can be moved to root)
├── frontend/             # (Optional: React/HTML frontend if implemented)
├── node\_modules/
├── tools/
│   ├── calculator.js
│   ├── periodicTable.js
│   └── unitConvertor.js
├── utils/
│   └── gemini.js         # Integration with Gemini or other AI
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── README.md

````

---

## 🚀 Features

- Modular agent architecture (Math, Physics, etc.)
- Central `tutorAgent.js` to handle intelligent routing
- Support for AI models (e.g., Gemini via `gemini.js`)
- REST API endpoint to handle questions
- Extensible structure for new domains or tools

---

## 🧪 Example API

### POST `/ask`

**Request Body:**
```json
{
  "question": "What is the derivative of x^2?"
}
````

**Response:**

```json
{
  "response": "The derivative of x^2 is 2x."
}
```

---

## ⚙️ Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/multi-agent-tutor.git
   cd multi-agent-tutor
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment**
   Create a `.env` file:

   ```env
   API_KEY=your_key_here
   PORT=3000
   ```

4. **Run the server**

   ```bash
   node agents/server.js
   ```

5. **Test the API**
   Use tools like Postman or CURL to test the `/ask` endpoint.

---

## 🌐 Deployment

To deploy on platforms like **Render**:

* Ensure the `server.js` file is in the root directory **OR**
* Set the Render start command to:

  ```
  node agents/server.js
  ```

---

## 📦 Dependencies

* [Express](https://www.npmjs.com/package/express)
* [Dotenv](https://www.npmjs.com/package/dotenv)

Install them via:

```bash
npm install express dotenv
```

---

## ✍️ Authors

* [Vidyashree K J](https://github.com/vidya1002) — Developer & Maintainer

---
```
