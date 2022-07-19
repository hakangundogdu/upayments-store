import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetails from '../components/ProductDetails';
import { useProduct } from '../store/product-context';

const ProductDetailPage = () => {
  const params = useParams();
  const { getProduct, product } = useProduct();

  useEffect(() => {
    getProduct(params.id);
  }, []);

  return <ProductDetails product={product} />;
};

export default ProductDetailPage;
