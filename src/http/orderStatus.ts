import type { Request, Response } from 'express';
import { getOrderStatus, getUserOrders } from '../payments';

export async function orderStatusHandler(req: Request, res: Response) {
  try {
    const { orderId, userId } = req.query;

    if (orderId) {
      // Получить статус конкретного заказа
      const order = getOrderStatus(Number(orderId));
      if (!order) {
        return res.status(404).json({ ok: false, error: 'Order not found' });
      }
      return res.json({ ok: true, order });
    }

    if (userId) {
      // Получить все заказы пользователя
      const orders = getUserOrders(Number(userId));
      return res.json({ ok: true, orders });
    }

    return res.status(400).json({ ok: false, error: 'orderId or userId required' });
  } catch (e: any) {
    console.error('Error in orderStatusHandler:', e);
    res.status(500).json({ ok: false, error: e.message });
  }
}
