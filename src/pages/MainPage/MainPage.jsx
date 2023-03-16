import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Collection from '../Collection/Collection';
import Detail from '../Detail/Detail';
import Home from '../Home/Home';
import Search from '../Search/Search';
import TopRated from '../TopRated/TopRated';
import UpComing from '../UpComing/UpComing';
const MainPage = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/popular" element={<Collection type={'popular'} />} />
      <Route path="/upcoming" element={<UpComing type={'upcoming'} />} />
      <Route path="/toprated" element={<TopRated type={'toprated'} />} />
      <Route path="/search/:content" element={<Search type={'search'} />} />
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
  );
};

export default MainPage;
