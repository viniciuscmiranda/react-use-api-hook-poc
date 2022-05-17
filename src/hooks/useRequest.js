import { useState, useCallback } from 'react'

export function useRequest(
  request = async () => {},
  {
    initial = null,
    onError = () => {},
  } = {}
){
  if(Array.isArray(request)) initial = []

  const [data, setData] = useState(initial) 
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const execute = useCallback(async (...params) => {
    try {
      setLoading(true)
      setError(false)
  
      let res
      if(typeof request === 'function') {
        res = await request(...params)
      } else if(Array.isArray(request)) {
        res = await Promise.all(request.map((req, i) => req(...(Array.isArray(params[i]) ? params[i] : [ params[i] ]))))
      } else {
        throw(new Error('Invalid request'))
      }

      setData(res)
      return res
    } catch(err){
      onError(err)
    } finally {
      setLoading(false)
    }
  }, [onError, request])

  return [ execute, { data, loading, error }]
}