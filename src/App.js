import React, {useState} from 'react';
import Test from './Test';
import { Routes, Route } from "react-router-dom";

import Heading from "./Component/Heading";
import List from "./Component/List";
import Upload from "./Component/Upload";

function App() {
  const [contentList, setcontentList] = useState([]);
  return (
    <> 
    <Heading />
    <Routes>  
    <Route path="/List" element={<List contentList = {contentList} setcontentList = {setcontentList} />} />
    <Route path="/Upload" element={<Upload contentList = {contentList} setcontentList = {setcontentList} />} />
  </Routes>
  </>
  );
}

export default App;
