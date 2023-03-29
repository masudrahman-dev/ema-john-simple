import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';

const CardSideBar = (props) => {
  const { carts } = props;
  const [price, setPrice] = useState(0);
  const [shipping, setShipping] = useState(0);
  
  useEffect(() => {
    const totalPrice = carts.reduce((total, cart) => total + cart.price, 0);
    const totalShippingCharge = carts.reduce((total, cart) => total + cart.shipping, 0);
    setPrice(totalPrice);
    setShipping(totalShippingCharge);
  }, [carts]);
  
  let totalTax = ((price + shipping) * 15) / 100;
  let grandTotal = (totalTax + price + shipping);
  
  const formatter = new Intl.NumberFormat(navigator.language, {
    style: 'currency',
    currency: 'USD',
  });
  const formattedPrice = formatter.format(price);
  const formattedShipping = formatter.format(shipping);
  const formattedTax = formatter.format(totalTax);
  const formattedGrandTotal = formatter.format(grandTotal);
  
  console.log(`Price: ${formattedPrice}`);
  console.log(`Shipping: ${formattedShipping}`);
  console.log(`Tax: ${formattedTax}`);
  console.log(`Grand Total: ${formattedGrandTotal}`);
  


  return (
    <div className='md:sticky md:top-10   '>
      {/* sidebar */}
      <div className='bg-cyan-800  p-11 rounded-xl text-slate-100  '>
        <h2 className='text-center text-2xl mb-5'>Order Summary</h2>
        <ul className=' text-lg leading-10'>
          <li>Selected Items: {props.carts.length}</li>
          <li>Total Price:  {formattedPrice}</li>
          <li>Total Shipping Charge:  {formattedShipping}</li>
          <li>Tax:  {formattedTax}</li>
        </ul>
        <h2>Grand Total:  {formattedGrandTotal}</h2>
        <div className='mt-5 flex flex-col gap-3 '>
          <button className='btn btn-primary w-48'>
            Clear Cart{' '}
            <span className='pl-3'>
              <FontAwesomeIcon
                icon={faTrashCan}
                size='xl'
              />
            </span>
          </button>
          <button className='btn btn-secondary w-48'>
            Review Order{' '}
            <span className='pl-3'>
              <FontAwesomeIcon
                icon={faBagShopping}
                bounce
                size='xl'
              />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardSideBar;
