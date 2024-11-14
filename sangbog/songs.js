import { supabase } from './sangbog_modul.js';

class SongsModel {
  static async getAllSongs() {
    const { data, error } = await supabase
      .from('songs')
      .select('id, title, content, created_at, artists (name)');

    if (error) {
      console.error('Error fetching songs:', error.message);
      return [];
    }
    return data;
  }
}

export default SongsModel;
