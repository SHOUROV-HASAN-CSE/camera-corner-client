import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/icon/icon.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer p-10 bg-[#004662] text-white font-[Barlow]">
    <div className='md:ml-28 mx-auto'>
      <img className='w-56 -mt-16' src={logo} alt="" />
      <div className='-mt-8'>
      <h3 className='text-3xl font-bold'>Camera Corner</h3>
      <p className='text-lg'>Copyright © 2022 - All right reserved</p>
      </div>
    </div> 
    <div className='mx-auto'>
      <span className="text-xl font-extrabold text-center">Quick Links</span>   
      <Link to=''><button className="hover:text-white text-base font-semibold text-[#8e8e8e] mb-1">About</button> </Link>
      <Link to=''><button className="hover:text-white text-base font-semibold text-[#8e8e8e] mb-1">Shop</button></Link>
      <Link to=''><button className="hover:text-white text-base font-semibold text-[#8e8e8e] mb-1">Services</button> </Link>
      <Link to=''><button className="hover:text-white text-base font-semibold text-[#8e8e8e] mb-1">Product</button> </Link>
      <Link to=''><button className="hover:text-white text-base font-semibold text-[#8e8e8e] mb-1">Shipping</button> </Link>
      <Link to=''><button className="hover:text-white text-base font-semibold text-[#8e8e8e] mb-1">Blog</button> </Link>
      <Link to=''><button className="hover:text-white text-base font-semibold text-[#8e8e8e] mb-1">Contact</button> </Link>
    </div> 
    <div className='mx-auto'>
      <span className="text-xl font-extrabold">Information</span> 
      <button className="hover:text-white text-base font-semibold text-[#8e8e8e] mb-1">Privacy policy</button> 
      <button className="hover:text-white text-base font-semibold text-[#8e8e8e] mb-1">Terms & Conditions</button> 
      <button className="hover:text-white text-base font-semibold text-[#8e8e8e] mb-1">Disclaimer</button>
      <button className="hover:text-white text-base font-semibold text-[#8e8e8e] mb-1">Support</button>
      <button className="hover:text-white text-base font-semibold text-[#8e8e8e] mb-1">FAQ</button>
      <button className="hover:text-white text-base font-semibold text-[#8e8e8e] mb-1">Account</button>
      <button className="hover:text-white text-base font-semibold text-[#8e8e8e] mb-1">Return Policy</button>
    </div>
    <div className='mx-auto md:mt-24'>
    <span className="text-xl font-extrabold ">Social</span> 
    <div className="grid grid-flow-col gap-4">
      <a href="https://www.twitter.com"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
      <a href="https://www.youtube.com"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
      <a href="https://www.facebook.com"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
    </div>
  </div>
  </footer>
  );
};

export default Footer;