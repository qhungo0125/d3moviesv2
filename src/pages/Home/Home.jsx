import React from 'react';
import MainSlider from '../../components/MainSlider/MainSlider';
import SubSlider from '../../components/SubSlider/SubSlider';
import './Home.scss';

const Home = () => {
  return (
    <div className="home">
      <MainSlider />
      <SubSlider />
      <SubSlider type={'upcoming'} />
      <SubSlider type={'toprated'} />
    </div>
  );
};

export default Home;
