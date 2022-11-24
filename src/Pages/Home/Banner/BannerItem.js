import React from 'react';
import './BannerItem.css';

const BannerItem = ({slide}) => {
    const {image, id, prev, next} = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
                <div className='carousel-img'>
                    <img src={image} alt="" className="w-full rounded-xl" />
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/3">
                    <h1 className='md:text-6xl text-2xl font-semibold text-white'>
                         Camera Corner<br />
                    </h1>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/3 w-1/4 left-24 top-1/2">
                <p className='text-2xl text-white'>Best Used Camera for affordable price.</p>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/3 w-1/3 left-24 bottom-1/3">
                <p className='text-lg text-white'>we are providing the best Used camera and after-sales service.</p>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 md:bottom-1/4 bottom-12">
                    <button className="btn btn-outline btn-warning">contact us</button>
                </div>
                <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href={`#slide${prev}`} className="btn btn-circle  btn-warning mr-5">❮</a>
                    <a href={`#slide${next}`} className="btn btn-circle  btn-warning">❯</a>
                </div>
            </div>
    );
};

export default BannerItem;