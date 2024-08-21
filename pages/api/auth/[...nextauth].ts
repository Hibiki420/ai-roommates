import NextAuth from 'next-auth';
import EmailProvider from 'next-auth/providers/email';
import { SupabaseAdapter } from '@next-auth/supabase-adapter';

export default NextAuth({
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST as string,
        port: Number(process.env.EMAIL_SERVER_PORT), // 型を明示
        auth: {
          user: process.env.EMAIL_SERVER_USER as string,
          pass: process.env.EMAIL_SERVER_PASSWORD as string,
        },
      },
      from: process.env.EMAIL_FROM as string,
    }),
  ],
  adapter: SupabaseAdapter({
    url: process.env.SUPABASE_URL as string,
    secret: process.env.SUPABASE_SECRET as string,
  }),
  secret: process.env.NEXTAUTH_SECRET as string,
});