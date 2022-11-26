import React from 'react';
import { Link } from 'react-router-dom';
import canon from '../../../assets/images/category/canon.png';
import nikon from '../../../assets/images/category/nikon.jpg';
import sony from '../../../assets/images/category/sony.png';

const Category = () => {
  return (
    <div className=' text-5xl text-center my-8'>
      <h1>Used Camera Category</h1>
    
      <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center mx-auto w-2/4'>
     
      <Link to='/categories?name=canon'><img src={canon} alt="" /></Link>
      <Link to='/categories?name=Nikon'><img src={nikon} alt="" /></Link>
      <Link to='/categories?name=sony'><img className=' mt-12' src={sony} alt="" /></Link>

      </div>
      
    </div>
  );
};

export default Category;