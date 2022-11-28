import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/icon/icon.png';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useAdmin from '../../../hooks/useAdmin';

const Navbar = () => {

  const [client, setClient] = useState({});
  console.log(client);

  const {user, logOut} = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email)


  const handleLogOut = () =>{
      logOut()
      .then(() =>{})
      .catch(error => console.error(error))
    }

const menuItems1 = <>
<li className='font-semibold'><Link to='/addproduct'>Add Product</Link></li>
<li className='font-semibold'><Link to='/myproduct'>My Product</Link></li>
  </>

const menuItems2 = <>
<li className='font-semibold'><Link to='/myorders'>My Orders</Link></li>
  </>



useEffect(() => {
  fetch(`https://camera-corner-server.vercel.app/users/${user?.email}`)
        .then(res => res.json())
        .then(data => {
          
            setClient( data);
        })
},[user]);



  return (
    <div className="navbar h-20 mb-6 py-12 bg-zinc-200 rounded-xl">
    <div className="navbar-start">
        <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            
            <li className='font-semibold'><Link to='/'>Home</Link></li>
            <li className='font-semibold'><Link to='/blogs'>Blogs</Link></li>
            <li >
          <p className="justify-between font-semibold">
          Categories
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </p>
          <ul className="p-2 bg-slate-50">
            <li><Link to='/categories?name=canon'>Canon</Link></li>
            <li><Link to='/categories?name=Nikon'>Nikon</Link></li>
            <li><Link to='/categories?name=sony'>Sony</Link></li>
          </ul>
        </li>

           {
                client.userStatus==='Seller' && user?.uid ?
                <>{menuItems1}</>
                :
                null
            }
             {
                client.userStatus==='Buyer' && user?.uid ?
                <>{menuItems2}</>
                :
                null
            }

        {
       isAdmin && <>   
      <li className='font-semibold'><Link to='/dashboard'>Dashboard</Link></li>
       </>
       }
                
            </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-3xl">
        <img className='w-24 -mt-6' src={logo} alt="" />
        <h1 className='-mt-6'>Camera Corner</h1>
        </Link>
    </div>
    <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">

        <li className='font-semibold'><Link to='/'>Home</Link></li>
        <li className='font-semibold'><Link to='/blogs'>Blogs</Link></li>

        <div className="dropdown dropdown-hover">
        <li className='font-semibold'> <Link to=''> Categories</Link></li>
        <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-36">
            <li><Link to='/categories?name=canon'>Canon</Link></li>
            <li><Link to='/categories?name=Nikon'>Nikon</Link></li>
            <li><Link to='/categories?name=sony'>Sony</Link></li>
        </ul>
        </div>


            {
                client.userStatus==='Seller' && user?.uid ?
                <>{menuItems1}</>
                :
                null
            }

             {
                client.userStatus==='Buyer' && user?.uid ?
                <>{menuItems2}</>
                :
                 null
            }
            
            {
        isAdmin && <><li className='font-semibold'><Link to='/dashboard'>Dashboard</Link></li></>
            }
        </ul>
    </div>
    <div className="navbar-end">
        {
             user?.uid ?
            <>
            <span onClick={handleLogOut}><button className="btn  btn-warning">Logout</button></span>
            </>
            :
            <>
                <Link to='/login'><button className="btn  btn-warning">Login</button></Link>
            </>
        }

    </div>
    <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
</div>
  );
};

export default Navbar;