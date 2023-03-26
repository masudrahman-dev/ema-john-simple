import React from 'react';

const Shop = () => {
  return (
    <div className='max-w-screen-xl mx-auto  px-5  w-11/12'>
      <div className='grid grid-cols-12 gap-4'>
        {/* cards */}
        <div className='border col-span-8'>
          <div className='card w-96 bg-base-100 shadow-xl border'>
            <figure className='px-10 pt-10'>
              <img
                src='https://source.unsplash.com/user/c_v_r/1600x900'
                alt=''
                className='rounded-xl'
              />
            </figure>
            <div className='card-body items-center text-center'>
              <h2 className='card-title'>Ultraboost 22 Shoes</h2>
              <p>Price: $190 </p>
              <p>Manufacturer : Addidas </p>
              <p>Rating : 3 start</p>
              <div className='card-actions'>
                <button className='btn btn-primary'>Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        {/* sidebar */}
        <div className='border col-span-4 '>
          <h2 className='text-center text-xl my-3'>Order Summary</h2>
          <ul className=' text-lg'>
            <li>Selected Items: 6</li>
            <li>Total Price: $1140</li>
            <li>Total Shipping Charge: $5</li>
            <li>Tax: $114</li>
            <li>Sidebar Item 1</li>
          </ul>
          <h2>Grand Total: $1559</h2>
          <div className='mt-5 flex flex-col gap-3'>
            <button className='btn btn-primary w-48'>Clear Cart🗑</button>
            <button className='btn btn-secondary w-48'>Review Order🎁</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
