import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductId from '../components/ProductId';
import { useProduct } from '../store/ProductContext';

const ProductDetail = () => {
  const params = useParams();
  const { getProduct, product } = useProduct();

  useEffect(() => {
    getProduct(params.id);
  }, []);

  return <ProductId product={product} />;
};

export default ProductDetail;
