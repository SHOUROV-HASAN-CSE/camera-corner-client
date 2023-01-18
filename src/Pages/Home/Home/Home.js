import React from 'react';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';
import About from '../Banner/About/About';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Discover from '../Discover/Discover';
import SecondSection from '../SecondSection/SecondSection';

const Home = () => {
  return (
    <div>
      <Banner/>
      <SecondSection/>
      <Discover/>
      <AdvertisedItems/>
      <Category/>
      <About/>
    </div>
  );
};

export default Home;