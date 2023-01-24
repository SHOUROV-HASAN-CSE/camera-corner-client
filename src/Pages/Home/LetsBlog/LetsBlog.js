import React from 'react';
import { Link } from 'react-router-dom';
import blog1 from '../../../assets/images/blog/blog-1.webp';
import blog2 from '../../../assets/images/blog/blog-2.webp';
import blog3 from '../../../assets/images/blog/blog-4.webp';
const LetsBlog = () => {
  return (
    <div className='md:mx-16 mx-6 md:my-20 my-6'>
      <div className='md:flex justify-between items-center'>
      <div className='md:text-left text-center mb-12 font-[Barlow]'>
        <p className='text-lg tracking-widest font-black'>OUR BLOG</p>
        <p className="text-6xl mt-3  font-black">Lates Blog</p>
    </div>
    <div><Link to='/blogs'><button className='custom-button hidden md:block'>All Blog</button></Link></div>
      </div>
      <div className='grid gap-8 grid-cols-1 md:grid-cols-3'>
      <div className="card bg-base-100 shadow-xl">
        <figure><img src={blog1} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="text-2xl font-bold mb-3">Review: Leica M10 Monochrom vs M Typ 246 Monochrom</h2>
          <p>Which black-and-white Leica camera is better for monochrome photography? MPB resident photographer Ian Howorth compares both...</p>
        </div>
      </div>

      <div className="card bg-base-100 shadow-xl">
        <figure><img src={blog2} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="text-2xl font-bold mb-3">Diary: The northern lights in Iceland with Paul Watson</h2>
          <p>Read Paul Watson’s journal as he shoots the *aurora borealis* and Iceland’s landscapes with mirrorless cameras and a drone...</p>
        </div>
      </div>

      <div className="card bg-base-100 shadow-xl">
        <figure><img src={blog3} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="text-2xl font-bold mb-3">Top 3 digital alternatives to the Hasselblad XPan</h2>
          <p>Which digital cameras are capable of matching the unique Hasselblad XPan film camera...</p>
        </div>
      </div>

      </div>
    </div>
  );
};

export default LetsBlog;