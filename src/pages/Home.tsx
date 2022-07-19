import { useEffect, useRef, useState } from 'react';
import ProductBox from '../components/ProductBox';
import { Link } from 'react-router-dom';
import { useProduct } from '../store/product-context';
import { HiOutlinePlusSm } from 'react-icons/hi';

const Home = () => {
  const { getProductList, productList } = useProduct();
  const categoryRef = useRef<HTMLSelectElement>(null);
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  useEffect(() => {
    getProductList();
  }, []);

  const filterHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(categoryRef.current.value);
  };

  const filteredList = productList.filter(
    (product) => product.category === selectedCategory
  );

  const list =
    selectedCategory === 'All Categories' ? productList : filteredList;

  return (
    <>
      <div className="my-8">
        <div className="mx-auto ">
          <div className="flex justify-between items-center w-full ">
            <div>
              <label htmlFor="category" className="sr-only">
                Category
              </label>
              <select
                id="category"
                name="category"
                required
                className="relative block w-full px-2 py-2 border border-gray-300 placeholder-gray-500 text-gray-500 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Select Category"
                ref={categoryRef}
                defaultValue="All Categories"
                onChange={filterHandler}
              >
                <option>All Categories </option>
                <option value="Electronic">Electronic</option>
                <option value="Furnitures">Furnitures</option>
                <option value="Clothing">Clothing</option>
                <option value="Accessories">Accessories</option>
              </select>
            </div>

            <Link to="/newproduct">
              <button
                onClick={() => {}}
                type="button"
                className="inline-flex w-36 items-center justify-center py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                <HiOutlinePlusSm className="mr-2 w-5 h-5 " />
                Add Product
              </button>
            </Link>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 ">
            {list.length > 0 ? (
              list.map((product) => (
                <ProductBox product={product} key={product.id} />
              ))
            ) : (
              <p className="text-xl font-bold tracking-tight text-gray-900">
                {selectedCategory !== 'All Categories'
                  ? 'No Products in this category'
                  : 'Loading...'}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
