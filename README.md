# CRUSTA MIA - Backend Server

Backend server for CRUSTA MIA Telegram WebApp with Telegram Payments integration using ЮKassa Test.

## 🚀 Features

- **Telegram Bot API** integration with Telegraf
- **ЮKassa Test** payments processing
- **Express.js** server with CORS support
- **TypeScript** for type safety
- **Vercel** deployment ready

## 📋 API Endpoints

### POST /api/pay
Creates and sends invoice to user via Telegram bot.

**Request:**
```json
{
  "userId": 123456789,
  "cart": {
    "id": 12345,
    "items": [
      {
        "id": "1",
        "name": "Пицца Маргарита",
        "price": 830,
        "qty": 1
      }
    ],
    "total": 830
  }
}
```

**Response:**
```json
{
  "ok": true
}
```

## 🔧 Environment Variables

Set these in Vercel dashboard:

- `TELEGRAM_BOT_TOKEN` - Your Telegram bot token
- `TG_PROVIDER_TOKEN` - ЮKassa Test provider token (from BotFather)
- `PAYMENTS_CURRENCY` - Currency code (RUB)

### Получение ЮKassa Test токена:

1. Откройте [@BotFather](https://t.me/BotFather) в Telegram
2. Выберите вашего бота: `/mybots` → выберите бота
3. Нажмите **Bot Settings** → **Payments**
4. Нажмите **Connect Provider** → **ЮKassa**
5. Введите данные ЮKassa Test:
   - **Shop ID**: `1160131`
   - **API Key**: `test_UVAGYl4S0bRIjQBiIAZx-S1YMcLTjy49zpAtcj4_CeU`
6. Скопируйте полученный `provider_token` в переменную `TG_PROVIDER_TOKEN`

## 🛠 Development

```bash
npm install
npm run dev
```

## 📦 Deployment

This server is configured for Vercel deployment with:
- `vercel.json` configuration
- TypeScript compilation
- Serverless functions support

## 🔗 Frontend Integration

The frontend at `https://pizzatest-orcin.vercel.app` will connect to this server for payment processing.

## 📱 Telegram Bot Features

- **Pre-checkout validation** - Validates payment requests
- **Successful payment handling** - Processes completed payments
- **Invoice generation** - Creates payment invoices
- **Order management** - Tracks order status

## 🧪 Testing

Test the API endpoint:
```bash
curl -X POST https://your-server.vercel.app/api/pay \
  -H "Content-Type: application/json" \
  -d '{"userId":123,"cart":{"id":12345,"items":[{"id":"1","name":"Пицца Маргарита","price":830,"qty":1}],"total":830}}'
```
