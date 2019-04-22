import React, { useState, useEffect } from 'react'
import service from './service'
import debounce from 'lodash.debounce'
import Grid from '@material-ui/core/Grid'
import ArtistSearchResult from './ArtistSearchResult'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import { withStyles } from '@material-ui/core/styles'

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
    [query]
  )
  return [artists]
}

const useQuery = () => {
  const [query, setQuery] = useState('')
  const onChange = e => setQuery(e.target.value)
  return [query, onChange]
}

const SearchResult = props => (
  <Grid item>
    <ArtistSearchResult key={props.id} {...props} />
  </Grid>
)

const artistSearchInputStyles = {
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4
  }
}

let ArtistSearchInput = props => {
  const { classes = {} } = props
  return (
    <Paper className={classes.root} elevation={1}>
      <InputBase
        className={classes.input}
        onChange={props.onChange}
        placeholder='Search Artists'
      />
      <IconButton className={classes.iconButton} aria-label='Search'>
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

ArtistSearchInput = withStyles(artistSearchInputStyles)(ArtistSearchInput)

export default props => {
  const [query, onChange] = useQuery()
  const [artists] = useArtists(query)
  return (
    <main className='artist-search'>
      <Grid container justify='center' className=''>
        <Grid item>
          <ArtistSearchInput onChange={onChange} />
        </Grid>
        <Grid container justify='center' spacing={16}>
          {artists.map(artist => (
            <SearchResult {...artist} />
          ))}
        </Grid>
      </Grid>
    </main>
  )
}
