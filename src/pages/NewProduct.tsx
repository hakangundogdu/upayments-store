import { useRef } from 'react';
import { useProduct } from '../store/product-context';
import { useNavigate } from 'react-router-dom';

const NewProduct: React.FC = () => {
  const { createProduct } = useProduct();
  const navigate = useNavigate();

  const nameRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const avatarRef = useRef<HTMLInputElement>(null);
  const categoryRef = useRef<HTMLSelectElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);

  interface product {
    name: string;
    description: string;
    avatar: string;
    category: string;
    price: number;
    developerEmail?: string;
  }

  function submitHandler(event: React.FormEvent) {
    event.preventDefault();

    const product: product = {
      name: nameRef.current?.value,
      description: descriptionRef.current?.value,
      avatar: avatarRef.current?.value,
      category: categoryRef.current?.value,
      price: parseInt(priceRef.current?.value),
      developerEmail: 'developer@gmail.com',
    };
    createProduct(product);
    navigate('/');
  }

  return (
    <div className="my-8 max-w-xl mx-auto">
      <h2 className="text-xl mb-2 font-bold  text-gray-900">Create Product</h2>
      <form onSubmit={submitHandler}>
        <div className="shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 flex flex-col gap-4 bg-slate-50 sm:p-6">
            <div>
              <label htmlFor="name" className="sr-only">
                Product Name
              </label>
              <input
                id="name"
                name="name"
                type="name"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Product Name"
                ref={nameRef}
              />
            </div>
            <div>
              <label htmlFor="description" className="sr-only">
                Description{' '}
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Description"
                ref={descriptionRef}
              />
            </div>
            <div>
              <label htmlFor="avatar" className="sr-only">
                Image URL{' '}
              </label>
              <input
                id="avatar"
                name="avatar"
                type="avatar"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Image URL"
                ref={avatarRef}
              />
            </div>
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
                defaultValue="Select Category"
              >
                <option className="text-gray-500">Select Category </option>
                <option value="Electronic">Electronic</option>
                <option value="Furnitures">Furnitures</option>
                <option value="Clothing">Clothing</option>
                <option value="Accessories">Accessories</option>
              </select>
            </div>
            <div>
              <label htmlFor="price" className="sr-only">
                Price
              </label>
              <input
                id="price"
                name="price"
                type="number"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Price ($)"
                ref={priceRef}
              />
            </div>

            <div className=" py-3 text-right">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewProduct;
