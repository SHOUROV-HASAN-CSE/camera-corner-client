import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
  return (
    <div>
      <Navbar/>
      <div className="drawer drawer-mobile">
  <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    <Outlet/>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
     
      <li><a href='/'>All Seller</a></li>
      <li><a href='/'>Reported Item</a></li>
      <Link></Link>
    </ul>
  
  </div>
</div>
    </div>
  );
};

export default DashboardLayout;