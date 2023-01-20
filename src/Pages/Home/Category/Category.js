import React from 'react';
import { Link } from 'react-router-dom';
import canon from '../../../assets/images/category/canon.png';
import nikon from '../../../assets/images/category/nikon.png';
import sony from '../../../assets/images/category/sony.png';

const Category = () => {
  return (
    <div className='text-center py-16 bg-[#e8e8e6] w-full'>
      <p className='text-lg tracking-widest font-[Barlow] font-black'>TRADE IN YOUR KIT</p>
      <h1 className='text-5xl mt-4npm start
      '>Used Camera Category</h1>
    
      <div className='md:flex justify-center gap-8 mt-16 text-5xl font-[Barlow] font-black text-white'>

      <Link to='/categories?name=sony'><div className='flex bg-[#005c80] justify-center items-center rounded-2xl px-11'><p>Sony</p>
      <img className='w-60' src={sony} alt="" />
        </div></Link>

     
      <Link to='/categories?name=canon'><div className='flex bg-[#ea4c88] justify-center items-center rounded-2xl px-11'><p>Canon</p>
      <img className='w-60' src={canon} alt="" />
        </div></Link>



      <Link to='/categories?name=Nikon'><div className='flex bg-[#ab69c6] justify-center items-center rounded-2xl px-11'><p>Nikon</p>
      <img className='w-60' src={nikon} alt="" />
        </div></Link>
        

      </div>
      
    </div>
  );
};

export default Category;