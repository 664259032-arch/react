import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/auth/action';
import { useNavigate, Link } from 'react-router-dom';
import UserAvatar from './UserAvatar';

const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { name, isAuthenticated } = useSelector((state) => state.auth);

    // Check auth from storage as well for persistence
    const isAuth = isAuthenticated || !!localStorage.getItem('auth') || !!sessionStorage.getItem('auth');

    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
    };

    const handleUserClick = () => {
        if (!isAuth) {
            navigate('/login');
        }
    };

    return (
        <div className="navbar bg-base-100 shadow-sm px-4 lg:px-10 h-20">
            {/* Left: Logo */}
            <div className="navbar-start w-auto">
                <Link to="/" className="btn btn-ghost btn-circle avatar w-14 h-14 border-2 border-black p-1">
                    <div className="w-full rounded-full">
                        <img alt="Storemate Logo" src="https://api.dicebear.com/9.x/avataaars/svg?seed=Bunny" />
                    </div>
                </Link>
                {/* <span className="text-xl font-bold ml-2 hidden sm:block">storemate</span> */}
            </div>

            {/* Center: Menu Links */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold text-base gap-6">
                    <li><a>Product</a></li>
                    <li><a>Promotion</a></li>
                    <li><a>About us</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </div>

            {/* Right: Icons */}
            <div className="navbar-end flex-1 w-auto justify-end gap-2">
                <button className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        {/* <span className="badge badge-sm indicator-item">8</span> */}
                    </div>
                </button>
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        {/* <span className="badge badge-xs badge-primary indicator-item"></span> */}
                    </div>
                </button>

                {/* User Icon / Profile Dropdown */}
                <div className="dropdown dropdown-end">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle avatar"
                        onClick={!isAuth ? handleUserClick : undefined}
                    >
                        {isAuth ? (
                            <UserAvatar />
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                        )}
                    </div>
                    {isAuth && (
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li className="menu-title px-4 py-2">Hi, {name}</li>
                            <li><a>Profile</a></li>
                            <li><a>Settings</a></li>
                            <div className="divider my-0"></div>
                            <li><a onClick={handleLogout} className="text-error">Logout</a></li>
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
