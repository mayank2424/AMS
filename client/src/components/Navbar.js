// @ts-nocheck
/** Navbar Component */
import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    const { isAuthenticated, logoutAction, user } = props;
    return (
        <nav className='flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono' 
        role='navigation'>
            <Link to='/' className='pl-8'>
                { isAuthenticated && user && user.data && user.data.name ? <span className='text-blue-500 font-bold'>{`Welcome ${user.data.name}! `}</span> : null}
                Publish Article with ease!</Link>
            <div className="px-4 cursor-pointer md:hidden">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </div>
            <div className='pr-8 md:block hidden'>
                {
                    !isAuthenticated ?
                    (
                        <>
                            <Link to='/login' className='p-4'>Login</Link>
                            <Link to='/signup' className='p-4'>Signup</Link>
                        </>
                    ):
                    <>
                     <Link to='/create' className='p-4 text-blue-600 font-bold'>Publish new</Link>
                     <Link to='/my' className='p-4 text-blue font-bold'>My Articles</Link>
                    <a href="#" onClick={logoutAction} className='text-primary font-bold'>Log Out</a>
                    </>
                }
            </div>
        </nav>  
    )
};

export default Navbar;
