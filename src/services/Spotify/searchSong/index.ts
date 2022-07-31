import { IsearchSongs } from "../../../utils/types";

const searchSong = async (props:IsearchSongs) =>{
   
    let url = "https://api.spotify.com/v1/search?type=track&q=" + props.searchTerm;
    let response = await fetch(url, {
        headers: {
            Authorization: 'Bearer BQBXemsQ5GRjJ3l4tSeDFwUZrb1X7gqJc5RsfyLh1Qlv5qnuXwfJ8U3Doc6cDGhJD7AJUfunIJR5JZ-Qp9hQXXlzPf-bibFMPuFFZmXIg4E5wpUUSQo'
          }

    });
    
   return await response.json();
};



export default searchSong;