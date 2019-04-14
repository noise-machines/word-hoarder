import uniqBy from 'lodash.uniqby'
const endpoint =
  process.env.NODE_ENV === 'production'
    ? 'https://data.noisemachines.io'
    : 'http://localhost:3000'

export default {
  async request (path) {
    const result = await window.fetch(endpoint + path)
    const json = await result.json()
    return json
  },
  async searchArtists (query) {
    const result = await this.request(`/songs/search?query=${query}`)
    const songs = result.contents
    const artists = songs.map(song => song.artist)
    return uniqBy(artists, 'id')
  }
}
