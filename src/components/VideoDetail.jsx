import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { Typography, Box, Stack } from "@mui/material";
import Videos from "./Videos";
import { fetchFromAPI, options } from "../utils/fetchData";
import VideoComments from "./VideoComments";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState([]);
  const [videos, setVideos] = useState([]);
  const [comments,setComments] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const getRelatedVideos = async () => {
      const relatedVideosArray = await fetchFromAPI(
        `https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=${id}&part=id%2Csnippet&type=video&maxResults=50`,
        options
      );
      setVideos(relatedVideosArray.items);
    };
    getRelatedVideos();
  }, [id]);

  useEffect(() => {
    const getVideoDetails = async () => {
      const videoDetails = await fetchFromAPI(
        `https://youtube-v31.p.rapidapi.com/videos?part=contentDetails%2Csnippet%2Cstatistics&id=${id}`,
        options
      );
      setVideoDetail(videoDetails.items);
    };

    const getVideoComments = async()=>{
      const videoComments = await fetchFromAPI(`https://youtube-v31.p.rapidapi.com/commentThreads?part=snippet&videoId=${id}&maxResults=100`,options);
      setComments(videoComments.items);
    }
    getVideoComments();
    getVideoDetails();
  }, [id]);

  if (videoDetail === null || comments === "") return;

  return (
    <Box minHeight="95vh">
      <Stack  direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }} marginLeft="5rem">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
            />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {videoDetail[0].snippet.title}
            </Typography>
            <Stack
              direction="column"
              sx={{ color: "#fff" }}
              py={1}
              px={2}
              gap="15px"
            >
              <Link to={`/channel/${videoDetail[0].snippet.channelId}`}>
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  color="#fff"
                >
                  {videoDetail[0].snippet.channelTitle}
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center" justifyContent="flex-start">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(videoDetail[0].statistics.viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(videoDetail[0].statistics.likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
              <Typography marginTop="4rem" fontSize="25px" color="#fff">
                Comments
              </Typography>
              {comments.map((comment,index)=>(
                <VideoComments comment = {comment} index={index} />
              ))}
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="flex-end" alignItems="center" marginLeft="10rem">
          <Videos videos={videos} direction="column" /></Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
