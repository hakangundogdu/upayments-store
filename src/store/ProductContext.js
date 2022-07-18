import { createContext, useState, useContext } from 'react';

const ProductContext = createContext();

export const ProductProvider = (props) => {
  const [productList, setProductList] = useState([]);
  const [product, setProduct] = useState([]);

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

  const getProduct = async (id) => {
    const response = await fetch(
      `https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/${id}`
    );
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Could not fetch products.');
    }
    setProduct(data);
  };

  const deleteProduct = async (id) => {
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

  return (
    <ProductContext.Provider
      value={{
        getProductList,
        getProduct,
        deleteProduct,
        productList,
        product,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
