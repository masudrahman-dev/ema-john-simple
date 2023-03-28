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
      <div className='flex flex-col md:flex-row gap-10 justify-between '>
        <div className=' order-2 md:order-1'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 '>
            {data.map((product) => (
              <Card
                key={product.id}
                product={product}
              ></Card>
            ))}
          </div>
        </div>
        <div className=' border order-1 md:order-2'>
          <CardSideBar></CardSideBar>
        </div>
      </div>
    </div>
  );
};

export default Shop;
