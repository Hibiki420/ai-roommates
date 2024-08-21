import { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';

// analysis.ts
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string; // 環境変数名を修正
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY as string; // 環境変数名を修正
const supabase = createClient(supabaseUrl, supabaseKey); // supabaseクライアントを作成
// ... 既存のコード ...

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { userId }: { userId: string } = req.body; // userIdの型を指定

  const { data, error } = await supabase
    .from('chat_messages')
    .select('*')
    .eq('user_id', userId);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  // 分析ロジックの実装
  const analysis = analyzeChatData(data);

  res.status(200).json({ analysis });
};

const analyzeChatData = (data: any) => { // 型を指定
    // 分析ロジックをここに実装
    return {};
  };