import { Router } from 'express'

export const router = Router()

// List Categories
router.get('/categories', (request, response) => {
  response.send('ok')
})

// Create Category
router.post('/categories', (request, response) => {
  response.send('ok')
})

// List Products
router.get('/products', (request, response) => {
  response.send('ok')
})

// Create Product
router.post('/products', (request, response) => {
  response.send('ok')
})

// Get Product by CategoryId
router.get('/categories/:categoryId/products', (request, response) => {
  response.send('ok')
})

// List Order
router.get('/orders', (request, response) => {
  response.send('ok')
})

// Create Order
router.post('/orders', (request, response) => {
  response.send('ok')
})

// Change Order Status
router.patch('/orders/:orderId', (request, response) => {
  response.send('ok')
})

// Delete/cancel order
router.delete('/orders/:orderId', (request, response) => {
  response.send('ok')
})
