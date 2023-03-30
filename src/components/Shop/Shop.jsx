import React, { useEffect, useState } from 'react';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Card from './Card';


const Shop = (props) => {
  // get data
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('../../../public/fakeData/products.json');
      const data = await res.json();
      setData(data);
    };
    fetchData();
  }, []);
  const [carts, setCarts] = useState([]);
  const addToCart = (product) => {
    const newCarts = [...carts, product];
    // console.log(product);
    setCarts(newCarts);
  };

  addToDb()
  return (
    <div className='max-w-screen-xl mx-auto  mt-12 w-11/12'>
      <div className='grid grid-cols-1 md:grid-cols-12 gap-10 '>
        <div className='sticky top-0 z-10  md:order-1  md:col-span-5 lg:col-span-4 xl:col-span-3 '>
          <Cart carts={carts}></Cart>
        </div>
        <div className=' z-0 md:col-span-7 lg:col-span-8 xl:col-span-9 '>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
            {data.map((product) => (
              <Card
                addToCart={addToCart}
                key={product.id}
                product={product}
              ></Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
