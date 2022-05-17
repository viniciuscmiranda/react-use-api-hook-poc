import {request} from './index'

export function getProducts(){
  return request({
    label: 'get products',
    response: [
      {
        id: 1,
        name: 'Product I',
        price: 2.99
      },
       {
        id: 2,
        name: 'Product II',
        price: 5.99
      }
    ]
  })
}

export function getProductById(productId, offset, limit){
  return request({
    label: 'get product by id',
    payload: {productId, offset, limit},
    response: {
      id: 1,
      name: 'Product I',
      price: 2.99
    }
  })
}

export function createProduct(data){
  return request({
    label: 'create product',
    payload: data,
    response: {
      id: 1,
      ...data
    }
  })
}
