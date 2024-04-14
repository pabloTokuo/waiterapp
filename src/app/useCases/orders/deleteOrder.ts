import { type Request, type Response } from 'express'

import { Order } from '../../models/Order'

export async function deleteOrder (request: Request, response: Response) {
  try {
    const { orderId } = request.params

    await Order.findByIdAndDelete(orderId)
    response.status(204)
  } catch (error) {
    console.log(error)
    response.sendStatus(500)
  }
}
