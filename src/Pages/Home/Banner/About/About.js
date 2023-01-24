import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../../assets/images/blog/blog-3.webp';


const About = () => {
    return (
        <div className="hero my-10 py-10 bg-[#e8e8e6] font-black">
            <div className="hero-content flex-col lg:flex-row">
                <div className=' '>
                    <img src={img1} alt="" className="md:w-3/4 rounded-xl shadow-2xl border-2 border-gray-200" />
              
                </div>
                <div className='md:w-1/2 my-3 text-center md:text-left'>
                    <h1 className="text-5xl font-[Barlow]">
                    Buy & Sell Camera Gear </h1>
                    <div className="py-5 lg:text-xl text-base font-[Barlow]">
                    <p>span Made by Creatives, For Creatives.</p>
                    <p>Buyer & Seller Protection.</p>
                    <p>Unlimited Free Listings.</p>
                    <p>Only 5% Seller Fees.</p>
                    <p>Target Market.</p>
                       </div>
                    <div>
                    <Link to='/addproduct'><button className="custom-button md:ml-0 ">Sell Your Gear</button></Link>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default About;