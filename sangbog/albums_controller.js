// controllers/albumsController.js
import AlbumsModel from './albums.js';

export const getAllAlbums = async (req, res) => {
  try {
    const albums = await AlbumsModel.getAllAlbums();
    res.status(200).json(albums);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch albums' });
  }
};

export const getSinglealbums = async (req, res) => {
  const { id } = req.params;
  try {
    const song = await SongsModel.getalbumsById(id);
    if (!song) {
      return res.status(404).json({ error: 'album not found' });
    }
    res.status(200).json(song);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch album' });
  }

};

export const createalbums = async (req, res) => {
  try {
    const data = await AlbumsModel.createRecord(req.body)
    res.status(200).send(data)
    
  } catch (error) {
    
  }
}
