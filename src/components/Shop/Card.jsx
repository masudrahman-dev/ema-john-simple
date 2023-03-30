import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Card = (props) => {
  //   console.log(props.product);
  const { id, img, name, price, stock, seller } = props.product;
  const { addToCart } = props;

  return (
    <>
      <div className='card bg-cyan-900  shadow-xl text-slate-100'>
        <figure className=' pt-8 px-8'>
          <img
            src={
              id !== 'b357e19b-4dd9-4fc7-b5c0-9ed5255464ba'
                ? img
                : '../../../public/images/giphy.gif'
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
