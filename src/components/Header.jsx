import React from 'react';
import {Stack,Box} from "@mui/material"
import { Link } from 'react-router-dom';


import Logo from "../assets/YouTube-White-Full-Color-Dark-Background-Logo.wine.svg";
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <Stack backgroundColor="#000" direction='row' alignItems='center' justifyContent="space-between" sx={{position:"sticky",top:0}}>
        <Box>
          <Link to="/" sx={{zIndex:20}}>
              <img src={Logo} alt="" width='220px' height='50px' style={{backgroundColor:"#fff",marginLeft:"4rem",marginBlock:"1rem",zIndex:2}}/>
          </Link>
        </Box>
        <SearchBar />
    </Stack>
  )
}

export default Header