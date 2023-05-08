import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";

const VideoCard = ({ video }) => {
  const publishTimeString = video.snippet.publishedAt.slice(0,10);
  const publishTimeDate = new Date(publishTimeString);
  const publishTime = publishTimeDate.getTime();

  const date = new Date();
  const currentTime = date.getTime()
  let days = Math.floor((currentTime-publishTime)/86400000);
  let months = Math.floor((currentTime-publishTime)/2628000000);
  let years = Math.floor((currentTime-publishTime)/31540000000);
  
  let showDate=`${days} days ago`;
  if(days>30){
    showDate = `${months} months ago`
  }
  if(months>12){
    showDate = `${years} years ago`
  }

  return (
    <Card
      sx={{
        minWidth:"100%",
        width: {sm: "100%", md: "320px",xs:"100%" },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <Link to={`/video/${video.id.videoId}`}>
        <CardMedia
          image={video.snippet.thumbnails.high.url}
          sx={{ width: { xs: "100%", sm: "358px" }, height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1E1E1E", height: "106px" }}>
        <Link to={`video/${video.id.videoId}`}>
          <Typography fontWeight="bold" color="#fff" variant="subtitle1">
            {video.snippet.title.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={`/video/${video.snippet.channelId}`}>
            <Typography variant="subtitle2" color="gray">
                {video.snippet.channelTitle}
            </Typography>
        </Link>
        <Typography variant="subtitle2" color="gray">
            100M views &#8226; {showDate}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
