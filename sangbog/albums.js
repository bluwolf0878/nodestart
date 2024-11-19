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

  static getalbumById = async id => {
    const { data, error } = await supabase
      .from('albums')
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
    let { data, error } = await supabase.from('albums')
    .insert([
      {
        title: formdata.title,
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
}

export default AlbumsModel;
