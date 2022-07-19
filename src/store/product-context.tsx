import { createContext, useState, useContext } from 'react';
import { Product } from '../types';

interface Props {
  children: React.ReactNode;
}

type ProductContextType = {
  getProductList: () => void;
  getProduct: (id: string) => void;
  createProduct: (product: Product) => void;
  deleteProduct: (id: string) => void;
  productList: Product[];
  product: Product;
};

const ProductContext = createContext<ProductContextType>({
  getProductList: () => {},
  getProduct: (id: string) => {},
  createProduct: (product: Product) => {},
  deleteProduct: (id: string) => {},
  productList: [],
  product: {} as Product,
});

export const ProductContextProvider: React.FC<Props> = (props) => {
  const [productList, setProductList] = useState<Product[]>([]);
  const [product, setProduct] = useState<Product>({} as Product);

  const getProductList = async () => {
    const response = await fetch(
      'https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/'
    );
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Could not fetch quotes.');
    }

    setProductList(data);
  };

  const getProduct = async (id: string) => {
    const response = await fetch(
      `https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/${id}`
    );
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Could not fetch products.');
    }
    setProduct(data);
  };

  const createProduct = async (product: Product) => {
    const response = await fetch(
      'https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      }
    );

    if (!response.ok) {
      throw new Error('There was an error.');
    }
    getProductList();
  };

  const deleteProduct = async (id: string) => {
    const response = await fetch(
      `https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/${id}`,
      {
        method: 'DELETE',
      }
    );
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'There was an error.');
    }

    getProductList();
  };

  const contextValue: ProductContextType = {
    getProductList,
    getProduct,
    createProduct,
    deleteProduct,
    productList,
    product,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {props.children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
