// controllers/songsController.js
import SongsModel from './songs.js';

export const getAllSongs = async (req, res) => {
  try {
    const songs = await SongsModel.getAllSongs();
    res.status(200).json(songs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch songs' });
  }
};

export const getSingleSong = async (req, res) => {
  const { id } = req.params;
  try {
    const song = await SongsModel.getSongById(id);
    if (!song) {
      return res.status(404).json({ error: 'Song not found' });
    }
    res.status(200).json(song);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch song' });
  }
};
