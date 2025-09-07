# 🚀 Развертывание CRUSTA MIA Backend на Vercel

## ✅ Готово к развертыванию!

Репозиторий `https://github.com/preff23/pizzaback.git` готов для развертывания на Vercel.

## 📋 Пошаговая инструкция:

### 1. Перейти на Vercel Dashboard
- Откройте [vercel.com](https://vercel.com)
- Войдите в аккаунт

### 2. Создать новый проект
- Нажмите **"New Project"**
- Выберите **"Import Git Repository"**
- Найдите репозиторий `preff23/pizzaback`
- Нажмите **"Import"**

### 3. Настроить проект
- **Project Name**: `crusta-mia-server` (или любое другое имя)
- **Framework Preset**: `Other` (или `Node.js`)
- **Root Directory**: `./` (оставить по умолчанию)
- **Build Command**: `npm run vercel-build` (уже настроено)
- **Output Directory**: `dist` (уже настроено)

### 4. Добавить переменные окружения
В разделе **"Environment Variables"** добавьте:

```
TELEGRAM_BOT_TOKEN = 7987254482:AAGlsDPVkKCzvqFRoJMfgNk37Dpt4qbLGfM
TG_PROVIDER_TOKEN = <ЮKassa Test provider_token из BotFather>
PAYMENTS_CURRENCY = RUB
```

**Получение ЮKassa Test токена:**
1. Откройте [@BotFather](https://t.me/BotFather)
2. `/mybots` → выберите бота → **Bot Settings** → **Payments**
3. **Connect Provider** → **ЮKassa**
4. Введите:
   - **Shop ID**: `1160131`
   - **API Key**: `test_UVAGYl4S0bRIjQBiIAZx-S1YMcLTjy49zpAtcj4_CeU`
5. Скопируйте полученный `provider_token`

### 5. Развернуть
- Нажмите **"Deploy"**
- Дождитесь завершения сборки (2-3 минуты)

### 6. Получить URL сервера
После развертывания вы получите URL вида:
```
https://crusta-mia-server-xxx.vercel.app
```

## 🔗 Обновить фронтенд

После получения URL сервера, обновите фронтенд:

1. Перейдите в репозиторий `crusta-mia-telegram-webapp`
2. Откройте файл `src/pages/CartPage.tsx`
3. Найдите строку:
```typescript
: 'https://crusta-mia-server.vercel.app');  // Заменить на реальный URL
```
4. Замените на реальный URL вашего сервера:
```typescript
: 'https://crusta-mia-server-xxx.vercel.app');  // Реальный URL
```
5. Загрузите изменения в GitHub

## 🧪 Тестирование

После развертывания протестируйте API:

```bash
curl -X POST https://your-server-url.vercel.app/api/pay \
  -H "Content-Type: application/json" \
  -d '{"userId":123,"cart":{"id":12345,"items":[{"id":"1","name":"Пицца Маргарита","price":830,"qty":1}],"total":830}}'
```

## 📱 Telegram Bot

Убедитесь, что бот настроен:
- **Username**: `@crusta_mia_bot`
- **Webhook URL**: Не нужен (используется polling)
- **Payments**: Настроены через PayMaster Test

## 🎯 Результат

После выполнения всех шагов:
- ✅ Фронтенд: `https://pizzatest-orcin.vercel.app`
- ✅ Бэкенд: `https://your-server-url.vercel.app`
- ✅ Платежи работают через Telegram
- ✅ Ошибка "Попробуйте еще раз" исчезнет

## 🔧 Troubleshooting

### Ошибка сборки
- Проверьте переменные окружения
- Убедитесь, что все токены корректны

### Ошибка подключения
- Проверьте URL сервера в фронтенде
- Убедитесь, что CORS настроен правильно

### Платежи не работают
- Проверьте токены бота и провайдера
- Убедитесь, что бот запущен и получает обновления
