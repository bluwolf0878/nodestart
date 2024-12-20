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

  static async createRecord(formdata) {
    // Method scope
    console.log(formdata);

    let { data, error } = await supabase.from('songs')
      .insert([
        {
          title: formdata.title,
          content: formdata.content,
          lyrics: formdata.lyrics,
          artist_id: formdata.artist_id
        }
      ])
      .select()
      .single()
      if(error){
        console.error(error )
      }
  }

  static async updateSongById(id, updatedData) {
    
    const { data, error } = await supabase
      .from('songs')
      .update(updatedData)
      .eq('id', id)
      .single();
      
    if (error) {
      console.error('Error updating song:', error.message);
      return null;
    }

    
    return data;
  }
  
  static async deleteSongById(id) {
    try{
      const { data, error } = await supabase
        .from('songs')
        .delete()
        .eq('id', id);
        if (error) {
          throw new Error(`error deleting songs:${error}`);
        }
        return true
    }
    catch(error){
      console.error(error)
    }
  }
}


export default SongsModel;
