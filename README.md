# CRUSTA MIA - Backend Server

Backend server for CRUSTA MIA Telegram WebApp with Telegram Payments integration.

## 🚀 Features

- **Telegram Bot API** integration with Telegraf
- **PayMaster Test** payments processing
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
- `TG_PROVIDER_TOKEN` - PayMaster provider token (1744374395:TEST:337495814f69076f8fcb)
- `PAYMENTS_CURRENCY` - Currency code (RUB)

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
