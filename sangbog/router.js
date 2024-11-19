// routes/index.js
import express from 'express';
import { createSong, getAllSongs, getSingleSong,} from './songs_controller.js';
import { createartists, getAllArtists, getSingleartists, } from './artists_cotroller.js';
import { createalbums ,getAllAlbums, getSinglealbums } from './albums_controller.js';

const router = express.Router();

// Define routes and connect to controllers
router.get('/songs', getAllSongs);
router.get('/artists', getAllArtists);
router.get('/albums', getAllAlbums);

router.post('/songs', createSong)
router.post('/artists', createartists)
router.post('/albums', createalbums)


router.get('/songs/:id', getSingleSong);
router.get('/artists/:id', getSingleartists);
router.get('/albums/:id', getSinglealbums);


export default router;
