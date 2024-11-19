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

export const createartists = async (req, res) => {
  try {
    const data = await ArtistsModel.createRecord(req.body)
    res.status(200).send(data)
    
  } catch (error) {
    
  }
}

export const updateArtist = async (req, res) => {
  const { id } = req.body;
  const updatedData = req.body; // Data fra forespørgslen
  try {
    const updatedartists = await ArtistsModel.updateArtistsById(id, updatedData);
    if (!updatedartists) {
      return res.status(404).json({ error: 'Artists not found' });
    }
    res.status(200).json({ id: updatedSong.id, message: 'Artists updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update Artist' });
  }
};

export const deleteArtist = async (req, res) => {
  console.log(req.body);
  
    const { id } = req.body;
    const success = await ArtistsModel.deleteArtistById(id);
    console.log(success);
    
};
