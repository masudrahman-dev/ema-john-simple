import React from 'react';

const Header = () => {
  return (
    <div className=' bg-emerald-700 '>
      <nav className='max-w-screen-xl mx-auto  py-5  w-11/12'>
        <div className='flex justify-between items-center gap-3 '>
          <img
            src='../../../public/images/Logo.svg'
            alt=''
          />
          <div className=' hidden md:block'>

          <ul className='flex gap-5 text-slate-100 text-lg '>
            <li>
              <a href=''>Order</a>
            </li>
            <li>
              <a href=''>Order Review</a>
            </li>
            <li>
              <a href=''>Manage Inventory</a>
            </li>
            <li>
              <a href=''>Login</a>
            </li>
          </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
