import { useProduct } from '../store/product-context';
import { useNavigate } from 'react-router-dom';

const ProductDetails = ({ product }) => {
  const { deleteProduct } = useProduct();
  const navigate = useNavigate();

  const deleteHandler = () => {
    deleteProduct(product.id);
    navigate('/');
  };
  return (
    <div className="my-8 max-w-2xl mx-auto">
      <div className="flex items-center flex-col md:flex-row ">
        <img
          src={product.avatar}
          alt={product.name}
          className="w-80 h-80 object-center border border-slate-100 object-contain p-2 rounded-lg overflow-hidden"
        />
        <div className="ml-12 py-12 w-1/2 h-80 flex flex-col justify-between">
          <div className="  bg-indigo-100 text-center font-bold text-sm text-indigo-800 px-4 py-1 w-max rounded-lg  ">
            {product.category}
          </div>
          <div className="h-1/2 ">
            <h3 className="text-2xl font-bold text-slate-900">
              {product.name}
            </h3>
            <p className="text-xl font-medium text-slate-800">
              ${product.price}
            </p>
          </div>
          <button
            onClick={deleteHandler}
            type="button"
            className="inline-flex w-24 items-center justify-center py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Delete
          </button>
        </div>
      </div>
      <p className=" mt-6 border-slate-200 border-t pt-5  text-slate-800">
        {product.description}
      </p>
    </div>
  );
};

export default ProductDetails;
