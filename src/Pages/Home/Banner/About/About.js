import React from 'react';
import { Link } from 'react-router-dom';


const About = () => {
    return (
        <div className="hero my-10 bg-[#e8e8e6] font-black">
            <div className="hero-content flex-col lg:flex-row">
                <div className=' '>
                    <img src='https://www.gearfocus.com/assets/images/page/gear-focus-home-banner.jpg' alt="" className="w-3/4 rounded-xl shadow-2xl border-2 border-gray-200" />
              
                </div>
                <div className='w-1/2 my-3'>
                    <h1 className="mt-6 text-5xl font-[Barlow]">
                    Buy & Sell Camera Gear </h1>
                    <p className="py-5 lg:text-xl text-base font-[Barlow]">
                       Made by Creatives, For Creatives. <br />
                       Buyer & Seller Protection. <br />
                       Unlimited Free Listings. <br />
                       Only 5% Seller Fees. <br />
                       Target Market.</p>
                       <Link to='/addproduct'><button className="custom-button ml-32 md:ml-0 ">Sell Your Gear</button></Link>
                    
                </div>
            </div>
        </div>
    );
};

export default About;