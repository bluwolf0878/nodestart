// testModels.js
import SongsModel from './songs.js';
import ArtistsModel from './artists.js';
import AlbumsModel from './albums.js';

(async () => {
  // Fetch and display all songs
  const songs = await SongsModel.getAllSongs();
  console.log('Songs:', songs);

  // Fetch and display all artists
  const artists = await ArtistsModel.getAllArtists();
  console.log('Artists:', artists);

  // Fetch and display all albums
  const albums = await AlbumsModel.getAllAlbums();
  console.log('Albums:', albums);
})();