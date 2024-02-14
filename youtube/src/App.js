import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from "./Components/Homepage";
import VideoPage from './Components/VideoPage';


const App = () => {
  return ( 
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/videos" element={<VideoPage/>}/>
      </Routes>
  )
};

export default App;