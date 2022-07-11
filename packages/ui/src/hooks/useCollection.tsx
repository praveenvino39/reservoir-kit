import { paths, ReservoirSDK, setParams } from '@reservoir0x/reservoir-kit-core'
import { useEffect, useState } from 'react'

type CollectionResponse =
  paths['/collection/v2']['get']['responses']['200']['schema']['collection']

export const useCollection = function (
  query?: paths['/collection/v2']['get']['parameters']['query']
) {
  const [resp, setResp] = useState<CollectionResponse | null>(null)

  useEffect(() => {
    if (query && ReservoirSDK.initialized) {
      const path = new URL(`${ReservoirSDK.client().apiBase}/collection/v2`)
      setParams(path, query)
      fetch(path)
        .then((response) => response.json())
        .then((data) =>
          setResp(data && data.collection ? data.collection : null)
        )
        .catch((err) => {
          console.error(err.message)
        })
    }
  }, [query, ReservoirSDK.initialized])

  return resp
}
