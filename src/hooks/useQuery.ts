import { useState, useEffect } from 'react'

interface UseQueryReturn<T> {
  loading: boolean
  data: T | null
}

//const useQuery = <DataType = any> === useQuery will get any interface insted of <DataType> (my word that will change)
//useQuery = <DataType = any>(url: string) === (url) we will get any data insted of url wich going to the fetch link
//: UseQueryReturn<DataType> === it is tyo wich we give to the uaeQuery when it will be called (useQuery(foo))
//UseQueryReturn<DataType> === we will get any interfase insted of <DataType> (my word that will change) ; in my situation in is <DataType> === <T>

export const useQuery = <DataType = any>(
  url: string
): UseQueryReturn<DataType> => {
  //state by default
  const [state, setState] = useState<UseQueryReturn<DataType>>({
    data: null,
    loading: false,
  })

  useEffect(() => {
    //changes state
    setState({ loading: true, data: null })

    fetch(`https://auros-api.netlify.app/.netlify/functions/api${url}`)
      .then((res) => res.json())
      //when we will gt data => chanching state
      .then((res) => setState({ data: res, loading: false }))
      ///when it is not data => change state
      .catch(() => setState({ data: null, loading: false }))
  }, [url])

  return state
}
