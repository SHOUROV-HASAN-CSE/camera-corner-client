import React from 'react';
import img1 from '../../../assets/images/image/image-2.png';
import './Banner.css';

const Banner = () => {
    return (
        <div className='md:flex justify-center items-center bg-[#e8e8e6] pt-16 md:pt-0'>
            <div>
                <p className='text-xl font-mono mb-2 text-center md:text-left'>SHOP TO GET WHAT YOU LOVE</p>
                <h1 className='md:text-7xl text-6xl text-center font-[Barlow] font-black'>Ready To Spoil <br /> Every Moment</h1>
               <p className='mt-4 text-xl text-[#918b91] text-center md:text-left'>Best Used Camera for affordable price.</p>
                <button className='mt-8 custom-button ml-32 md:ml-0'>GET STARTED</button>
            </div>
            <div>
                <img className='md:w-[800px] md:ml-6' src={img1} alt="" />
            </div>
        </div>
    );
};

export default Banner;