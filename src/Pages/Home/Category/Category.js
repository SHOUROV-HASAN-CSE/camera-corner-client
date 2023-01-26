import React from 'react';
import { Link } from 'react-router-dom';
import canon from '../../../assets/images/category/canon.png';
import nikon from '../../../assets/images/category/nikon.png';
import sony from '../../../assets/images/category/sony.png';

const Category = () => {
  return (
    <div className='mx-4 overflow-hidden'>
      <div className='text-center mb-12 font-[Barlow]'>
        <p className='text-lg tracking-widest font-black'>TRADE IN YOUR KIT</p>
        <p className="text-6xl mt-4 font-black">Used Camera Category</p>
    </div>

    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-5xl font-black font-[Barlow] text-white'>

      <Link to='/categories?name=sony'><div className='flex bg-[#005c80] justify-center items-center rounded-2xl px-11'><p>Sony</p>
      <img className='md:w-60 w-40' src={sony} alt="" />
      </div></Link>

      <Link to='/categories?name=canon'><div className='flex bg-[#ea4c88] justify-center items-center rounded-2xl px-11'><p>Canon</p>
      <img className='md:w-60 w-40' src={canon} alt="" />
      </div></Link>

      <Link to='/categories?name=Nikon'><div className='flex bg-[#ab69c6] justify-center items-center rounded-2xl px-11'><p>Nikon</p>
      <img className='md:w-60 w-40' src={nikon} alt="" />
      </div></Link>

    </div>

    </div>
  );
};

export default Category;