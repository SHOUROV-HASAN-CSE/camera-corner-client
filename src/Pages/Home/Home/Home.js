import React from 'react';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';

const Home = () => {
  return (
    <div>
      <Banner/>
      <AdvertisedItems/>
      <Category/>
    </div>
  );
};

export default Home;