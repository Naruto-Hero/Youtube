import React from 'react'
import { Typography, Box, Stack } from "@mui/material";

const VideoComments = ({comment,index}) => {
    console.log(comment);
  return (
    <Stack direction="column">
        <Typography color="#fff">{index+1}. {comment.snippet.topLevelComment.snippet.textOriginal}</Typography>
    </Stack>
  )
}

export default VideoComments