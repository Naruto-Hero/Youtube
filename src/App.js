import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import VideoDetail from "./components/VideoDetail";
import SearchFeed from "./components/SearchFeed";

const App = () => {
  return (
    <Box sx={{ backgroundColor: "#000" }}>
      <Header />
      <Routes>
        <Route path="/" element={<SideBar />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </Box>
  );
};

export default App;
