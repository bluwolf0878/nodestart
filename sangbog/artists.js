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
}

export default ArtistsModel;
