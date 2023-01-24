import React from 'react';
import blog1 from '../../assets/images/blog/blog-1.webp';
import blog2 from '../../assets/images/blog/blog-2.webp';
import blog3 from '../../assets/images/blog/blog-4.webp';
import blog4 from '../../assets/images/blog/blog-5.webp';
import blog5 from '../../assets/images/blog/blog-6.webp';

const Blogs = () => {
  return (
    <div className='md:mx-16 mx-6 md:my-20 my-6'>
      <p className="text-center mb-12 font-[Barlow] text-6xl font-black">OUR BLOG</p>
  
    <div className='grid gap-8 grid-cols-1 md:grid-cols-3'>
    <div className="card bg-base-100 shadow-xl border-[#005c80] border-2">
      <figure><img src={blog1} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="text-2xl font-bold mb-3">Review: Leica M10 Monochrom vs M Typ 246 Monochrom</h2>
        <p>Which black-and-white Leica camera is better for monochrome photography? MPB resident photographer Ian Howorth compares both...</p>
        <div className="card-actions justify-center mt-6">
      <button className="custom-button">Read More</button>
    </div>
      </div>
    </div>

    <div className="card bg-base-100 shadow-xl border-[#005c80] border-2">
      <figure><img src={blog2} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="text-2xl font-bold mb-3">Diary: The northern lights in Iceland with Paul Watson</h2>
        <p>Read Paul Watson’s journal as he shoots the *aurora borealis* and Iceland’s landscapes with mirrorless cameras and a drone...</p>
        <div className="card-actions justify-center mt-6">
      <button className="custom-button">Read More</button>
    </div>
      </div>
    </div>

    <div className="card bg-base-100 shadow-xl border-[#005c80] border-2">
      <figure><img src={blog3} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="text-2xl font-bold mb-3">Top 3 digital alternatives to the Hasselblad XPan</h2>
        <p>Which digital cameras are capable of matching the unique Hasselblad XPan film camera...</p>
        <div className="card-actions justify-center mt-6">
      <button className="custom-button">Read More</button>
    </div>
      </div>
    </div>


    <div className="card bg-base-100 shadow-xl border-[#005c80] border-2">
      <figure><img src={blog4} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="text-2xl font-bold mb-3">Sigma DP0 Quattro</h2>
        <p>The Sigma DP0 Quattro is a compact fixed-lens camera, which allows you to take pictures close to the aspect ratio of the Hasselblad XPan...</p>
        <div className="card-actions justify-center mt-6">
      <button className="custom-button">Read More</button>
    </div>
      </div>
    </div>



    <div className="card bg-base-100 shadow-xl border-[#005c80] border-2">
      <figure><img src={blog5} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="text-2xl font-bold mb-3">Fujifilm GFX 50R</h2>
        <p>The Fujifilm GFX 50Rhas a 50-megapixel medium-format sensor, which—even when using the XPan 65x24 crop—gives you healthy 25-megapixel resolution files...</p>
        <div className="card-actions justify-center mt-6">
      <button className="custom-button">Read More</button>
    </div>
      </div>
    </div>

    </div>
  </div>
  );
};

export default Blogs;