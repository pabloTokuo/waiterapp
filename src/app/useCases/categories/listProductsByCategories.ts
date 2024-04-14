import { type Request, type Response } from 'express'

import { Product } from '../../models/Product'

export async function listProductsByCategories (request: Request, response: Response) {
  try {
    const { categoryId } = request.params

    const products = await Product.find().where('category').equals(categoryId)

    response.json(products)
  } catch (error) {
    console.log(error)
    response.sendStatus(500)
  }
}
