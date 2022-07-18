import { useProduct } from '../store/ProductContext';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
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
          className="w-auto h-80 object-center border border-slate-100 object-contain p-2 rounded-lg overflow-hidden"
        />
        <div className="ml-12 py-8 h-full ">
          <div className="  bg-indigo-100 text-center font-medium text-sm text-indigo-800 px-4 py-1 w-max rounded-lg  ">
            {product.category}
          </div>
          <div className="h-1/2 mt-8 flex flex-col justify-between">
            <h3 className="text-2xl font-bold text-slate-900">
              {product.name}
            </h3>
            <p className="text-xl mt-4 font-medium text-slate-800">
              ${product.price}
            </p>
            <button
              onClick={deleteHandler}
              type="button"
              className="inline-flex mt-8 w-24 items-center justify-center py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      <p className=" mt-6  text-slate-800">{product.description}</p>
    </div>
  );
};

export default Product;
