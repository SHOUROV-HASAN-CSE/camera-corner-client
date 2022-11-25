import React from 'react';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';
import About from '../Banner/About/About';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';

const Home = () => {
  return (
    <div>
      <Banner/>
      <AdvertisedItems/>
      <Category/>
      <About/>
    </div>
  );
};

export default Home;