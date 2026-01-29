import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import AuthContext from '../CONTEXTS/AuthContext';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const navClass = ({ isActive }) => 
        isActive
            ? "text-orange-400 underline font-extrabold cursor-pointer md:mx-4"
            : "text-white hover:text-orange-300 hover:underline font-extrabold cursor-pointer md:mx-4";
    
    const links = <div className='flex flex-col md:flex-row p-4 md:p-0 bg-green-700 md:bg-none'>
        <NavLink to="/" className={navClass}>Home</NavLink>
        <NavLink to="/explore-gardeners" className={navClass}>Explore Gardeners</NavLink>
        <NavLink to="/browse-tips" className={navClass}>Browse Tips</NavLink>
        <p className='hidden text-white md:mx-4 md:block'>||</p>
        <NavLink to="/share-tip" className={navClass}>Share a Garden Tip (Private)</NavLink>
        <NavLink to="/my-tips" className={navClass}>My Tips (Private)</NavLink>
    </div>

    const handleLogOut = () => {
        logOut().then(res => console.log(res)).catch(err => console.log(err))
    }
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
                    {user ? (
                        <button
                            onClick={handleLogOut}
                            className="btn border-0 bg-red-600 text-white rounded-full hover:bg-red-700 hover:drop-shadow-2xl transition duration-300"
                        >
                            Logout
                        </button>
                    ) : (
                        <Link
                            to="/logIn"
                            className="btn border-0 bg-white text-black rounded-full hover:bg-orange-500 hover:text-white hover:drop-shadow-2xl transition duration-300"
                        >
                            Sign In
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;