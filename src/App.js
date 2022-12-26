
import React from 'react'
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import RightBar from './components/RightBar';
import Feed from './components/Feed';
import Box from '@mui/material/Box';
import { Stack } from '@mui/system';
import Add from './components/Add';
// import images from './images/istockphoto-1368613398-612x612.jpg'


function App() {
  return (
     <Box>
      <NavBar />
      <Stack direction="row" spacing={2} justifyContent="space-between" >
      <SideBar />
      <Feed />
      <RightBar />
      </Stack>
      <Add />
      
    </Box>
    
  );
}

export default App;
