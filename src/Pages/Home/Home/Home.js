import React from 'react';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';
import About from '../Banner/About/About';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Discover from '../Discover/Discover';
import LetsBlog from '../LetsBlog/LetsBlog';
import SecondSection from '../SecondSection/SecondSection';
import Shop from '../Shop/Shop';
import Video from '../Video/Video';

const Home = () => {
  return (
    <div>
      <Banner/>
      <SecondSection/>
      <Discover/>
      <Video/>
      <Category/>
      <Shop/>
      <AdvertisedItems/>
      <About/>
      <LetsBlog/>
    </div>
  );
};

export default Home;