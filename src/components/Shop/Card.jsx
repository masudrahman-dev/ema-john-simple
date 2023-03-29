import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Card = (props) => {
  //   console.log(props.product);
  const { id, img, name, price, stock, seller } = props.product;
  const { addToCart } = props;
  // console.log(addToCart);

  return (
    <>
      <div className='card bg-cyan-900  shadow-xl text-slate-100'>
        <figure className=' pt-8 px-8'>
          <img
            src={
              'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9c7058d8677742ac8519ac3f009cdcf4_9366/Tiro_21_Track_Pants_Black_GH7305_21_model.jpg'
            }
            alt=''
            className='rounded-xl h-64 sm:h-52'
          />
        </figure>
        <div className='card-body items-center text-center text-lg '>
          <h2 className='font-bold'>{name}</h2>
          <p>price : ${price}</p>
          <p>
            seller : {seller} <span>stock : {stock}</span>
          </p>
          <p>Rating : 3 start</p>
          <p className='text-base'>id : {id}</p>
          <div className='card-actions'>
            <button
              onClick={() => addToCart(props.product)}
              className='btn btn-primary'
            >
              Add To Cart{' '}
              <span className='pl-3'>
                <FontAwesomeIcon
                  icon={faCartShopping}
                  beat
                  size='xl'
                />
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
