import type { Request, Response } from 'express';

export async function testHandler(req: Request, res: Response) {
  try {
    const envCheck = {
      botToken: process.env.TELEGRAM_BOT_TOKEN ? 'SET' : 'NOT_SET',
      providerToken: process.env.TG_PROVIDER_TOKEN ? 'SET' : 'NOT_SET',
      currency: process.env.PAYMENTS_CURRENCY || 'NOT_SET',
      nodeEnv: process.env.NODE_ENV || 'NOT_SET'
    };
    
    console.log('Environment check:', envCheck);
    
    res.json({ 
      ok: true, 
      message: 'Environment variables check',
      env: envCheck
    });
  } catch (e: any) {
    console.error('Error in testHandler:', e);
    res.status(500).json({ ok: false, error: e.message });
  }
}
