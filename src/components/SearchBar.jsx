import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import {Paper} from '@mui/material'
import { useParams } from 'react-router-dom'

const SearchBar = ({selectedCategories,setSelectedCategories}) => {
  const [searchTerm,setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(searchTerm){
      navigate(`/search/${searchTerm}`);
    }
    setSearchTerm("");
  }

  return (
    <Paper component="form" sx={{
      borderRadius: 20,
      pl: 2,
      boxShadow: 'none',
      mr: { sm: 5 },
      backgroundColor:"#000",
    }} onSubmit = {handleSubmit}>
        <input placeholder='Search' type='text'style={{backgroundColor:"#1e272e",color:"#fff",outline:"none",borderRadius:"12px",height:"35px",marginRight:"150px",margin:"10px 150px"}} value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)} />
    </Paper>
  )
}

export default SearchBar