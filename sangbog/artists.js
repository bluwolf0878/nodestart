import { supabase } from './sangbog_modul.js';

class ArtistsModel {
  static async getAllArtists() {
    const { data, error } = await supabase
      .from('artists')
      .select('id, name');

    if (error) {
      console.error('Error fetching artists:', error.message);
      return [];
    }
    return data;
  }

  static getartistsById = async id => {
    const { data, error } = await supabase
      .from('artists')
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

export default ArtistsModel;
