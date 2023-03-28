import React, { useEffect, useState } from 'react';
import Card from './Card';
import CardSideBar from './CardSideBar';

const Shop = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('../../../public/fakeData/products.json');
      const data = await res.json();
      setData(data);
    };
    fetchData();
  }, []);
  // console.log(data);
  return (
    <div className='max-w-screen-xl mx-auto  mt-12 w-11/12'>
      <div className='grid grid-cols-12 gap-11 '>
        <div className='  col-span-9'>
          <div className='grid grid-cols-2 gap-5 '>
            {data.map((product) => (
              <Card
                key={product.id}
                product={product}
              ></Card>
            ))}
          </div>
        </div>
        <div className=' col-span-3'>
          <CardSideBar></CardSideBar>
        </div>
      </div>
    </div>
  );
};

export default Shop;
