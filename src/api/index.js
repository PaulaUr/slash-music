import axios from "axios";

export const  getList = async (artista) => {
    let config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await axios.get(
       ` https://itunes.apple.com/search?term=${artista}&entity=song`,
        config
      );
    //   console.log(response.data.results);
      return await response.data.results;

    } catch (error) {
      console.error(error);
    }
  };