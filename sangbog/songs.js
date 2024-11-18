import { supabase } from './sangbog_modul.js';

class SongsModel {
  static getAllSongs = async () => {
    const { data, error } = await supabase
      .from('songs')
      .select('id, title, content, created_at, artists (name)');

    if (error) {
      console.error('Error fetching songs:', error.message);
      return [];
    }
    return data;
  }


  static getSongById = async id => {
    const { data, error } = await supabase
      .from('songs')
      .select('*')
      .eq('id', id)
      .single(); // Retrieves a single record

    if (error) {
      console.error('Error fetching song:', error.message);
      return null;
    }
    return data;
  }
}


export default SongsModel;
