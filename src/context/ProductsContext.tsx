/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useState } from "react";
import { IChildren, IProducts, IProductsContext } from "../interface";
import axios from "axios";

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
  const [products, setProducts] = useState<IProducts[]>([]);
  const [msg, setMsg] = useState('');
  const [skus, setSkus] = useState<string[] | []>([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = () => {
    axios
      .get("http://localhost/scandiweb_test/api/readproducts.php")
      .then((res) => {
        setProducts(res.data);
        setMsg(res.data.message);
        
        setLoading(false);
      })
      .catch((err) => console.log(err));
    setLoading(true);
  };

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
