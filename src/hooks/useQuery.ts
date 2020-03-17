import { useState, useEffect } from 'react'

interface UseQueryReturn<DataType> {
  loading: boolean
  data: DataType | null
}

export const useQuery = <DataType = any>(
  url: string
): UseQueryReturn<DataType> => {
  const [state, setState] = useState<UseQueryReturn<DataType>>({
    data: null,
    loading: false
  })

  useEffect(() => {
    setState({ loading: true, data: null })

    fetch(`https://auros-api.netlify.com/.netlify/functions/api${url}`)
      .then(res => res.json())
      .then(res => setState({ data: res, loading: false }))
      .catch(() => setState({ data: null, loading: false }))
  }, [url])

  return state
}
