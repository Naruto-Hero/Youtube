import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/categories";

const Feed = ({ selectedCategories, setSelectedCategories }) => {
  return (
    <Stack
      direction="row"
      sx={{
        height: { sx: "auto", md: "100vh" },
        flexDirection: { md: "column" },
        width:{xs:"100%",lg:"auto"},
        position:"fixed", overflow:"scroll"
      }}
      paddingBottom="10px"
    >
      {categories.map((categorie) => (
        <button
          style={{
            background:
            categorie.name === selectedCategories ? "#fc1503" : "#000",
            color: "#fff",
            opacity: categorie.name === selectedCategories ? "1" : "0.8",
            padding: "5px",
            borderRadius: "12px",
            margin: "5px",
            fontSize: "15px",
            border:"none",outlined:"none",
            cursor:"pointer"
          }}
          key={categorie.name}
          onClick={() => setSelectedCategories(categorie.name)}
        >
        <span style={{ color: "#fff",opacity: categorie.name === selectedCategories ? "1" : "0.8" }}>{categorie.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default Feed;
