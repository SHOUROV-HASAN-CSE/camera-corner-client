import React from 'react';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';
import About from '../Banner/About/About';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Discover from '../Discover/Discover';
import SecondSection from '../SecondSection/SecondSection';
import Video from '../Video/Video';

const Home = () => {
  return (
    <div>
      <Banner/>
      <SecondSection/>
      <Discover/>
      <Video/>
      <Category/>
      <AdvertisedItems/>
      <About/>
    </div>
  );
};

export default Home;