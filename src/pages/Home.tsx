import { useState, useEffect } from 'react';
import Product from '../components/Product';
import { useProduct } from '../store/ProductContext';

const Home = () => {
  const { getProductList, productList } = useProduct();

  useEffect(() => {
    getProductList();
  }, []);

  return (
    <>
      {productList && (
        <div className="my-8">
          <div className="mx-auto ">
            <h2 className="text-xl font-bold tracking-tight text-gray-900">
              Featured Products{' '}
            </h2>

            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 ">
              {productList.map(
                (product: {
                  id: number;
                  name: string;
                  price: number;
                  avatar: string;
                }) => (
                  <Product product={product} key={product.id} />
                )
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
