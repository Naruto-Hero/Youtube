import React from "react";
import { Stack, Box } from "@mui/material";
import VideoCard from "./VideoCard";

const Videos = ({ videos }) => {
  if(videos === null) return;
  if (!videos.length) return;
  return (
    <Stack
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={2}
      direction="row"
      sx={{marginLeft:{lg:"15rem",xs:"auto"},marginTop:{lg:"auto",xs:"1rem"}}}
    >
      {videos.map((video,idx)=>(
        <Box key={idx}>
            {video.id.videoId && <VideoCard video={video}/>}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
