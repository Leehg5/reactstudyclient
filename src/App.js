import React, {useState} from 'react';
import { Routes, Route } from "react-router-dom";

import Heading from "./Component/Heading";
import List from "./Component/Post/List";
import Upload from "./Component/Post/Upload";

function App() {
  const [contentList, setcontentList] = useState([]);
  return (
    <> 
    <Heading />
    <Routes>  
    <Route path="/" element={<List contentList = {contentList} setcontentList = {setcontentList} />} />
    <Route path="/Upload" element={<Upload contentList = {contentList} setcontentList = {setcontentList} />} />
  </Routes>
  </>
  );
}

export default App;
