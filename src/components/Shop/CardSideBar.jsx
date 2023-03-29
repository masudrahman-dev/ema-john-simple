import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';

const CardSideBar = (props) => {
  const { carts } = props;
  const [price, setPrice] = useState(0);
  const [shipping, setShipping] = useState(0);
  // console.log(price);
  console.log('carts :>> ', carts);
  useEffect(() => {
    let totalPrice = 0;
    let totalShippingCharge = 0;
    for (const cart of carts) {
      totalPrice += cart.price;
      totalShippingCharge += cart.shipping;
    }
    setPrice(totalPrice);
    setShipping(totalShippingCharge);
  }, [carts]);
  let totalTax = ((price + shipping) * 15) / 100;
  let grandTotal = totalTax + price + shipping;
  console.log('totalTax :>> ', totalTax);
  // console.log('price :>> ', price);

  return (
    <div className='md:sticky md:top-10   '>
      {/* sidebar */}
      <div className='bg-cyan-800  p-11 rounded-xl text-slate-100  '>
        <h2 className='text-center text-2xl mb-5'>Order Summary</h2>
        <ul className=' text-lg leading-10'>
          <li>Selected Items: {props.carts.length}</li>
          <li>Total Price: $ {price.toFixed(2)}</li>
          <li>Total Shipping Charge: $ {shipping.toFixed(2)}</li>
          <li>Tax: $ {totalTax.toFixed(2)}</li>
        </ul>
        <h2>Grand Total: $ {grandTotal.toFixed(2)}</h2>
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
