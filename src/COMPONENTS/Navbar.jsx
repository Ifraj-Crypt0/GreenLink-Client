import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
    const links = <>
        <Link to={"/"}><p className='text-white hover:text-orange-300 hover:underline font-extrabold cursor-pointer md:mx-4'>Home</p></Link>
        <Link to={"/explore-gardeners"}><p className='text-white hover:text-orange-300 hover:underline font-extrabold cursor-pointer md:mx-4'>Explore Gardeners</p></Link>
        <Link to={"/browse-tips"}><p className='text-white hover:text-orange-300 hover:underline font-extrabold cursor-pointer md:mx-4'>Browse Tips</p></Link>
        <p className='hidden md:mx-4 md:block text-white'>||</p>
        <Link to={"/share-tip"}><p className='text-white hover:text-orange-300 hover:underline font-extrabold cursor-pointer md:mx-4'>Share a Garden Tip (Private) </p></Link>
        <Link to={"/my-tips"}> <p className='text-white hover:text-orange-300 hover:underline font-extrabold cursor-pointer md:mx-4'> My Tips (Private) </p></Link>
    </>
    return (
        <div>
            <div className="navbar bg-green-700 lg:px-4 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="text-white font-bold text-2xl">GreenLink</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn border-0 bg-white rounded-full hover:bg-orange-500 hover:text-white hover:drop-shadow-2xl transition duration-400  ">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;