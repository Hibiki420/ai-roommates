// pages/api/chat.ts
import { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai'; // 修正
// Configurationはデフォルトエクスポートとしてインポート
const configuration = new OpenAI.Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAI(configuration);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { message, agentId } = req.body;

  const agentSettings: { [key: string]: string } = {
    friendly: 'You are a friendly AI.',
    serious: 'You are a serious AI.',
    humorous: 'You are a humorous AI.',
  };

  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `${agentSettings[agentId]} ${message}`,
    max_tokens: 150,
  });

  res.status(200).json({ response: response.data.choices[0].text });
};