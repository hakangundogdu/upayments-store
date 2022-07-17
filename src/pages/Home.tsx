import React from 'react';

const products = [
  {
    createdAt: 1658047534,
    name: 'LAPTOP',
    avatar: 'https://www.casper.com.tr/uploads/2022/04/x500_h270_op.webp',
    developerEmail: 'yavuzc@gmail.com',
    price: '1000',
    id: '154',
    category: 'Electronic',
    description: 'asdasdaSDASDASDASDASDASDASDA',
  },
  {
    createdAt: 1658047534,
    name: 'LAPTOP',
    avatar: 'https://www.casper.com.tr/uploads/2022/04/x500_h270_op.webp',
    developerEmail: 'yavuzc@gmail.com',
    price: '1000',
    id: '154',
    category: 'Electronic',
    description: 'asdasdaSDASDASDASDASDASDASDA',
  },
  {
    createdAt: 1658047534,
    name: 'LAPTOP',
    avatar: 'https://www.casper.com.tr/uploads/2022/04/x500_h270_op.webp',
    developerEmail: 'yavuzc@gmail.com',
    price: '1000',
    id: '154',
    category: 'Electronic',
    description: 'asdasdaSDASDASDASDASDASDASDA',
  },
  {
    createdAt: 1658047534,
    name: 'LAPTOP',
    avatar: 'https://www.casper.com.tr/uploads/2022/04/x500_h270_op.webp',
    developerEmail: 'yavuzc@gmail.com',
    price: '1000',
    id: '154',
    category: 'Electronic',
    description: 'asdasdaSDASDASDASDASDASDASDA',
  },
  {
    createdAt: 1658047534,
    name: 'LAPTOP',
    avatar: 'https://www.casper.com.tr/uploads/2022/04/x500_h270_op.webp',
    developerEmail: 'yavuzc@gmail.com',
    price: '1000',
    id: '154',
    category: 'Electronic',
    description: 'asdasdaSDASDASDASDASDASDASDA',
  },
  {
    createdAt: 1658047534,
    name: 'LAPTOP',
    avatar: 'https://www.casper.com.tr/uploads/2022/04/x500_h270_op.webp',
    developerEmail: 'yavuzc@gmail.com',
    price: '1000',
    id: '154',
    category: 'Electronic',
    description: 'asdasdaSDASDASDASDASDASDASDA',
  },
  {
    createdAt: 1658047534,
    name: 'LAPTOP',
    avatar: 'https://www.casper.com.tr/uploads/2022/04/x500_h270_op.webp',
    developerEmail: 'yavuzc@gmail.com',
    price: '1000',
    id: '154',
    category: 'Electronic',
    description: 'asdasdaSDASDASDASDASDASDASDA',
  },
  {
    createdAt: 1658047534,
    name: 'LAPTOP',
    avatar: 'https://www.casper.com.tr/uploads/2022/04/x500_h270_op.webp',
    developerEmail: 'yavuzc@gmail.com',
    price: '1000',
    id: '154',
    category: 'Electronic',
    description: 'asdasdaSDASDASDASDASDASDASDA',
  },
];

const Home = () => {
  return (
    <div className="my-8">
      <div className="mx-auto ">
        <h2 className="text-xl font-bold tracking-tight text-gray-900">
          Featured Products{' '}
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 ">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={product.avatar}
                  alt={product.name}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.id}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  ${product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
