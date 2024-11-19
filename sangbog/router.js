// routes/index.js
import express from 'express';
import { createSong, getAllSongs, getSingleSong, updateSong, deleteSong} from './songs_controller.js';
import { createartists, getAllArtists, getSingleartists, updateArtist, deleteArtist } from './artists_cotroller.js';
import { createalbums ,getAllAlbums, getSinglealbums, updateAlbums , deleteAlbum } from './albums_controller.js';

const router = express.Router();

// Define routes and connect to controllers
router.get('/songs', getAllSongs);
router.get('/artists', getAllArtists);
router.get('/albums', getAllAlbums);

router.get('/songs/:id', getSingleSong);
router.get('/artists/:id', getSingleartists);
router.get('/albums/:id', getSinglealbums);

router.post('/songs', createSong)
router.post('/artists', createartists)
router.post('/albums', createalbums)

router.put('/songs', updateSong);
router.put('/artists', updateArtist);
router.put('/albums', updateAlbums);

router.delete('/songs', deleteSong);
router.delete('/artists', deleteArtist);
router.delete('/albums', deleteAlbum);


export default router;
