// controllers/artistsController.js
import ArtistsModel from './artists.js';

export const getAllArtists = async (req, res) => {
  try {
    const artists = await ArtistsModel.getAllArtists();
    res.status(200).json(artists);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch artists' });
  }
};

  export const getSingleartists = async (req, res) => {
    const { id } = req.params;
    try {
      const song = await SongsModel.getartistsById(id);
      if (!song) {
        return res.status(404).json({ error: 'artists not found' });
      }
      res.status(200).json(song);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch artists' });
    }
  
};
