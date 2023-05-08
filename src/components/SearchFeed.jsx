import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI,options } from "../utils/fetchData";
import Videos from "./Videos";
import { Typography, Box } from "@mui/material";

const SearchFeed = () => {
  const id = useParams();

  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    const getVideosArray = async() => {
      const videoArray = await fetchFromAPI(`https://youtube-v31.p.rapidapi.com/search?q=${id.searchTerm}&part=snippet%2Cid&regionCode=US&maxResults=50&order=date`,options);
      setVideos(videoArray.items);
      console.log(videos);
    }
    getVideosArray();
  },[id.searchTerm]);


  return (
    <Box p={2} minHeight="95vh">
      <Typography variant="h4" fontWeight={900}  color="white" mb={3} ml={{ sm: "100px"}}>
        Search Results for <span style={{color:"#fc1503"}}>{id.searchTerm}</span> videos
      </Typography>
      <Box display="flex">
        <Box sx={{ mr: { sm: '100px' } }}/>
        {<Videos videos={videos} />}
      </Box>
    </Box>
  );
};

export default SearchFeed;
