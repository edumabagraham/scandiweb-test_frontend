/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useState } from "react";
import { IChildren, IProduct, IProductsContext } from "../types";

const defaultValues = {
  products: [],
  msg:'',
  loading: true,
  skus: [],
  setSkus: () => {},
  setLoading: () => {},
  fetchProducts: () => {},
};

export const ProductsContext = createContext<IProductsContext>(defaultValues);

export const ProductsProvider = ({ children }: IChildren) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [msg, setMsg] = useState('');
  const [skus, setSkus] = useState<string[] | []>([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    const data = await (
      await fetch(
        "https://gloria-graham.000webhostapp.com/api/readproducts.php/"
      )
    ).json()

    setProducts(data)
    setMsg(data.message)
    setLoading(false)
  }

  return (
    <ProductsContext.Provider
      value={{
        products,
        msg,
        loading,
        skus,
        setSkus,
        fetchProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
