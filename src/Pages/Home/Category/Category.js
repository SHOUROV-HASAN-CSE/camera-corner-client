import React from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
  return (
    <div className=' text-5xl text-center my-8'>
      <h1>Used Camera Category</h1>
      <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center mx-auto w-1/4'>
        
      <Link to='/categories'><label className="btn">Sony</label></Link>
      <Link to='/categories'><label className="btn">Canon</label></Link>
      <Link to='/categories'><label className="btn">Nikon</label></Link>
      
      
      </div>
      
    </div>
  );
};

export default Category;