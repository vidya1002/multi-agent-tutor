import express from 'express';
import dotenv from 'dotenv';
import { tutorAgent } from './agents/tutorAgent.js';

dotenv.config();

const app = express();
app.use(express.json());

app.post('/ask', async (req, res) => {
    const question = req.body.question;
    const response = await tutorAgent(question);
    res.json({ response });
});

app.listen(3000, () => console.log('Server running on port 3000'));
