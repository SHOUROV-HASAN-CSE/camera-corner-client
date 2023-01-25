import React from 'react';
import video from '../../../assets/images/video/sony.mp4';
import './Video.css'

const Video = () => {
  return (
    <div className='mb-20 video font-[Barlow] text-center font-black'>
      <p className='md:text-2xl text-xl pt-24 tracking-widest'>POST PHOTOS WITH CAMERA X9</p>
      <h1 className='md:text-6xl text-5xl mt-4 md:mb-12 -mb-20'>The Best Digital Camera</h1>
    <div className='flex justify-center mx-2 md:mx-0'>
    <video src={video} loop autoPlay muted className="h-[500px] w-auto" ></video>            
</div>
    </div>
  );
};

export default Video;