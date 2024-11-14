import { supabase } from './sangbog_modul.js';

class AlbumsModel {
  static async getAllAlbums() {
    const { data, error } = await supabase
      .from('albums')
      .select('id, title, release_date, artists (name)');

    if (error) {
      console.error('Error fetching albums:', error.message);
      return [];
    }
    return data;
  }
}

export default AlbumsModel;
