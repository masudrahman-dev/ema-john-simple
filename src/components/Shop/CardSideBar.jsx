import React from 'react';

const CardSideBar = () => {
  return (
    <div className='md:fixed'>
      {/* sidebar */}
      <div className='bg-cyan-800  p-11 rounded-xl text-slate-100  '>
        <h2 className='text-center text-2xl mb-5'>Order Summary</h2>
        <ul className=' text-lg'>
          <li>Selected Items: 6</li>
          <li>Total Price: $1140</li>
          <li>Total Shipping Charge: $5</li>
          <li>Tax: $114</li>
          <li>Sidebar Item 1</li>
        </ul>
        <h2>Grand Total: $1559</h2>
        <div className='mt-5 flex flex-col gap-3 '>
          <button className='btn btn-primary w-48'>Clear Cart🗑</button>
          <button className='btn btn-secondary w-48'>Review Order🎁</button>
        </div>
      </div>
    </div>
  );
};

export default CardSideBar;
