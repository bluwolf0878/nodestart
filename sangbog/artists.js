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

  static async createRecord(formdata) {
    // Method scope
    console.log(formdata);
    let { data, error } = await supabase.from('artists')
    .insert([
      {
        name: formdata.name,
        description: formdata.description,
        image: formdata.image
      }
    ])
    .select()
    .single()
    if(error){
      console.error(error )
    }
    return data
  }

  static async updateArtistsById(id, updatedData) {

    const { data, error } = await supabase
      .from('artists')
      .update(updatedData)
      .eq('id', id)
      .single(); // Ensures only one record is returned
  
    if (error) {
      console.error('Error updating artists:', error.message);
      return null;
    }
    return data;
  }
}
export default ArtistsModel;
