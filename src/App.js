/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'

import { useRequest } from './hooks'
import { getProducts } from './api/products'

export default function App() {
  const [ getData, { data, loading }] = useRequest(getProducts)

  useEffect(() => getData(2), [])

  return loading ? 'loading' : <p>{JSON.stringify(data)}</p>
}