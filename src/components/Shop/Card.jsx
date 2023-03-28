import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Card = (props) => {
  //   console.log(props.product);
  const { id, img, name, price, ratings, stock, shipping, seller } =
    props.product;
  return (
    <>
      <div className='card bg-cyan-900  shadow-xl text-slate-100'>
        <figure className=' pt-8 px-8'>
          <img
            src={img}
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
            
            {/* <button className='btn btn-primary'>Add To Cart <FontAwesomeIcon icon={faEnvelope} /></button> */}
            <button className='btn btn-primary'>
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
