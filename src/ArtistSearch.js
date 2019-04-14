import React, { Fragment, useState, useEffect } from 'react'
import service from './service'
import debounce from 'lodash.debounce'

const searchAndSetArtists = async (query, setArtists) => {
  if (!query) return
  const artists = await service.searchArtists(query)
  setArtists(artists)
}

const debouncedSearchAndSetArtists = debounce(searchAndSetArtists, 500)

const useArtists = query => {
  const [artists, setArtists] = useState([])
  useEffect(
    () => {
      debouncedSearchAndSetArtists(query, setArtists)
    },
    [query],
    500
  )
  return [artists]
}

const useQuery = () => {
  const [query, setQuery] = useState('')
  const onChange = e => setQuery(e.target.value)
  return [query, onChange]
}

export default props => {
  const [query, onChange] = useQuery()
  const [artists] = useArtists(query)
  return (
    <Fragment>
      <input value={query} onChange={onChange} />
      Searching for {query}
      {JSON.stringify(artists, null, 2)}
    </Fragment>
  )
}
