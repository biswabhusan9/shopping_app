import { UserButton, useUser, SignInButton, SignOutButton } from '@clerk/clerk-react';
import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ResponsiveMenu = ({ openNav, setOpenNav }) => {
  const { user, isSignedIn } = useUser();

  return (
    <div className={`${openNav ? "left-0":"-left-[100%]"} fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col 
    justify-between bg-white px-8 pb-6 pt-16 text-black md:hidden rounded-r-xl shadow-md transition-all`}>

      
      <div>
        
        <div className='flex items-center justify-start gap-3'>
          {isSignedIn ? (
            <>
              <UserButton size={50} />
              <div>
                <h1 className='text-lg font-medium'>Hello, {user?.firstName}</h1>
                <h2 className='text-sm text-slate-500'>Premium User</h2>
              </div>
            </>
          ) : (
            <>
              <FaUserCircle size={50} />
              <div>
                <h1 className='text-lg font-medium'>Welcome, Guest</h1>
              </div>
            </>
          )}
        </div>

        
        <nav className='mt-12'>
          <ul className='flex flex-col gap-6 text-xl font-semibold'>
            <Link to="/" onClick={() => setOpenNav(false)}><li>Home</li></Link>
            <Link to="/products" onClick={() => setOpenNav(false)}><li>Products</li></Link>
            <Link to="/about" onClick={() => setOpenNav(false)}><li>About</li></Link>
            <Link to="/contact" onClick={() => setOpenNav(false)}><li>Contact</li></Link>
            <Link to="/orders" onClick={() => setOpenNav(false)}><li>Orders</li></Link>

           
            {!isSignedIn && (
              <li>
                <SignInButton mode="modal">
                  <button
                    className="w-full mt-4 bg-red-600 text-white text-base font-medium py-2 rounded-md hover:bg-red-700 transition duration-200"
                  >
                    Sign In
                  </button>
                </SignInButton>
              </li>
            )}

           
            {isSignedIn && (
              <li>
                <SignOutButton>
                  <button
                    className="w-full mt-4 bg-gray-200 text-black text-base font-medium py-2 rounded-md hover:bg-gray-300 transition duration-200"
                  >
                    Sign Out
                  </button>
                </SignOutButton>
              </li>
            )}
          </ul>
        </nav>
      </div>

      
      <div className='mt-10 text-center text-sm text-gray-500'>
        Made with <span className='text-red-500 text-lg'>❤️</span> by <span className='font-semibold'>Biswa</span>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
