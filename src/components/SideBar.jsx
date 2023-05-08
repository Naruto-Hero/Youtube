import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Feed from "./Feed";
import { fetchFromAPI,options } from "../utils/fetchData";
import Videos from "./Videos";

const SideBar = () => {
  const [selectedCategories, setSelectedCategories] = useState("New");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);
    const getVideosArray = async() => {
      const videoArray = await fetchFromAPI(`https://youtube-v31.p.rapidapi.com/search?q=${selectedCategories}&part=snippet%2Cid&regionCode=US&maxResults=50&order=date`,options);
      setVideos(videoArray.items);
      console.log(videoArray);
    }
    getVideosArray();
  }, [selectedCategories]);

  return (
    <Stack sx={{ flexDirection: { md: "row", xs: "column" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "100vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 }
        }}
      >
        <Feed
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
        />
      </Box>
      <Box>
        <Typography fontSize="3rem" color="#fff" padding="10px" sx={{marginLeft:{lg:"12rem",xs:"auto"},marginTop:{lg:"auto",xs:"7rem"}}} paddingLeft="40px" mb={2} fontWeight="bold">
            {selectedCategories} Videos 
        </Typography>
        <Videos videos={videos}/>
      </Box>
    </Stack>
  );
};

export default SideBar;
